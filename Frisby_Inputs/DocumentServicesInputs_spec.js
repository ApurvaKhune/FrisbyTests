/**
* Created by Apurva on 4/4/16.
*/

var commonCfg = require("./CommonConfiguration_spec.js");
var javaServices_dev_Base_url=commonCfg.javaServices_dev_Base_url;
var testingUserId=commonCfg.testingUserId;

var Document_ID="92a5eb9f-d6e2-43be-bd8f-33f998c366dc";

this.DocumentServices={
	"desc" : "DocumentServices frisby tests",
	 "Get_Documents" : {
		"url" : javaServices_dev_Base_url+"DocumentServices/documents/"+Document_ID
	 },
	 
	 "Get_Document_Link" : {
			"url" : javaServices_dev_Base_url+"DocumentServices/documents/"+Document_ID+"/link"
		 },
	 "Post_Document" : {
			"url" : javaServices_dev_Base_url+"DocumentServices/documents/"
		 },
	 "Delete_Document" : {
			"url" : javaServices_dev_Base_url+"DocumentServices/documents/"

		 }
		 
}