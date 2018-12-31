TO GET UP AND RUNNING:

------
Note: 
1. We have git submodules installed for external / independent repos, for Semantic UI, MaterializeCSS etc (this is so that repos can be maintained independently). We used: https://git-scm.com/book/en/v2/Git-Tools-Submodules

After a git clone, EMPTY directories will be created for these submodules. If you want to cloning the project with Submodules, pass --recurse-submodules to the git clone command:
$ git clone --recurse-submodules <this (main) repo's git URL>
Alternatively you can run (after a regular git clone):
$ git submodule init

2. Make sure npm is installed first
Run:
npm install
npm install yarn

3. Make sure these are installed:
npm install tailwindcss --save-dev
npm install laravel-mix-tailwind --save-dev

4. Run below command to generate the config file, tailwind.js:
./node_modules/.bin/tailwind init

5. make sure webpack.mix.js contains something like this:
##
let mix = require('laravel-mix');
require('laravel-mix-tailwind');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .tailwind();
##

NOTE:
Do NOT use the purifyCss option in your webpack.mix.js file
mix.options({
    purifyCss: true // removes unused CSS, buggy. DO NOT USE
});

6. Update your scss file like app.scss to include:
@tailwind preflight;
@tailwind components;
@tailwind utilities;

------

Instructions:
1. Open a terminal window, cd to this directory and run: 
php artisan serve --port=9999

2. Open a 2nd terminal window, cd to this directory and run: 
npm run watch
(this will monitor the files specified in webpack.mix.js for changes, and auto-build per the config in that file, every time any of the source files are changed)

3. Optional:
Decrease the timeout (add a config value for timeout) for the webpack notifier from node_modules/laravel-mix/src/config.js and/or node_modules/laravel-mix/src/components/Notifications.js
return new WebpackNotifierPlugin({
    timeout: '1',
});

To see the UI, go to http://localhost:9999 or http://127.0.0.1:9999 (depending on what the terminal shows)


NOTE:
Continuous Integration Tools:
Circle CI / Netlify
Percy.io for automating testing of visual changes
https://www.youtube.com/watch?time_continue=71&v=TIx8koZP-Mk
