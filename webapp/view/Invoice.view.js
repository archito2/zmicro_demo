sap.ui.jsview("myappzmicrochart.view.Invoice", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf myappzmicrochart.view.Invoice
	 */
	getControllerName: function() {
		return "myappzmicrochart.controller.Invoice";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf myappzmicrochart.view.Invoice
	 */
	createContent: function(oController) {
			var table =  new sap.m.Table("tableid",{
				headerToolbar:[
				new	sap.m.Toolbar({
						content:[
						new sap.m.SearchField({
							width:"30%"
						//	liveChange: oController.change
							
						}),
						new sap.m.OverflowToolbarButton({
    icon: "sap-icon://filter"
   // press:oController.filter
    }),
    new sap.m.OverflowToolbarButton({
    icon: "sap-icon://sort"
  //  press:oController.sort
    })
							]
					})
				],
		
			columns:[
				new sap.m.Column({
					header:[new sap.m.Text({text:"Firstname"})]
				}),
				new sap.m.Column({
					header:[new sap.m.Text({text:"Lastname"})]
				}),
				new sap.m.Column({
					header:[new sap.m.Text({text:"Location"})]
				}),
				new sap.m.Column({
					header:[new sap.m.Text({text:"Travel Mode"})]
				})
				]
			//	itemPress: function(e){
			//	oController.selected(e);
			//	}
				
				
			
		});
		var oPage = new sap.m.Page({
			title: "Title invoice test",
			content: [table]
		});

		var app = new sap.m.App("myInvoice", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});