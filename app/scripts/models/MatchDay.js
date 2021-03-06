/*global BBfootball, Backbone*/

BBfootball.Models = BBfootball.Models || {};

(function () {
    'use strict';

    BBfootball.Models.MatchDay = Backbone.Model.extend({

        url: '',

        initialize: function() {
          
        },

        format: function(){
            this.feddate = this.date.format('YYYY-DD-MM');
        },

        defaults: {
            date:{},
            feddate:'hello',
            matchesOfDay:[],
            matchesToDate:[]
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
