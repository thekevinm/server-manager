const colors = require('colors');
const { types } = require('./values');

// export function to list servers
module.exports = function() {
    console.log('Servers');
    console.log('------------------');

    // list on separate lines
    types.forEach((type) => {
        console.log('%s %s', colors.bold(type.name), '/ ', colors.blue(type.ip), '/ ', colors.green(type.username), '/ ', colors.grey(type.password));
    });
};