/*global BBfootball, Backbone*/

BBfootball.Models = BBfootball.Models || {};

(function () {
    'use strict';

    BBfootball.Models.MatchDay = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
