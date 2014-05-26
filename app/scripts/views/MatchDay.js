/*global BBfootball, Backbone, JST*/

BBfootball.Views = BBfootball.Views || {};

(function () {
    'use strict';

    BBfootball.Views.MatchDay = Backbone.View.extend({

        template: JST['app/scripts/templates/MatchDay.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            
            this.render();
        },

        render: function () {
            //this.$el.html(this.template(this.model.toJSON()));
            this.$el.html(this.template());
            $('#wrapper').append(this.$el);
            return this;
        }

    });

})();
