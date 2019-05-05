// TinySlider main JS file
import {tns} from 'tiny-slider/src/tiny-slider';

// IE8 polyfills
require('tiny-slider/src/tiny-slider.helper.ie8');

let slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true
});
