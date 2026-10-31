#!/usr/bin/env node
// Token-cheap helper for editing dashboard/progress-data.js.
// Usage (run from anywhere):
//   node dashboard/tools/update.js show [area-id]
//   node dashboard/tools/update.js set "<topic words>" <0-4> [--note ../topics/...md]
//   node dashboard/tools/update.js add <area-id> "<topic name>" <c|i|a> [level] [--note ...] [--mdn Reference/...]
//   node dashboard/tools/update.js milestone "<text>" [--date YYYY-MM-DD]
//   node dashboard/tools/update.js snapshot [--date YYYY-MM-DD]
// Levels: 0 Not started, 1 Seen, 2 Learning, 3 Practiced, 4 Can explain.
// Never run set/add/milestone/snapshot until Jordan explicitly asks for a dashboard update.

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'progress-data.js');
const HEAD = '// Data for dashboard/index.html. Edit with dashboard/tools/update.js (see UPDATE-GUIDE.md).\nwindow.PROGRESS = ';

function load() {
  const raw = fs.readFileSync(FILE, 'utf8');
  const start = raw.indexOf('window.PROGRESS = ');
  if (start < 0) throw new Error('progress-data.js format not recognized');
  const json = raw.slice(start + 'window.PROGRESS = '.length).trim().replace(/;$/, '');
  return JSON.parse(json);
}
function save(d) {
  fs.writeFileSync(FILE, HEAD + JSON.stringify(d, null, 1) + ';\n');
}

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf('--' + name);
  if (i < 0) return null;
  const v = args[i + 1];
  args.splice(i, 2);
  return v;
};
const today = () => new Date().toISOString().slice(0, 10);
const pct = (x) => Math.round(x * 1000) / 10;

function scores(d) {
  const W = d.levels.map((l) => l.weight);
  const all = d.areas.flatMap((a) => a.topics);
  const sc = (list) => (list.length ? list.reduce((s, t) => s + W[t.level], 0) / list.length : 0);
  const counts = d.levels.map(() => 0);
  all.forEach((t) => counts[t.level]++);
  return {
    core: pct(sc(all.filter((t) => t.tier === 'c'))),
    coreInt: pct(sc(all.filter((t) => t.tier !== 'a'))),
    all: pct(sc(all)),
    counts,
  };
}

const cmd = args.shift();
const d = load();

if (cmd === 'show') {
  const only = args[0];
  const s = scores(d);
  console.log(`Core ${s.core}% | Core+Int ${s.coreInt}% | All ${s.all}% | counts ${s.counts.join('/')} | last snapshot ${d.history.at(-1)?.date}`);
  d.areas.filter((a) => !only || a.id === only).forEach((a) => {
    console.log(`\n[${a.id}] ${a.name}`);
    a.topics.forEach((t) => console.log(`  ${t.level} ${t.tier} ${t.name}`));
  });
} else if (cmd === 'set') {
  const query = (args.shift() || '').toLowerCase();
  const level = Number(args.shift());
  const note = flag('note');
  if (!query || !(level >= 0 && level <= 4)) throw new Error('usage: set "<topic words>" <0-4>');
  const hits = d.areas.flatMap((a) => a.topics.filter((t) => t.name.toLowerCase().includes(query)).map((t) => ({ a, t })));
  if (hits.length !== 1) {
    console.log(hits.length ? 'Ambiguous, be more specific:' : 'No match. Try fewer words.');
    hits.forEach(({ a, t }) => console.log(`  [${a.id}] ${t.name}`));
    process.exit(1);
  }
  const { a, t } = hits[0];
  const from = t.level;
  t.level = level;
  if (note) t.note = note;
  save(d);
  console.log(`[${a.id}] ${t.name}: ${d.levels[from].name} -> ${d.levels[level].name}`);
} else if (cmd === 'add') {
  const note = flag('note');
  const mdn = flag('mdn');
  const [areaId, name, tier, level = '0'] = args;
  const area = d.areas.find((a) => a.id === areaId);
  if (!area || !name || !['c', 'i', 'a'].includes(tier)) throw new Error('usage: add <area-id> "<name>" <c|i|a> [level]');
  const t = { name, level: Number(level), tier };
  if (note) t.note = note;
  if (mdn) t.mdn = mdn;
  area.topics.push(t);
  save(d);
  console.log(`Added to ${areaId}: ${name}`);
} else if (cmd === 'milestone') {
  const date = flag('date') || today();
  const text = args.shift();
  if (!text) throw new Error('usage: milestone "<text>"');
  d.milestones.push({ date, text });
  save(d);
  console.log(`Milestone added (${date}): ${text}`);
} else if (cmd === 'snapshot') {
  const date = flag('date') || today();
  const entry = { date, ...scores(d) };
  const i = d.history.findIndex((h) => h.date === date);
  if (i >= 0) d.history[i] = entry; else d.history.push(entry);
  d.history.sort((x, y) => x.date.localeCompare(y.date));
  d.updated = date;
  save(d);
  console.log(`Snapshot ${date}: core ${entry.core}%, core+int ${entry.coreInt}%, all ${entry.all}%`);
} else {
  console.log('Commands: show [area] | set "<topic>" <0-4> | add <area> "<name>" <c|i|a> [level] | milestone "<text>" | snapshot');
}
