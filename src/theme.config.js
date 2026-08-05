// Single source of truth for colors and fonts across the whole site.
// Change a value here and it updates everywhere — no hex codes or font
// names should be hardcoded directly in any component.

export const colors = {
  // Tokens below are extracted directly from ScaleIQ_Minimal_Demo.html's
  // :root — that file is the design system source of truth, not this list.
  ink: '#1A1815',
  inkSoft: '#55504A',
  inkMuted: '#8C8680',
  paper: '#FFFFFF',
  off: '#F7F5F1',
  line: 'rgba(26,24,21,0.09)',
  gold: '#BD8737',
  goldSoft: '#F2E4CC',
};

export const fonts = {
  // PT Serif bold / bold-italic for headlines — final, after Roboto Slab →
  // DM Serif Display → Fraunces → Playfair Display → PT Serif. See Master Brief §5.
  heading: "'PT Serif', serif",
  body: "'DM Sans', sans-serif",
  logo: "'Orbitron', sans-serif",
};

export const theme = { colors, fonts };

export default theme;
