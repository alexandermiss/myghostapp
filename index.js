var App = require('ghost-app'),
    path = require('path'),
    labs = require(path.join(__dirname, '../../../', 'core/server/utils/labs')),
    MyApp;

MyApp = App.extend({

    activate: function (){

//        this.app.helpers.register('my_input', require(path.join(__dirname, '')));
        this.app.helpers.register('my_helper', function(){
            var self = this, args = arguments;

            return labs.enabledHelper({
                flagKey: 'my_helper',
                flagName: 'My_helper',
                helperName: 'my_helper',
                helpUrl: 'https://blog.alexandermiss.com/language_helper'
            }, function executeHelper(){
                return require(path.join(__dirname,  'input_language')).apply(self, args);
            });
        });

    }

});

module.exports = MyApp;


