// Turns src/data/fallback-events.json into an .ics file you can import
// into the club Google Calendar (Settings → Import & export → Import).
// Run: node scripts/make-ics.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const events = JSON.parse(readFileSync(new URL('../src/data/fallback-events.json', import.meta.url)));
const ymd = (s) => s.replaceAll('-', '');
const nextDay = (s) => {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10);
};
const esc = (s = '') => s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/[,;]/g, (c) => '\\' + c);
const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');

const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Triton NeuroTech//Events//EN', 'CALSCALE:GREGORIAN'];
events.forEach((e, i) => {
  lines.push(
    'BEGIN:VEVENT',
    `UID:tnt-${ymd(e.start)}-${i}@tritonneurotech.com`,
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${ymd(e.start)}`,
    `DTEND;VALUE=DATE:${ymd(nextDay(e.end ?? e.start))}`, // all-day end is exclusive
    `SUMMARY:${esc(e.title)}`,
    `LOCATION:${esc(e.location)}`,
    `DESCRIPTION:${esc(e.description)}`,
    'END:VEVENT',
  );
});
lines.push('END:VCALENDAR');

const out = new URL('../calendar-import/tnt-fall-2026.ics', import.meta.url);
writeFileSync(out, lines.join('\r\n') + '\r\n');
console.log(`Wrote ${events.length} events to ${out.pathname}`);
