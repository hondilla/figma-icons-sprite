module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "svg:fill",
      },
    },
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
    {
      name: "sortAttrs",
      params: {
        xmlnsOrder: "alphabetical",
      },
    },
  ],
};