const mix = require('laravel-mix');

mix.webpackConfig({
    node: {
      fs: "empty"
    },
    
});

mix.js('resources/js/app.js', 'public/js')
    .extract(['vue', 'jquery'])
mix.sass('resources/sass/app.scss', 'public/css')