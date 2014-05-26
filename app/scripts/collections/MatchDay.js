/*global BBfootball, Backbone*/

BBfootball.Collections = BBfootball.Collections || {};

(function () {
    'use strict';

    BBfootball.Collections.MatchDay = Backbone.Collection.extend({

        model: BBfootball.Models.MatchDay

    });

})();
