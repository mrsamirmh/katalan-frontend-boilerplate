const fs = require('fs');

import './scss/main.scss'

require('./js/main');

const imageFiles = fs.readdirSync('./img');
imageFiles.map(item => {
    // Split names and extension
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];

    require('./img/' + name + '.' + extension);
});