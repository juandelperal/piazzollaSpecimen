let mix = require('laravel-mix');

if (mix.inProduction()) {
    mix.setPublicPath('dist/')
}

mix.js('js/app.js', 'dist')
    .sass('scss/app.scss', 'dist')
    .copy('fonts', 'dist/fonts')
    .copy('images', 'dist/images')
    .copy('icons/*', 'dist')