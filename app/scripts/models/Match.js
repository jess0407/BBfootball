/*global BBfootball, Backbone*/

BBfootball.Models = BBfootball.Models || {};

(function () {
    'use strict';

    BBfootball.Models.Match = Backbone.Model.extend({

        url: '',

        initialize: function() {

        },

        defaults: {
            date:'',
            homeTeamId: 0,
            homeTeam:'',
            awayTeamId: 0,
            awayTeam:'',
            homeGoals: 0,
            awayGoals: 0
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
