//https://nitro.unjs.io/config
export default defineNitroConfig({
    preset: 'node',
    experimental: {
        openAPI: true
    },
    // typescript: {
    //     tsConfig: {
    //         compilerOptions:{
    //             moduleResolution: 'bundler',
    //             allowImportingTsExtensions: true,
    //             noEmit: true,
    //             allowJs: true,
    //             esModuleInterop: true,
    //             allowSyntheticDefaultImports: true
    //         }
    //     }
    // },

});
