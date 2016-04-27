/**
* Created by Apurva on 3/4/16.
*/

var commonCfg = require("./CommonConfiguration_spec.js");
var javaServices_dev_Base_url=commonCfg.javaServices_dev_Base_url;
var testingUserId=commonCfg.testingUserId;

var DSID_Get_KPIData="wo65878d56-8cd4-4afc-aa56-27ba8c8d72e5";
var DSID_Post_KPIData="wo65878d56-8cd4-4afc-aa56-27ba8c8d72e5";
var DSID_Delete_KPIData="wo65878d56-8cd4-4afc-aa56-27ba8c8d72e5";

this.BigHalfKPI={
	"desc" : "BigHalfKPI frisby tests",
	 "Get_KPI_Data" : {
		"url" : javaServices_dev_Base_url+"BigHalfKPI/datasquare/"+DSID_Get_KPIData+"/kpi"
	 },
	 "Post_KPI_Data" : {
			"url" : javaServices_dev_Base_url+"BigHalfKPI/datasquare/"+DSID_Post_KPIData+"/kpi",
			
			"form_data" : {
				     "st1": {
					    "indicator": "orange",
					    "value1": "50",
					    "value2": "70"
					  },
					  "st2": {
					    "indicator": "green",
					    "value1": "70"
					  },
					  "st3": {
					    "indicator": "red",
					    "value1": "50"
					  },
					  "name": "KPI_Testing_Frisby",
					  "target": "70",
					  "definition": {
					    "SELECT": [
					      "arith_0_0"
					    ],
					    "references": {
					      "quantity_arith0_0": {
					        "attribute": "quantity",
					        "aggregation": "SUM"
					      },
					      "arith_0_0": {
					        "operation": "oper_0_0"
					      }
					    },
					    "operations": {
					      "oper_0_0": "quantity_arith0_0"
					    }
					  }
					}
		 },
	 "Delete_KPI_Data" : {
			"url" : javaServices_dev_Base_url+"BigHalfKPI/datasquare/"+DSID_Delete_KPIData+"/kpi/"
		},
	"Version_KPI" : {
		"url" : javaServices_dev_Base_url+"BigHalfKPI/user/"+testingUserId+"/version/"
		}
}