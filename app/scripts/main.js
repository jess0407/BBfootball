/*global BBfootball, $*/


window.BBfootball = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        var initialView = new BBfootball.Views.MatchDay();
    }
};

$(document).ready(function () {
    'use strict';
    BBfootball.init();
});
