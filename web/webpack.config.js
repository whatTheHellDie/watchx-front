const { composePlugins, withNx,withWeb ,} = require('@nx/webpack');
const { withReact } = require('@nx/react');
const paths = require('./paths');
const lessRegex = /\.less$/; 
const lessModuleRegex = /\.module\.less$/;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(),withWeb(), (config,webpack,dd) => {
  //   const getStyleLoaders = (cssOptions, preProcessor) => {
  //   const loaders = [
  //     isEnvDevelopment && require.resolve('style-loader'),
  //     isEnvProduction && {
  //       loader: MiniCssExtractPlugin.loader,
  //       // css is located in `static/css`, use '../../' to locate index.html folder
  //       // in production `paths.publicUrlOrPath` can be a relative path
  //       options: paths.publicUrlOrPath.startsWith('.')
  //         ? { publicPath: '../../' }
  //         : {},
  //     },
  //     {
  //       loader: require.resolve('css-loader'),
  //       options: cssOptions,
  //     },
  //     {
  //       // Options for PostCSS as we reference these options twice
  //       // Adds vendor prefixing based on your specified browser support in
  //       // package.json
  //       loader: require.resolve('postcss-loader'),
  //       options: {
  //         postcssOptions: {
  //           // Necessary for external CSS imports to work
  //           // https://github.com/facebook/create-react-app/issues/2677
  //           ident: 'postcss',
  //           config: false,
  //           plugins:[
  //                 'postcss-flexbugs-fixes',
  //                 [
  //                   'postcss-preset-env',
  //                   {
  //                     autoprefixer: {
  //                       flexbox: 'no-2009',
  //                     },
  //                     stage: 3,
  //                   },
  //                 ],
  //                 // Adds PostCSS Normalize as the reset css with default options,
  //                 // so that it honors browserslist config in package.json
  //                 // which in turn let's users customize the target behavior as per their needs.
  //                 'postcss-normalize',
  //               ]
  //         },
  //         sourceMap: false,
  //       },
  //     },
  //   ].filter(Boolean);
  //   if (preProcessor) {
  //     loaders.push(
  //       {
  //         loader: require.resolve('resolve-url-loader'),
  //         options: {
  //           sourceMap: false,
  //           root: paths.appSrc,
  //         },
  //       },
  //       {
  //         loader: require.resolve(preProcessor),
  //         options: {
  //           sourceMap: true,
  //         },
  //       }
  //     );
  //   }
  //   return loaders;
  // };
  // const webpackEnv=webpack.configuration
  // const isEnvDevelopment = webpackEnv === 'development';
  // const isEnvProduction = webpackEnv === 'production';
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
//   config.ignoreWarnings = [/Failed to parse source map/];
// config.resolve.alias['@']=path.resolve(__dirname, 'src')

// config.module.rules[6].oneOf.splice(10,1)
// config.module.rules[6].oneOf.splice(6,1)
// config.module.rules[6].oneOf.splice(2,1)
// config.module.rules[6].oneOf.push({
//               loader: require.resolve("less-loader"),
//               options: {
//                 lessOptions: {
//                   modules: false,
//                   modifyVars: undefined,
//                   javascriptEnabled: true
//                 }
//               }
//             })
   
console.log(  config.module.rules[6],'rules')
  return config;
});
