module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transformIgnorePatterns: [
    "node_modules/(?!vee-validate/dist/rules|vuex-composition-helpers)"
  ],
  globals: {
    "ts-jest": {
      isolatedModules: true
    }
  }
};
