var path = require('path'),
    proxy = require(path.join(__dirname, '../../../core/server/helpers/proxy')),
    SafeString = proxy.SafeString,
    templates = proxy.templates;

templates.input_language = require(path.join(__dirname, 'template_input'));

module.exports = function input_language(options) {

    var output = templates.input_language;

    //return templates.execute('my_helper', {}, {});
    return new SafeString(output);
};
