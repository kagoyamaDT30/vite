import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
    // 参照箇所の指定、デフォルトは'./'
    root: './',
    // buildディレクトリの指定、デフォルトは'./dist'
    build: {
        outDir: './dist'
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer,
            ]
        }
    },
    plugins: [
        viteImagemin({
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: { quality: 80 },
            pngquant: {
                quality: [.7, .85],
                speed: 1,
            },
        }),
    ],
    server: {
        port: 8881
    }
})
