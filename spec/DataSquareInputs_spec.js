/**
* Created by Apurva on 31/3/16.
*/
var frisby = require('../node_modules/frisby');
var commonCfg = require("/CommonConfiguration_spec.js");
var javaServices_dev_Base_url=commonCfg.javaServices_dev_Base_url;
var testingUserId=commonCfg.testingUserId;
var dataSquareId_GetAttribuets="et745c60a8-b38f-4e9d-8d5d-26ac64a4d7ac";
var dataSquareId_Get_ID="et745c60a8-b38f-4e9d-8d5d-26ac64a4d7ac";
var dataSquareType="bigstore";
var dataSquareId_Get_All_Attribute="ehbcfccfa3-7b09-453d-adae-c9686ba4097c";
var dataSquareId_Get_Attribute_value="aa8d6f176e-da5e-4861-94f9-b5fa7d03d8b7";
var attribute_Value="items";
var dataSquareId_Preview="aa8d6f176e-da5e-4861-94f9-b5fa7d03d8b7";
var DSID_PostPutDelete="frisbytesting123";
var DSID_PutService="frisby456";
var Connector_Services_DS_Type="BigStore";
var datasquareFamily_ID="1b31c405-fbc1-4b78-bab0-d8243b400941";
var Update_DsFamily_ID="c9a0fa4b-f613-458b-9a7a-14667d066615";

this.datasquareServices={
	"desc" : "DataSquareService frisby tests",
	 "Post_DSID" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/dataSquareID"
	 },
	 "Get" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares"
	 },
	 "Post" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares",
		"form_data" : {
			"datasquare_id":"frisbytesting123",
			"description":"testing frisby post service",
			"refresh_rate":"1W",
			"dataSquare_Name":"test",
			"dataSquare_Type":"test"
		}
	 },
	 "Types" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares/types"
	 },
	 "Get_By_Type" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares/types/"+dataSquareType
	 },
	 "Put" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares/"+DSID_PutService,
		"form_data" : {
			"description":"testing frisby put service",
			"refresh_rate":"1W",
			"dataSquare_Name":"Testing123",
			"dataSquare_Type":"test"
		}
	 },
	 "DeleteForPost" : {
			"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares/"+DSID_PostPutDelete
		 },
	"Delete" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares/"
	 },
	 "Get_ID" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares/"+dataSquareId_Get_ID
	 },
	 "Get_Attributes" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares/"+dataSquareId_GetAttribuets+"/attributes"
	 },
	 "Get_Attribute_value" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares/"+dataSquareId_Get_Attribute_value+"/attributes/"+attribute_Value
	 },
	 "Get_All_Attribute" : {
			"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares/"+dataSquareId_Get_All_Attribute+"/attributes/all"
		 },
	"Preview" : {
		"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquares/"+dataSquareId_Preview+"/preview"
	 },
	 "Version" : {
			"url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/version"
		 },
	 "Connector_Services" : {
		     "url" : javaServices_dev_Base_url+"DataSquareService/connector/datasquares/"+Connector_Services_DS_Type
	 },
	 "Get_User_DataSquareFamilies" : {
	     "url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquareFamily"
     },
     "Get_User_DataSquareFamily" : {
	     "url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquareFamily/"+datasquareFamily_ID
     },
     "Get_User_DataSquareFamily_Attributes" : {
	     "url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquareFamily"
     },
     "Post_DataSquareFamily" : {
	     "url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquareFamily",
	     "form_data" : {
				"name":"DSFamily",
				"description":"first datasquare family"
			}
     },
     "Delete_DataSquareFamily" : {
	     "url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquareFamily/"
     },
     "Put_User_DataSquareFamily_Attributes" : {
	     "url" : javaServices_dev_Base_url+"DataSquareService/user/"+testingUserId+"/datasquareFamily/"+Update_DsFamily_ID,
	     "form_data" : {
				"name":"DSFamily",
				"description":"updated DS Family"
			}
     }
}
