sap.ui.jsview("myappzmicrochart.view.Home", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf myappzmicrochart.view.Home
	 */
	getControllerName: function() {
		return "myappzmicrochart.controller.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf myappzmicrochart.view.Home
	 */
	createContent: function(oController) {
		
		
		var values = [
			{value:30},{value:40},{value:50},{value:67},{value:75},{value:85}
			];
	
		var model = new sap.ui.model.json.JSONModel(values);
		var template = new sap.suite.ui.microchart.ColumnMicroChartData({
						color: "{= ${value}>50 ? 'Good' : 'Error'}",
						label: "Column Label",
						value:"{value}"
					});
				
		
			var columnchart = new sap.suite.ui.microchart.ColumnMicroChart("colid",{
	// 		press: function(evt){
	// 		var z = sap.ui.getCore().byId("colid");
	// //		console.log(z.getBindingInfo("columns"));
	// 		},
				leftTopLabel:[
						new sap.suite.ui.microchart.ColumnMicroChartLabel({
							label:"20Cr"	
						})
					],	
				rightTopLabel:[
						new sap.suite.ui.microchart.ColumnMicroChartLabel({
							label:"30Cr"	
						})
					],
				leftBottomLabel:[
						new sap.suite.ui.microchart.ColumnMicroChartLabel({
							label:"January"	
						})
					],
				rightBottomLabel:[
						new sap.suite.ui.microchart.ColumnMicroChartLabel({
							label:"June"	
						})					
					]
		});
		columnchart.bindColumns("/",template);
		columnchart.setModel(model);
		var tile1 = new sap.m.GenericTile({
			header: "revenue",
		//	size: sap.m.Size.L,
		//	press:oController.colclick,
			frameType:sap.m.FrameType.OneByOne,
			press: oController.columnpress,
			tileContent:[
				new sap.m.TileContent({
					content:[columnchart]
				})
				]
			});
			
			tile1.addStyleClass("sapUiSmallMargin");
		
		var values2 = [
			{Dept:"Sales", value:30},{Dept:"IT",value:-40},{Dept:"Accounts",value:50}
		];
		var compmodel = new sap.ui.model.json.JSONModel(values2);
		var comptemp = new sap.suite.ui.microchart.ComparisonMicroChartData({
						value: "{value}",
						title: "{Dept}",
						color: "{= ${value}>20 ? 'Good' : 'Error'}"
						});
		var compchart = new sap.suite.ui.microchart.ComparisonMicroChart({
				data: [
					// new sap.suite.ui.microchart.ComparisonMicroChartData({
					// 	value: 60,
					// 	title: "Sales",
					// 	color: sap.m.ValueColor.Good
						
					// }),
					// new sap.suite.ui.microchart.ComparisonMicroChartData({
					// 	value: -30,
					// 	title: "IT",
					// 	color: sap.m.ValueColor.Error
						
					// }),
					// new sap.suite.ui.microchart.ComparisonMicroChartData({
					// 	value: 30,
					// 	title: "Accounts",
					// 	color: sap.m.ValueColor.Neutral
						
					// })
					]	
		});
		compchart.bindData("/",comptemp);
		compchart.setModel(compmodel);
			
			var tile2 = new sap.m.GenericTile({
			header: "revenue",
			press: oController.comppress,
			frameType:sap.m.FrameType.OneByOne,
			tileContent:[
				new sap.m.TileContent({
					content:[compchart]
				})
				]
			
		});	
		
		tile2.addStyleClass("sapUiSmallMargin");
		
			var harveychart = new sap.suite.ui.microchart.HarveyBallMicroChart({
					total: 100,
					totalScale:"Cr",
					items:[
						new sap.suite.ui.microchart.HarveyBallMicroChartItem({
							color: sap.m.ValueColor.Good,
							fraction: 40,
							fractionScale:"Cr"
						})
						]
			});
			
			var harveychart2 = new sap.suite.ui.microchart.HarveyBallMicroChart({
					total: 100,
					totalScale:"Cr",
					items:[
						new sap.suite.ui.microchart.HarveyBallMicroChartItem({
							color: sap.m.ValueColor.Good,
							fraction: 35,
							fractionScale:"Cr"
						})
						]
			});
			
			var harveychart3 = new sap.suite.ui.microchart.HarveyBallMicroChart({
					total: 100,
					
					totalScale:"Cr",
					items:[
						new sap.suite.ui.microchart.HarveyBallMicroChartItem({
							color: sap.m.ValueColor.Good,
							fraction: 25,
							fractionScale:"Cr"
						})
						]
			});
			var tile3 = new sap.m.GenericTile({
				
			 header: "revenue",
			 	press: oController.harvpress,
			 frameType:sap.m.FrameType.Auto,
				tileContent:[
				new sap.m.TileContent({
					footer:"Sales",
					content:[harveychart]
				}),
				new sap.m.TileContent({
					footer:"Accounts",
					content:[harveychart2]
				}),
				new sap.m.TileContent({
					footer:"IT",
					content:[harveychart3]
				})
				]
			
		});	
		tile3.addStyleClass("sapUiSmallMargin");
		
		var area = new sap.suite.ui.microchart.AreaMicroChart({
				minXValue:0,
				maxXValue:100,
				minYValue:0,
				maxYValue:100,
				charts:[
					new sap.suite.ui.microchart.AreaMicroChartItem({
						title:"FY 16-17",
						points:[
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								})
									
									
							]
					})
					],
				targets:[
						new sap.suite.ui.microchart.AreaMicroChartItem({
							points:[
									new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								})
								]
						})
					],
				maxThreshold:[
					new sap.suite.ui.microchart.AreaMicroChartItem({
						points:[
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 50
								})
							]
					})
					],
				minThreshold:[
					new sap.suite.ui.microchart.AreaMicroChartItem({
						points:[
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 30,
									y: 80
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 40,
									y: 80
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 60,
									y: 30
								}),
								new sap.suite.ui.microchart.AreaMicroChartPoint({
									x: 50,
									y: 40
								})
							]
					})
					]	
		});
		
		var tile4 = new sap.m.GenericTile({
			header: "revenue",
			frameType:sap.m.FrameType.OneByOne,
			tileContent:[
				new sap.m.TileContent({
					content:[area]
				})
				]
			
		});	
		
		tile4.addStyleClass("sapUiSmallMargin");
		
			var grid = new sap.ui.layout.Grid({
			defaultSpan: "XL6 L6 M6 S12",
			content:[tile1,tile2,tile3,tile4]
		});
		
		// var horizontal = new sap.ui.layout.HorizontalLayout({
		// 		content:[tile1,tile2]	
		// });
		
		// 	var horizontal2 = new sap.ui.layout.HorizontalLayout(
		// 		{
		// 		content:[tile3,tile4]	
		// });
		
		// var block = new sap.ui.layout.BlockLayout({
		// 	content:[tile1,tile2,tile3,tile4]
		// });
		
		// var pane =  new sap.ui.layout.Splitter({
		// 	width:"80%",
		// 	contentAreas:[tile1]
		// })
		// var pane2 = new sap.ui.layout.Splitter({
		// 	width:"50%",
		// 	contentAreas:[tile2]
		// })
		
		var oPage = new sap.m.Page({
		//	title: "Title",
			// customHeader:[
			// 	new sap.m.Bar({
			// 		contentLeft:[
			// 			new sap.m.Button({text:"abc"})
			// 			]
			// 	})
			// 	],
			content: [grid]
		});
		
	
		
		var app = new sap.m.App("myhome", {
		//	initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});