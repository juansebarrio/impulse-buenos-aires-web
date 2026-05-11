export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        'var(--color-bg)',
        surface:   'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        border:    'var(--color-border)',
        accent:    'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        muted:     'var(--color-muted)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body:    'var(--font-body)',
      },
    },
  },
  plugins: [],
}
