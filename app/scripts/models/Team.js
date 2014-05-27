/*global BBfootball, Backbone*/

BBfootball.Models = BBfootball.Models || {};

(function () {
    'use strict';

    BBfootball.Models.Team = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            name:'',
            P:0,
            W:0,
            D:0,
            L:0,
            F:0,
            A:0,
            GD:0,
            Pts:0

        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
