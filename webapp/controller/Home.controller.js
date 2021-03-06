sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	var router;
//	"use strict";

	return Controller.extend("myappzmicrochart.controller.Home", {
		
		colclick: function(evt){
	//		console.log(evt.getParameters);
			
		},
		
		
		columnpress: function(){
					router.navTo("microcol");
		},
		
		comppress: function(){
				router.navTo("microcomp");
		},
		
		harvpress: function(){
			router.navTo("microharv");
		},
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf myappzmicrochart.view.Home
		 */
			onInit: function() {
				router = sap.ui.core.UIComponent.getRouterFor(this);
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf myappzmicrochart.view.Home
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf myappzmicrochart.view.Home
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf myappzmicrochart.view.Home
		 */
		//	onExit: function() {
		//
		//	}

	});

});