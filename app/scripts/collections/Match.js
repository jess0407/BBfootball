/*global BBfootball, Backbone*/

BBfootball.Collections = BBfootball.Collections || {};

(function () {
    'use strict';

    BBfootball.Collections.Match = Backbone.Collection.extend({

        model: BBfootball.Models.Match

    });

})();
