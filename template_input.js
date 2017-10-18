var _ = require('lodash');

function callback (ghost){
    console.log('GHOST', ghost || {});
    return _.template('<input type="text">')();
}

module.exports = callback;
