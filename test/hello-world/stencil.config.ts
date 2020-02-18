import { Config } from '../../dist';

export const config: Config = {
  namespace: 'HelloWorld',
  outputTargets: [
    { type: 'dist' },
    { type: 'dist-hydrate-script' },
    {
      type: 'experimental-dist-module',
      dir: 'www'
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        {
          src: 'index-module.html',
          dest: 'index-module.html'
        }
      ]
    }
  ],
  enableCache: false,
  hydratedFlag: null,
  hashFileNames: false,
  extras: {
    cssVarsShim: false,
    dynamicImportShim: false,
    safari10: false,
    scriptDataOpts: false,
    shadowDomShim: false,
  }
};