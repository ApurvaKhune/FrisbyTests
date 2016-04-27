/**
 * Created by Apurva on 3/4/16.
 */
var commonCfg = require("./CommonConfiguration_spec.js");
var javaServices_dev_Base_url=commonCfg.javaServices_dev_Base_url;
var testingUserId=commonCfg.testingUserId;

var CardId_Get_Data_ForTableGraph="TG~b4304247-5fdf-4022-b268-ec9dc6d0115a";
//CardID_Delete_Tablegraph="TG~4427d473-1f15-48a8-9ff1-987b9550d0f4";
var CardID_Delete_Tablegraph="TG~3350d509-c2c2-47dd-b709-5e29f5dc65fe";
var CardID_Put="TG~3350d509-c2c2-47dd-b709-5e29f5dc65fe";


this.TableGraphServices={
	"desc" : "TableGraphServices frisby tests",
	 "Get_TableGraph" : {
		"url" : javaServices_dev_Base_url+"TableGraphServices/user/"+testingUserId+"/cards/tablegraphs/"
	 },
	 
	 "Get_Data_ForTableGraph" : {
			"url" : javaServices_dev_Base_url+"TableGraphServices/user/"+testingUserId+"/cards/"+CardId_Get_Data_ForTableGraph

		 },
		 
	 "Get_CardID" : {
			"url" : javaServices_dev_Base_url+"TableGraphServices/user/"+testingUserId+"/tablegraph/board"
			 },
			 
	 "Get_Card_Details" : {
			"url" : javaServices_dev_Base_url+"TableGraphServices/user/"+testingUserId+"/tablegraph/board/cards"
				 },
				 
	 "Post_TableGraph" : {
			"url" : javaServices_dev_Base_url+"TableGraphServices/user/"+testingUserId+"/cards",
			
			"form_data" :{
				  "name": "CURD on tablegraph",
				  "description": "frisby test for testing curd operations on tablegraph",
				  "datasquare_id": "pg3a9abeb8-3b39-4ff9-927b-4a129c58a5b4"
				}
				},
	 "Put_TableGraph" : {
			"url" : javaServices_dev_Base_url+"TableGraphServices/user/"+testingUserId+"/cards/"+CardID_Put,
						
			"form_data" : {
				  "name": "CURD on tablegraph",
				  "description": "frisby test for testing curd operations on tablegraph",
				  "datasquare_id": "pg3a9abeb8-3b39-4ff9-927b-4a129c58a5b4",
				  "bigquery": {
				    "data_source": "elasticsearch",
				    "query": {
				      "_source": {
				        "includes": [
				          "employeename"
				        ],
				        "excludes": []
				      },
				      "sort": [
				        {
				          "rowId": {
				            "order": "asc"
				          }
				        }
				      ]
				    }
				  },
				  "permissions": {
				    "columns": [],
				    "rows": []
				  },
				  "formats": {},
				  "structure": {
				    "series": [
				      {
				        "series": "employeename"
				      }
				    ],
				    "expressions": {}
				  },
				  "id": "TG~3350d509-c2c2-47dd-b709-5e29f5dc65fe"
				}
			},	
		"Delete_TableGraph" : {
			"url" : javaServices_dev_Base_url+"TableGraphServices/user/"+testingUserId+"/cards/"+CardID_Delete_Tablegraph
			 },
		
		"Version" : {
			"url" : javaServices_dev_Base_url+"TableGraphServices/user/"+testingUserId+"/version"
		 }
}
