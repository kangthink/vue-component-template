
// Browser Support for ES5 (2009)
// https://www.w3schools.com/js/js_versions.asp

const presets = [
    [
      "@babel/env",
      {
        targets: {
          ie: "11",
          edge: "10",
          firefox: "21",
          chrome: "23",
          safari: "6",
          opera: "15"
        },
        useBuiltIns: "usage",
      },
    ],
  ];
  
  module.exports = { presets };
