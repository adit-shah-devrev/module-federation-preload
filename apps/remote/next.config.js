//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        exposes: {
          './hello-world': './components/hello-world.tsx',
          './use-routing': './hooks/use-routing.ts',
        },
        extraOptions: {},
        filename: 'static/chunks/remoteEntry.js',
        name: 'remote',
        remotes: {},
        shared: {
          '@module-federation-preload/contexts': {
            requiredVersion: false,
            singleton: true,
            // issuerLayer: options.isServer
            //   ? 'pages-dir-node'
            //   : 'pages-dir-browser',
            // layer: options.isServer ? 'pages-dir-node' : 'pages-dir-browser',
          },
        },
      })
    );

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
