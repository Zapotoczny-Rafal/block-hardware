module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertPathData: {
            floatPrecision: 2,
            noSpaceAfterFlags: false
          },

          // Sort the attributes on the <svg> tag
          sortAttrs: {
            order: ['role', 'viewBox'],
            xmlnsOrder: 'end'
          },

          // Convert basic shapes such as <circle> to <path>
          convertShapeToPath: {
            // including <arc>
            convertArcs: true
          },

          // Compound all <path>s into one
          mergePaths: {
            force: true,
            noSpaceAfterFlags: false
          },

          // Keep the <title> tag
          removeTitle: false,

          // to the <svg> tag if it's not there already
          addAttributesToSVGElement: {
            attributes: [
              { role: 'img' }
            ]
          },

          // Keep the 'role' attribute, if it's already defined
          removeUnknownsAndDefaults: {
            keepRoleAttr: true
          },

          // <svg> tags
          removeAttrs: {
            attrs: [
              'baseProfile',
              'version',
              'fill-rule'
            ]
          },

          // Remove paths with fill="none"
          removeUselessStrokeAndFill: {
            removeNone: true
          },

          removeDoctype: true,
          removeXMLProcInst: true,
          removeComments: true,
          removeMetadata: true,
          removeEditorsNSData: true,
          cleanupAttrs: true,
          inlineStyles: true,
          minifyStyles: true,
          convertStyleToAttrs: true,
          cleanupIDs: true,
          prefixIds: true,
          removeRasterImages: true,
          removeUselessDefs: true,
          cleanupNumericValues: true,
          cleanupListOfValues: true,
          convertColors: true,
          removeNonInheritableGroupAttrs: true,
          removeViewBox: true,
          cleanupEnableBackground: true,
          removeHiddenElems: true,
          removeEmptyText: true,
          moveElemsAttrsToGroup: true,
          moveGroupAttrsToElems: true,
          collapseGroups: true,
          convertTransform: true,
          removeEmptyAttrs: true,
          removeEmptyContainers: true,
          removeUnusedNS: true,
          removeDesc: true,
          removeDimensions: true,
          removeStyleElement: true,
          removeScriptElement: true,
          removeOffCanvasPaths: true,
          reusePaths: true
        }
      }
    }
  ]
}
