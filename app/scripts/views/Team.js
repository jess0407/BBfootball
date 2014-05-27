/*global BBfootball, Backbone, JST*/

BBfootball.Views = BBfootball.Views || {};

(function () {
    'use strict';
    BBfootball.Views.Team = Backbone.View.extend({

        template: JST['app/scripts/templates/Team.ejs'],

        tagName: 'tr',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {

            this.$el.html(this.template(this.model.toJSON()));
            //console.log(this.el);
            return this.el;
        }

    });

    BBfootball.Views.Teams = Backbone.View.extend({

        //template: JST['app/scripts/templates/Team.ejs'],

        tagName: 'tbody',

        id: '',

        className: '',

        events: {},

        recalculate: function(){
            this.collection.reset();
           // console.log(this.collection);
            var amatches = BBfootball.initialView.model.get('matchesToDate');
            _.map(teamsData, function(obj){
                var homematches = _.filter(amatches, function(match){
                    return obj.id === match.get('homeTeamId');
                });
                var awaymatches = _.filter(amatches, function(match){
                    return obj.id === match.get('awayTeamId');
                });
                var P = homematches.length + awaymatches.length;
                var win = _.filter(homematches, function(match){
                    return match.get('homeGoals') > match.get('awayGoals');
                }).length;
                 win += _.filter(awaymatches, function(match){
                    return match.get('homeGoals') < match.get('awayGoals');
                }).length;
                var lose = _.filter(homematches, function(match){
                    return match.get('homeGoals') < match.get('awayGoals');
                }).length;
                lose += _.filter(awaymatches, function(match){
                    return match.get('homeGoals') > match.get('awayGoals');
                }).length;
                var D = P - win - lose;
                var F = 0;
                var A = 0;
                _.map(homematches,function(match){
                    A+=parseInt(match.get('awayGoals'));
                    F+=parseInt(match.get('homeGoals'));
                });
                _.map(awaymatches,function(match){
                    A+=parseInt(match.get('homeGoals'));
                    F+=parseInt(match.get('awayGoals'));
                });
                
           
                var GD = F - A;
                var Pts = 3*win + D;

                


                this.collection.add(new BBfootball.Models.Team({id:obj.id,
                                                                name:obj.name,
                                                                P: P,
                                                                W:win,
                                                                L:lose,
                                                                D:D,
                                                                F:F,
                                                                A:A,
                                                                GD:GD,
                                                                Pts:Pts}));

           }, this);//end of map
            this.collection.sort_key ='Pts';
            
            this.render();

        },

        initialize: function () {
            this.collection = new BBfootball.Collections.Team();
           this.listenTo(BBfootball.initialView.model, 'change', this.recalculate);
           
           this.recalculate();
            
        },

        render: function () {

            var self = this;
            self.$el.empty();
            this.collection.map(function(team){
                var element = new BBfootball.Views.Team({model:team});
                self.$el.append(element.el);
            });
            $('#ltable').append(this.$el);

            return this;
                
        }

    });

})();
