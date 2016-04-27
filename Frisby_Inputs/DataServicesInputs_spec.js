/**
* Created by Apurva on 31/3/16.
*/

var commonCfg = require("./CommonConfiguration_spec.js");
var javaServices_dev_Base_url=commonCfg.javaServices_dev_Base_url;
var testingUserId=commonCfg.testingUserId;
var DSID_Post_Data="vhb140a27f-93fb-4034-ba31-4f73d52010fc";
var DSID_Post_Cardfilters="vhb140a27f-93fb-4034-ba31-4f73d52010fc";
var CardID_Get_Attribute_Values="a6f6dcfe-df62-47c7-8dab-9f4b9c58b2b4";
var attributeName_Get_Attribute_Values="TotalCost";
var DSID_Get_Refresh="vhb140a27f-93fb-4034-ba31-4f73d52010fc";

this.dataServices={
	"desc" : "DataService frisby tests",
	 "Post_Data" : {
		"url" : javaServices_dev_Base_url+"DataServices/user/"+testingUserId+"/datasquares/"+DSID_Post_Data+"/data",
		"form_data" : {
		  "xAttributeName": "items",
		  "graphType": "bar_chart",
		  "series": [
		    {
		      "series": "TotalCost",
		      "seriesType": "MIN"
		    }
		  ]
		}
	 },
	 "Post_Cardfilters" : {
		"url" : javaServices_dev_Base_url+"DataServices/user/"+testingUserId+"/datasquares/"+DSID_Post_Cardfilters+"/data/cardfilters",
		"form_data" : {
		  "xAttributeName": "quantity",
		  "graphType": "grouped_bar_chart",
		  "series": [
		    {
		      "series": "unitcost",
		      "seriesType": "MIN"
		    },
		    {
		        "series": "TotalCost",
		        "seriesType": "MIN",
		        "gaugeProperties": {
		          "range": {
		            "minimum": null,
		            "maximum": null
		          }
		        },
		        "displayOptions": {
		          "yellow": [
		            null,
		            null
		          ],
		          "red": [
		            null,
		            null
		          ]
		        }
		      }
		  ],
		  "filters": [
		    {
		      "filterName": "quantity",
		      "values": [
		        "5"
		      ],
		      "operator": ">"
		    },
		  ]
		}
	 },
	 "Get_Attribute_Values" : {
			"url" :javaServices_dev_Base_url+"DataServices/user/"+testingUserId+"/cards/"+CardID_Get_Attribute_Values+"/attributevalues?attributeName="+attributeName_Get_Attribute_Values
		 },
	"Get_Refresh" : {
				"url" :javaServices_dev_Base_url+"DataServices/datasquares/"+DSID_Get_Refresh+"/refresh?request="+"%7B%22graphType%22%3A%22bar_chart%22%2C%22startDateTime%22%3A%22%22%2C%22endDateTime%22%3A%22%22%2C%22series%22%3A%5B%7B%22series%22%3A%22TotalCost%22%2C%22seriesType%22%3A%22AVG%22%7D%5D%2C%22bigquery%22%3A%7B%22data_source%22%3A%22elasticsearch%22%2C%22query%22%3A%7B%22aggregations%22%3A%7B%22agg%22%3A%7B%22filter%22%3A%7B%22bool%22%3A%7B%7D%7D%2C%22aggregations%22%3A%7B%22group_by%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22items%22%2C%22size%22%3A10000%7D%2C%22aggregations%22%3A%7B%22avg%24TotalCost%22%3A%7B%22avg%22%3A%7B%22field%22%3A%22TotalCost%22%7D%7D%2C%22count%24items%22%3A%7B%22value_count%22%3A%7B%22field%22%3A%22items%22%7D%7D%7D%7D%7D%7D%7D%7D%7D%2C%22xAttributeName%22%3A%22items%22%7D"
			 },
	"Version" : {
		"url" : javaServices_dev_Base_url+"DataServices/user/"+testingUserId+"/version"
			 }	 
		 
}