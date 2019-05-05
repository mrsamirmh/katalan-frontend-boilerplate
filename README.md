<h1 align="center"> Katalan Frontend Boilerplate </h1>

<p align="center"> Frontend boilerplate made with webpack </p>

<hr/>

<p> Webpack boilerplate named "Katalan" with Babel, SASStoCSS, BrowserSync, Fontawesome v5, custom fonts, TinySlider, no JQuery! and etc.  </p>

<hr>
<h3> Directory layout </h3>


    .
    ├── dist                            # Compiled files
    |   └── ...
    ├── src/                            # Source files
    │   ├── fonts/                      # Included font files
    |   |   └── ...                    
    |   ├── img/                        # Image assets
    |   |   └── ...                   
    |   ├── js/                         # JS files
    |   |   └── main.js                 # Import your js code on main.js
    |   ├── packages/                   # Custom package files
    |   |   └── ... 
    |   ├── scss/                       # SCSS/SASS assets
            ├── _custom.scss            # Insert your custom styles here
            ├── _font-awesome.scss      # Main font-awesome style file. Content explained in below sections..
            ├── _fonts.scss             # Main fonts style file. Content explained in below sections..
            ├── main.scss               # Main style file. Content explained in below sections..
    |   ├── views/                      # HTML files. Feel free to add any .html files here. It will be compiled and added to "dist" folder automaticly.
    |   └── index.js                    # Main script file.
    ├── LICENSE
    ├── .babelrc
    ├── .gitognore
    ├── packages.json
    ├── webpack.config.js
    └── README.md


<hr>
<h3> List of features </h3>

<ul>
  <li>Babel Compiler</li>
  <li>SASS/SCSS to CSS</li>
  <li>Fontawesome v5</li>
  <li><a href="https://github.com/ganlanyuan/tiny-slider">TinySlider</a></li>
  <li>no JQuery!</li>
  <li>Pure JS</li>
  <li>Use ready fonts: 
    <ul>
        <li>Roboto</li>
        <li>Muli</li>
        <li>Georgia</li>
        <li>...more on the way :)</li>
    </ul>
  </li>
</ul>
<hr>
<h3> Download & Installation </h3>

```shell
$ git clone https://github.com/mrsamirmh/katalan-frontend-boilerplate.git ./my-awecome-project
```
<hr>
<h3> Usage </h3>

```shell
$ npm start
```

<p>Starts local development server with BrowserSync on <a href="http://localhost:994">http://localhost:994</a></p>

<p>You don't need to refresh browser on every file change. It will compile and refresh browser tab for you :) </p>

<p>Not adding files to "dist" folder. If you want to save compiles files use commands below: </a></p>

```shell
$ npm dev --watch
```

<p>Compiling assets in development environment (not minifying assets) and watchs for file changes to recompile. Compiled files will be stored in "dist" folder.</p>

```shell
$ npm build
```

<p>Compiling assets in production environment (minifying assets). Compiled files will be stored in "dist" folder.</p>
<hr>

<h3> Font-awesome </h3>

Main file is _font-awesome.scss:

```scss
// font-awesome core
@import "../packages/font-awesome-pro/scss/fontawesome";

// select only "one" for style
@import '../packages/font-awesome-pro/scss/regular';
//@import '../packages/font-awesome-pro/scss/light';
//@import '../packages/font-awesome-pro/scss/solid';

// icons of world brands
//@import '../packages/font-awesome-pro/scss/brands';

// v4 support
//@import '../packages/font-awesome-pro/scss/v4-shims';
```

You can change style to include in build. Only uncommented styles will be compiled.

<hr>

<h3> Use ready fonts </h3>

Main file is _fonts.scss:

```scss
@import 'font-awesome';
/* included fonts. more will be added soon  _(:..:)_
*/
//@import 'fonts/_roboto';
//@import "fonts/muli";
@import "fonts/_georgia";
```

You can uncomment @import to include font files in build. Only uncommented fonts will be compiled.

<hr>

<h3> Main style file </h3>

Main file is main.scss:

```scss
/* For grid only
 */

@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

@import "~bootstrap/scss/mixins/breakpoints";
@import "~bootstrap/scss/mixins/grid-framework";
@import "~bootstrap/scss/mixins/grid";

@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/utilities/display";
@import "~bootstrap/scss/utilities/flex";
@import "~bootstrap/scss/utilities/spacing";

/* Other includes
 */
//@import "~bootstrap/scss/mixins";
//@import "~bootstrap/scss/root";
//@import "~bootstrap/scss/reboot";
//@import "~bootstrap/scss/type";
//@import "~bootstrap/scss/images";
//@import "~bootstrap/scss/code";
//@import "~bootstrap/scss/tables";
//@import "~bootstrap/scss/forms";
//@import "~bootstrap/scss/buttons";
//@import "~bootstrap/scss/transitions";
//@import "~bootstrap/scss/dropdown";
//@import "~bootstrap/scss/button-group";
//@import "~bootstrap/scss/input-group";
//@import "~bootstrap/scss/custom-forms";
//@import "~bootstrap/scss/nav";
//@import "~bootstrap/scss/navbar";
//@import "~bootstrap/scss/card";
//@import "~bootstrap/scss/breadcrumb";
//@import "~bootstrap/scss/pagination";
//@import "~bootstrap/scss/badge";
//@import "~bootstrap/scss/jumbotron";
//@import "~bootstrap/scss/alert";
//@import "~bootstrap/scss/progress";
//@import "~bootstrap/scss/media";
//@import "~bootstrap/scss/list-group";
//@import "~bootstrap/scss/close";
//@import "~bootstrap/scss/toasts";
//@import "~bootstrap/scss/modal";
//@import "~bootstrap/scss/tooltip";
//@import "~bootstrap/scss/popover";
//@import "~bootstrap/scss/carousel";
//@import "~bootstrap/scss/spinners";
//@import "~bootstrap/scss/utilities";
//@import "~bootstrap/scss/print";

@import 'custom';
@import 'fonts';
```

Bootstrap files included in this file. By default only bootstrap grid activated. You can activate any bootstrap file you want.

<hr>


<h3>Contributing</h3>
Keep it simple. Keep it minimal. Don't put every single feature just because you can.
<hr>

<h3>Authors, Contributors or Acknowledgments</h3>
<ul>
  <li><a href="https://mrsamir.com">Samir Mammadhasanov</a></li>
</ul>

<hr>

<h3>Credits</h3>

<ul>
    <li><a href="https://github.com/ganlanyuan">William Lin</a> for <a href="https://github.com/ganlanyuan/tiny-slider">TinySlider</a> </li>
</ul>

<hr>

<h3>License</h3>

This project is licensed under the MIT License