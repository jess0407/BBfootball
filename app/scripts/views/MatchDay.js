/*global BBfootball, Backbone, JST*/

BBfootball.Views = BBfootball.Views || {};

(function () {
    'use strict';

    BBfootball.Views.MatchDay = Backbone.View.extend({

        template: JST['app/scripts/templates/MatchDay.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click #left' : 'prev',
            'click #right' : 'next'
        },
        prev: function(){
             var index = _.indexOf(this.dates, this.model.get('date'));
            if(this.dates[index-1]){
                this.model.set('date', this.dates[index-1]);
            }
            this.render();
        },
        next: function(){
            var index = _.indexOf(this.dates, this.model.get('date'));
            if(this.dates[index+1]){
                this.model.set('date', this.dates[index+1]);
            }
            this.render();
        },

        dates: [],

        date:function(){



        },

        initialize: function (data1) {

            //this.listenTo(this.model, 'change', this.render);
            //this will initialize the view of the final match day.

            //getting the data
            this.collection  =  new BBfootball.Collections.Match(data1);
            //tweak the match object with moment date and team name;
            this.collection  = this.collection.map(function(match){
                
                match.set('date', moment(match.get('date'),'DD/MM/YY'));
                match.set('awayTeam', _.find(teamsData, function(obj){ 
                                    return obj.id===match.get('awayTeamId');
                                     }).name);
                match.set('homeTeam',  _.find(teamsData, function(obj){ 
                                    return obj.id===match.get('homeTeamId');
                                     }).name);
                return match;

            });
            //getting the unique dates
            var dates = _.uniq(_.pluck(matchesData, 'date'));
            this.dates = _.map(dates, function(date){
                return moment(date,'DD/MM/YY');
            });
            var day = _.last(this.dates);
            this.model = new BBfootball.Models.MatchDay({date:day});

            this.render();
        },

        render: function () {
            $('#result').empty();
            var self = this.$el;
           


            console.log();
            
            this.$el.html(this.template(this.model.toJSON()));
            var matches = _.filter(this.collection, function(match){
                return match.get('date').isSame(this.model.get('date'));
            },this);
            //console.log(matches);
            this.model.set({matchesOfDay:matches});
            
            _.map(matches, function(match){
                var ma = new BBfootball.Views.Match({model:match});
                var row = ma.render();             
                $('#result').append(row);
         
            });

            $('#h1').append(this.el);

            return this;
        }

    });

})();
