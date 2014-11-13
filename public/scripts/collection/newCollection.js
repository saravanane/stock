define(['jquery','underscore','backbone','handlebars','newModels'],function(jquery, underscore, backbone, handlebars,newmodel) {

	var newcollection = Backbone.Collection.extend({
	model:newmodel,
	initialize: function(models,options){
		_.bindAll(this,"parse");
	},	
	url: "Collection/localjson.json",
	parse: function(response) {	
		     
			var modelData = new newmodel();	
			var newArray = [];
			
		   for(var i=0;i<response.Stock.length;i +=1 ){
			   newArray.push(response.Stock[i]);
		   }		 
		   modelData.set('stockDetails',newArray);		  
	       return modelData;
	    }
	});
	return newcollection;
});