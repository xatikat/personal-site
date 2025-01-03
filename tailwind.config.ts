import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'accent-1': 'var(--accent-1)',
  			'accent-2': 'var(--accent-2)',
  			'accent-3': 'var(--accent-3)',
  			'dark-accent': 'var(--dark-accent)',
  			'light-accent': 'var(--light-accent)',
  		},
  	},
  	borderWidth: {
  		'4': '4px',
  		'8': '8px',
  		'10': '10px'
  	}
  },
  plugins: [
    daisyui,
      require("tailwindcss-animate")
],
} satisfies Config;
