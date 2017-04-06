sap.ui.jsview("myappzmicrochart.view.Config", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf myappzmicrochart.view.Config
	 */
	getControllerName: function() {
		return "myappzmicrochart.controller.Config";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf myappzmicrochart.view.Config
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "Title",
			content: []
		});

		var app = new sap.m.App("myConfig", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});