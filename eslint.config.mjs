import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTypeScript,
  {
    rules: {
      // Fabric.js exposes mutable canvas objects by design.
      "react-hooks/immutability": "off",
      // Existing editor controls intentionally synchronize state from canvas events.
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default config;
