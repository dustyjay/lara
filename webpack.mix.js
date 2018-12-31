const mix = require("laravel-mix");

require("laravel-mix-tailwind");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    /*
    extractVueStyles: false,
    processCssUrls: true,
    purifyCss: {},
    postCss: [require('autoprefixer')],
    purifyCss: true // removes unused CSS, Buggy. DO NOT USE
*/
    clearConsole: true // in watch mode, clears console after every build
});

mix.js("resources/js/app.js", "public/js")
    //.sass('resources/sass/libs/normalize.scss', 'public/css/libs')
    .sass("resources/sass/app.scss", "public/css")

    // libraries
    // tailwindcss: see https://tailwindcss.com/docs/installation#laravel-mix
    .sass("resources/sass/my_tailwind.scss", "public/css")
    .tailwind()

    // for the KeenBrain logo
    .copy("resources/img/brain.svg", "public/img/brain.svg")
    .copy("resources/img/heart.svg", "public/img/heart.svg")
    .sass("resources/sass/logo.scss", "public/css")

    // for the SVG animation
    .js("resources/js/libs/gs/*", "public/js/libs/gs");

//.disableNotifications() // if you want to disable OS notifications after every build
//.minify('public/css/app.css') // creates the min.css file but doesnt really minify?
