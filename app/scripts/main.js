/*global BBfootball, $*/


window.BBfootball = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.initialView = new BBfootball.Views.MatchDay(matchesData);
    }
};

$(document).ready(function () {
    'use strict';
    BBfootball.init();
});
