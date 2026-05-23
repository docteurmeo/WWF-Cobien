/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // === COLORS — matches Figma local paint styles exactly ===
      colors: {
        ocean: {
          light: '#7DD3D0',
          mid: '#3AACA8',
          deep: '#1A7F7C',
          primary: '#2A9B97',
        },
        sand: {
          light: '#F5EDD8',
          mid: '#E8D5B0',
          dark: '#C9B48A',
        },
        green: {
          light: '#6BAE6B',
          mid: '#3D8B3D',
          deep: '#1E5C1E',
        },
        coral: {
          DEFAULT: '#E86B35',
          light: '#F5A07A',
        },
        ink: {
          white: '#FFFFFF',
          offwhite: '#F8F5EF',
          main: '#1A2E2D',
          muted: '#5A7370',
          bgdark: '#0F2524',
        },
      },
      // === FONTS — Geologica (display + body) + Lora Italic (quote/note) ===
      fontFamily: {
        display: ['Geologica', 'system-ui', 'sans-serif'],
        body: ['Geologica', 'system-ui', 'sans-serif'],
        quote: ['"Lora"', 'Georgia', 'serif'],
      },
      // === FONT SIZES — from Figma text styles ===
      fontSize: {
        // Display
        'h1-hero': ['76px', { lineHeight: '100%', letterSpacing: '-2px', fontWeight: '900' }],
        'h2-section': ['52px', { lineHeight: '108%', letterSpacing: '-0.8px', fontWeight: '700' }],
        'h3-card': ['28px', { lineHeight: '116%', letterSpacing: '-0.3px', fontWeight: '700' }],
        'h4-sub': ['20px', { lineHeight: '125%', fontWeight: '600' }],
        // Data
        'data-hero': ['88px', { lineHeight: '95%', letterSpacing: '-2.5px', fontWeight: '900' }],
        'data-mid': ['48px', { lineHeight: '100%', letterSpacing: '-1px', fontWeight: '900' }],
        'data-label': ['14px', { lineHeight: '140%', letterSpacing: '0.8px', fontWeight: '500' }],
        // Nav / Labels
        'nav-link': ['14px', { lineHeight: '100%', letterSpacing: '0.5px', fontWeight: '500' }],
        'tag-up': ['11px', { lineHeight: '100%', letterSpacing: '2px', fontWeight: '600' }],
        'cta-btn': ['14px', { lineHeight: '100%', letterSpacing: '0.5px', fontWeight: '500' }],
        'cta-arrow': ['15px', { lineHeight: '100%', letterSpacing: '0.5px', fontWeight: '600' }],
        // Body
        'body-intro': ['20px', { lineHeight: '162%', fontWeight: '500' }],
        'body-default': ['16px', { lineHeight: '168%', fontWeight: '400' }],
        'body-light': ['16px', { lineHeight: '170%', fontWeight: '300' }],
        'body-caption': ['12px', { lineHeight: '150%', letterSpacing: '0.2px', fontWeight: '400' }],
        'body-meta': ['11px', { lineHeight: '145%', letterSpacing: '0.3px', fontWeight: '400' }],
        // Quote / Note (Lora Italic)
        'quote-pull': ['22px', { lineHeight: '155%', fontWeight: '500', fontStyle: 'italic' }],
        'quote-large': ['26px', { lineHeight: '142%', fontWeight: '500', fontStyle: 'italic' }],
        'quote-note': ['15px', { lineHeight: '165%', fontWeight: '400', fontStyle: 'italic' }],
        'quote-attrib': ['13px', { lineHeight: '160%', letterSpacing: '0.3px', fontWeight: '300' }],
      },
      // === SPACING — 12-col grid 1200px container, 120px margin ===
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        'mx-page': '120px', // page margin
      },
      // === SHADOWS — matches Figma effects ===
      boxShadow: {
        'photo': '0 8px 32px rgba(13, 38, 36, 0.18)',
        'photo-sm': '0 8px 24px rgba(13, 38, 36, 0.13)',
        'photo-lg': '0 20px 60px rgba(13, 38, 36, 0.18)',
        'card': '0 16px 40px rgba(13, 38, 36, 0.13)',
        'card-sm': '0 14px 32px rgba(13, 38, 36, 0.12)',
        'btn-teal': '0 8px 20px rgba(42, 155, 151, 0.35)',
        'btn-coral': '0 8px 16px rgba(232, 107, 53, 0.35)',
        'nav': '0 4px 20px rgba(13, 38, 36, 0.05)',
      },
      borderRadius: {
        'sm-2': '2px',
      },
    },
  },
  plugins: [],
};
