// vite.config.js
export default {
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'scene-ui[extname]',
                chunkFileNames: '[name].js',
                entryFileNames: 'scene-ui.js',
            },
        },
    },
}