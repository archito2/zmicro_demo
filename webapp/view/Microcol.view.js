sap.ui.jsview("myappzmicrochart.view.Microcol", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf myappzmicrochart.view.Microcol
	 */
	getControllerName: function() {
		return "myappzmicrochart.controller.Microcol";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf myappzmicrochart.view.Microcol
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			showNavButton:true,
			navButtonPress:oController.goback,
			title: "ColumnMicro Chart",
			content: []
		});

		var app = new sap.m.App("myMicrocol", {
			initialPage: "Micro column details"
		});
		app.addPage(oPage);
		return app;
	}

});