/*global BBfootball, Backbone, JST*/

BBfootball.Views = BBfootball.Views || {};

(function () {
    'use strict';

    BBfootball.Views.Match = Backbone.View.extend({

        template: JST['app/scripts/templates/Match.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
