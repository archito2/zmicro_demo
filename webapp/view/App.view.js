sap.ui.jsview("myappzmicrochart.view.App", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.App
	 */
	getControllerName: function() {
		return "myappzmicrochart.controller.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.App
	 */
	createContent: function(oController) {
		
			var icontab = new sap.m.IconTabBar({
				items:[
					new sap.m.IconTabFilter({
						count:"Home",
						content:[
							sap.ui.view({type:sap.ui.core.mvc.ViewType.JS, viewName:"myappzmicrochart.view.Home"})
							]
					}),
					new sap.m.IconTabFilter({
						count:"Invoices",
						content:[
							sap.ui.view({type:sap.ui.core.mvc.ViewType.JS, viewName:"myappzmicrochart.view.Invoice"})
							]
						
					}),
					new sap.m.IconTabFilter({
						count:"Vendor"
						
					}),
					new sap.m.IconTabFilter({
						count:"Cashoflow"
						
					}),
					new sap.m.IconTabFilter({
						count:"KPI"
					
					}),
					new sap.m.IconTabFilter({
						count:"Audit"
					
					})
					]
				
			});
			
		var oPage = new sap.m.Page({
		//	title: "{i18n>title}",
			content: [icontab]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});