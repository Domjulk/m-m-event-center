import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const html = readFileSync('public/m-and-m-event-center/index.html', 'utf8');

describe('M & M Event Center supplied listing details', () => {
  it('uses the supplied phone number for every calling link', () => {
    const links = [...html.matchAll(/href="(tel:[^"]+)"/g)].map((match) => match[1]);
    expect(links.length).toBeGreaterThanOrEqual(3);
    expect(links.every((link) => link === 'tel:08039482075')).toBe(true);
  });

  it('shows the supplied Garki address', () => {
    expect(html).toContain('Tafawa Balewa Way, Garki, Abuja');
    expect(html).toContain('900103, Federal Capital Territory');
  });

  it('shows the supplied 4.6 rating and 386 reviews', () => {
    expect(html).toContain('<strong>4.6</strong>');
    expect(html).toContain('Based on 386 reviews');
  });

  it('uses the reviews shown in the supplied listing screenshots', () => {
    expect(html).toContain('Michael Akuka');
    expect(html).toContain('Mfonobong Akpainyang');
    expect(html).not.toContain('Omenogo The4th');
  });

  it('does not invent opening hours', () => {
    expect(html).not.toContain('Open 24 hours');
  });
});
