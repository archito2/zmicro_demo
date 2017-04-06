sap.ui.jsview("myappzmicrochart.view.Microharv", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf myappzmicrochart.view.Microharv
	 */
	getControllerName: function() {
		return "myappzmicrochart.controller.Microharv";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf myappzmicrochart.view.Microharv
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "HarverBall Microchart",
			showNavButton:true,
			navButtonPress:oController.goback,
			content: []
		});

		var app = new sap.m.App("myHarv", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});