import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "https://mainnet.evercloud.dev/bfadf00e31b1428daad660eb873657f4/graphql",
  documents: ['src/**/*.ts'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;