import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    // Remove `vite-plugin-dts` for Storybook builds to avoid API Extractor
    // errors and unnecessary type generation in the Storybook pipeline.
    if (config.plugins) {
      const plugins = config.plugins as any[]
      config.plugins = plugins
        .flat()
        .filter((plugin) => plugin?.name !== 'vite:dts')
    }

    config.plugins?.push(
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')],
      })
    )

    if (configType === 'PRODUCTION') {
      config.base = '/react-ui_library/'

      config.build = {
        ...config.build,
        assetsDir: 'assets',
        modulePreload: {
          polyfill: false,
        },
        rollupOptions: {
          ...config.build?.rollupOptions,
          output: {
            ...config.build?.rollupOptions?.output,
            entryFileNames: 'assets/[name]-[hash].js',
            chunkFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash].[ext]',
            manualChunks: undefined,
          },
        },
      }
    }

    return config
  },
}

export default config
