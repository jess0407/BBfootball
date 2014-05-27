/*global BBfootball, Backbone*/

BBfootball.Collections = BBfootball.Collections || {};

(function () {
    'use strict';

    BBfootball.Collections.Team = Backbone.Collection.extend({

        model: BBfootball.Models.Team,
       
        comparator:function(a, b){
      		var ap = a.get('Pts');
      		var bp = b.get('Pts');

      		var agd  = a.get('GD');
      		var bgd = b.get('GD');

      		var af = a.get('F');
      		var bf = a.get ('F');
      		//compare Points
      		if(ap>bp){
      			return -1;
      		}else if (ap<bp) {
      			return 1;
      		}else{
      			//compare GD
      			if(agd>bgd){
      				return -1;

      			}else if(agd<bgd){
      				return 1;
      			}else{
      				//compare GF
      				if (af>bf) {
      					return -1;

      				}else if(bf<af){
      					return 1;

      				}else{
      					//compare name


      				};
      			}

      		}
        }

    });

})();
