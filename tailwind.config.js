const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "5rem",
      },
    },
    extend: {
      height: {
        97: '97rem',
        98: '98rem',
        99: '99rem',
        100: '100rem',
        105: '105rem',
        110: '110rem',
        115: '115rem',
        120: '120rem',
        125: '125rem',
        130: '130rem',
        135: '135rem',
        140: '140rem',
        145: '145rem',
        150: '150rem',
        155: '155rem',
        160: '160rem',
        165: '165rem',
        170: '170rem',
        175: '175rem',
        180: '180rem',
        185: '185rem',
        190: '190rem',
        195: '195rem',
        200: '200rem',
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      red: "#74113f",
      primary: {
        600: "#74113f",
        300: "#74113f",
        100: "#74113f",
        50: "#74113f",
        10: "#6e2e4c"
      },
      neutral: {
        900: "#2C2C2C",
        700: "#444444",
        500: "#7C7C7C",
        300: "#D9D9D6",
        100: "#E5E5E5",
      },
    },
    fontFamily: {
      display: ["Playfair Display", "sans-serif"],
      body: ["Outfit", "sans-serif"],
    },
    fontSize: {
      "number-huge": [
        "30px",
        {
          letterSpacing: "0em",
          lineHeight: "20px",
        },
      ],
      "display-2xl": [
        "72px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "96px",
        },
      ],
      "display-xl": [
        "60px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "72px",
        },
      ],
      "display-lg": [
        "48px",
        {
          letterSpacing: "0em",
          lineHeight: "60px",
        },
      ],
      "display-md": [
        "36px",
        {
          letterSpacing: "0em",
          lineHeight: "48px",
        },
      ],
      "display-sm": [
        "30px",
        {
          letterSpacing: "0em",
          lineHeight: "40px",
        },
      ],
      "display-xs": [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      "display-xxs": [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "26px",
        },
      ],
      
      "body-xl": [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],

      "body-xxl": [
        "30px",
        {
          letterSpacing: "0em",
          lineHeight: "40px",
        },
      ],

      "body-lg": [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      "body-md": [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "24px",
        },
      ],
      "body-sm": [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "24px",
        },
      ],
      "body-xs": [
        "12px",
        {
          letterSpacing: "0em",
          lineHeight: "16px",
        },
      ],
    },
    boxShadow: {
      xs: "0px 1px 2px rgba(17, 24, 39, 0.05)",
      sm: "0px 1px 3px rgba(17, 24, 39, 0.1), 0px 1px 2px rgba(17, 24, 39, 0.06)",
      md: "0px 4px 8px -2px rgba(17, 24, 39, 0.1), 0px 2px 4px -2px rgba(17, 24, 39, 0.06)",
      lg: "0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)",
      xl: "0px 20px 24px -4px rgba(17, 24, 39, 0.1), 0px 8px 8px -4px rgba(17, 24, 39, 0.04)",
      "2xl": "0px 24px 48px -12px rgba(17, 24, 39, 0.25)",
    },
    extend: {
      ringWidth: {
        5: "4px",
      },
      ringColor: {
        black: "#000",
      },
      spacing: {
        18: "72px",
        22: "88px",
        30: "120px",
        62: "248px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".vertical-rl": {
          "writing-mode": "vertical-rl",
        },
      });
    }),
  ],
};
