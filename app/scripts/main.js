/*global BBfootball, $*/


window.BBfootball = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.initialView = new BBfootball.Views.MatchDay(matchesData);
        this.teamView = new  BBfootball.Views.Teams(teamsData);
    }
};

$(document).ready(function () {
    'use strict';
    BBfootball.init();
    $(document).on('keydown', function(e){
            if(e.keyCode===37){
                $('#left').trigger('click');
            }
            if(e.keyCode===39){
                 $('#right').trigger('click');
            }
            
    });
});
