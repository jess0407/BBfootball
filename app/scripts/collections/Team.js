/*global BBfootball, Backbone*/

BBfootball.Collections = BBfootball.Collections || {};

(function () {
    'use strict';

    BBfootball.Collections.Team = Backbone.Collection.extend({

        model: BBfootball.Models.Team

    });

})();
