/**
* Created by Apurva on 3/4/16.
*/

var commonCfg = require("./CommonConfiguration_spec.js");
var javaServices_dev_Base_url=commonCfg.javaServices_dev_Base_url;
var testingUserId=commonCfg.testingUserId;

var DSID_Get_Data="mv5519e124-e3cd-4e0a-b603-4f7cc4a0c442";
var DSID_Put_Data="abc32949a1-d875-43fb-91af-e5db30528892";
var DSID_Post_BigStore_Column="kee3e5a826-0c8a-4b37-9ffb-aeff76263290";
var DSID_Delete_BigStore="abc32949a1-d875-43fb-91af-e5db30528892";

this.BigStoreServices={
	"desc" : "BigStoreServices frisby tests",
	 "Get_BigStore_Data" : {
		"url" : javaServices_dev_Base_url+"BigStoreServices/user/"+testingUserId+"/datasquares/"+DSID_Get_Data+"/bigstoreData"
	 },
	 
	 "Get_Version" : {
			"url" : javaServices_dev_Base_url+"BigStoreServices/user/"+testingUserId+"/version"
		 },
		 
	 "Put_BigStore_Data" : {
			"url" : javaServices_dev_Base_url+"BigStoreServices/user/"+testingUserId+"/datasquares/"+DSID_Put_Data+"/bigstoreData",
			"form_data" : {
				  "metadata": [
				               {
				                 "columnName": "rowId",
				                 "displayName": "rowId",
				                 "dataType": "Numeric"
				               },
				               {
				                 "columnName": "fruits",
				                 "displayName": "Fruits",
				                 "dataType": "String"
				               },
				               {
				                 "columnName": "quantiy",
				                 "displayName": "Quantiy",
				                 "dataType": "Numeric"
				               },
				               {
				                 "columnName": "unitcost",
				                 "displayName": "UnitCost",
				                 "dataType": "Numeric",
				                 "format": "0,0.00 $"
				               },
				               {
				                 "columnName": "TotalCost",
				                 "displayName": "TotalCost",
				                 "dataType": "Numeric",
				                 "formula": true,
				                 "expression": "Quantiy*UnitCost",
				                 "format": "0,0.00 $",
				                 "readOnly": true
				               }
				             ],
				             "updateRows": {},
				             "addRows": [],
				             "removeColumns":[],
				             "removeRows": [],
				             "columns_order": [
				               0,
				               1,
				               2,
				               3,
				               4
				             ]
				           }
                     },
			 
			 "Post_BigStore_Column" : {
				"url" : javaServices_dev_Base_url+"BigStoreServices/user/"+testingUserId+"/datasquares/"+DSID_Post_BigStore_Column+"/bigstoreData/columns/column",
				"form_data" : {
					"columnName": "formula",
					  "displayName": "formula",
					  "dataType": "Numeric",
					  "formula": true,
					  "expression": "num1+num2",
					  "format": ""
					}
				 },
				 
		     "Delete_BigStore" : {
		    	 "url" :javaServices_dev_Base_url+"BigStoreServices/user/"+testingUserId+"/datasquares/"+DSID_Delete_BigStore
		     },
		     
		     "Update_BigStore_Column" : {
		    	 "url" :javaServices_dev_Base_url+"BigStoreServices/user/"+testingUserId+"/datasquares/"+DSID_Post_BigStore_Column+"/bigstoreData",
		    	 
		    	 "form_data" : {
		    			  "metadata": [
		    			    {
		    			      "columnName": "rowId",
		    			      "displayName": "rowId",
		    			      "dataType": "Numeric"
		    			    },
		    			    {
		    			      "columnName": "num1",
		    			      "displayName": "num1",
		    			      "dataType": "Numeric"
		    			    },
		    			    {
		    			      "columnName": "num2",
		    			      "displayName": "num2",
		    			      "dataType": "Numeric"
		    			    }
		    			  ],
		    			  "updateRows": {},
		    			  "addRows": [],
		    			  "removeColumns": [
		    			    "formula"
		    			  ],
		    			  "removeRows": [],
		    			  "sort": {
		    			    "sort_by": null,
		    			    "order": null
		    			  },
		    			  "columns_order": null
		    	 }
		     }
  }
			 
	 
	 