//https://nitro.unjs.io/config
export default defineNitroConfig({
    preset: 'bun',
    plugins: ['plugins/1.routes.ts'],
    experimental: {
        openAPI: true
    },
    baseURL: '/',
    typescript: {
        tsConfig: {
            compilerOptions:{
                moduleResolution: 'bundler',
                allowImportingTsExtensions: true,
                noEmit: true,
                allowJs: true,
                esModuleInterop: true,
                allowSyntheticDefaultImports: true,
                baseUrl: '../../'
            }
        }
    },

});
