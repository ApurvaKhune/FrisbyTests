/**
 * Created by Apurva on 6/4/16.
 */

var commonCfg = require("./CommonConfiguration_spec.js");
var javaServices_dev_Base_url = commonCfg.javaServices_dev_Base_url;
var testingUserId = commonCfg.testingUserId;

var DSID_Post_Column_Expression = "am7dc37950-ca63-47a4-a07c-5a9c07c36bb6";
var DefID_Get_DataDefinition_Value = "tv076afb4c-6c84-4d7c-992a-637ad3e44cbe";
var DefID_Get_DataDefinition_Details="tv076afb4c-6c84-4d7c-992a-637ad3e44cbe";
var DSID_Delete_Definition="am7dc37950-ca63-47a4-a07c-5a9c07c36bb6";
var DSID_Delete_AllDefinitions="wicb531f7d-aca2-4cfd-b6f1-1d82e7a545b0";
var DSID_Post_Expressions="pk1ea6b787-4329-4ebd-a728-a3168a17051c";

this.DataDefinition = {
	"desc" : "DataDefinition frisby tests",
	"Post_Column_Expression" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/user/"
				+ testingUserId + "/datasquare/" + DSID_Post_Column_Expression
				+ "/columnexpression",

		"form_data" : {
			"displayName" : "QuantitySum",
			"format" : "$0,0.00",
			"dataType" : "Numeric",
			"expression" : "Quantity+Quantity"
		}
	},

	"Post_Date_Expressions" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/dateExpression/",

		"form_data" : {
			"DateExpression" : "Today"
		}
	},

	"User_Expressions" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/userExpression/",

		"form_data" : [ {
			"expression" : "a+b",
			"userDefinedVariables" : {
				"a" : {
					"value" : "Apurva ",
					"type" : "string"
				},
				"b" : {
					"value" : "ABC",
					"type" : "string"
				}
			}
		} ]
	},

	"Get_Version" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/user/"+ testingUserId + "/version"
	},

	"Get_DataDefinition_Value" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/data/definition/"+ DefID_Get_DataDefinition_Value
	},

	"Get_DataDefinition_Details" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/user/"+ testingUserId + "/data/definition/"+ DefID_Get_DataDefinition_Details
	},
	
	"Delete_Definition" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/user/"+ testingUserId + "/data/definition/",
		"url2" : "/datasquare/"+DSID_Delete_Definition

	},
	"Post_DataDefinition" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/user/"+ testingUserId + "/data/definition/",
		

		"form_data" : {
			  "expression": {
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
				    },
				    "request_type": "kpi"
				  },
				  "tag": "am7dc37950-ca63-47a4-a07c-5a9c07c36bb6",
				  "name": "Post_Put_Delete_DataDefinition"
				}
	},
	
	"Put_DataDefinition" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/user/"+ testingUserId + "/data/definition/",
		
		"form_data" : {
			  "expression": {
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
				    },
				    "request_type": "kpi"
				  },
				  "tag": "am7dc37950-ca63-47a4-a07c-5a9c07c36bb6",
				  "name": "123_Post_Put_Delete_DataDefinition_123"
				}
	},
	
	"Post_DataDefinition2" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/user/"+ testingUserId + "/data/definition/",
		

		"form_data" : {
			  "expression": {
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
				    },
				    "request_type": "kpi"
				  },
				  "tag": "wicb531f7d-aca2-4cfd-b6f1-1d82e7a545b0",
				  "name": "DeleteAllDefn"
				}
	},
	"Delete_AllDefinitions" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/user/"+ testingUserId + "/data/definition/datasquare/"+DSID_Delete_AllDefinitions

	},
	
	"Post_Expressions" : {
		"url" : javaServices_dev_Base_url + "DataDefinition/datasquare/"+ DSID_Post_Expressions + "/expression",

		"form_data" : {
			  "CONDITION_AGGREGATIONS": {
				    "ALL": [
				      {
				        "greaterthan": [
				          10,
				          "col1"
				        ]
				      },
				      {
				        "greaterthan": [
				          5,
				          "col2"
				        ]
				      }
				    ]
				  },
				  "CONDITIONS": {
				    "ALL": [
				      {
				        "greaterthan": [
				          "col1",
				          10
				        ]
				      }
				    ]
				  },
				  "references": {
				    "col1": {
				      "attribute": "col1",
				      "aggregation": "SUM"
				    },
				    "col2": {
				      "attribute": "col2",
				      "aggregation": "MIN"
				    },
				    "col3": {
				      "attribute": "col3"
				    }
				  }
				}
	}
}