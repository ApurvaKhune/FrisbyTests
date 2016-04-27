/**
* Created by Apurva on 4/4/16.
*/

var commonCfg = require("./CommonConfiguration_spec.js");
var javaServices_dev_Base_url=commonCfg.javaServices_dev_Base_url;
var testingUserId=commonCfg.testingUserId;

var DSID_Get_QBO_Attributes="uqd2e17e2f-1555-49b9-881a-128139fd7c45uqd2e17e2f-1555-49b9-881a-128139fd7c45";
var DSID_Get_QBOReportTypes="uqd2e17e2f-1555-49b9-881a-128139fd7c45";
var DSID_Get_QBOReport="uqd2e17e2f-1555-49b9-881a-128139fd7c45";
var QBOReportType="CustomerIncome";
var DSID_Get_QBOAccessToken="uqd2e17e2f-1555-49b9-881a-128139fd7c45";

this.BigHalfQBO={
	"desc" : "BigHalfQBO frisby tests",
	 "Get_QBO_Attributes" : {
		"url" : javaServices_dev_Base_url+"BigHalfQBO/user/"+testingUserId+"/datasquares/"+DSID_Get_QBO_Attributes+"/QBOAttributes"
	 },
	 
	 "Get_QBOReportTypes" : {
			"url" : javaServices_dev_Base_url+"BigHalfQBO/user/"+testingUserId+"/datasquares/"+DSID_Get_QBOReportTypes+"/QBOReport/QBOReportTypes"

		 },
	"Get_QBOReport" : {
			"url" : javaServices_dev_Base_url+"BigHalfQBO/user/"+testingUserId+"/datasquares/"+DSID_Get_QBOReport+"/QBOReport/"+QBOReportType
		 },
		 
	"Get_QBOAccessToken" : {
			"url" : javaServices_dev_Base_url+"BigHalfQBO/user/"+testingUserId+"/datasquares/"+DSID_Get_QBOAccessToken+"/QBOAccessToken/"
		 },
		 
	"Get_Version" : {
			"url" : javaServices_dev_Base_url+"BigHalfQBO/user/"+testingUserId+"/version"
		},
		
	"Post_QBO_URL" : {
		    "url" : javaServices_dev_Base_url+"BigHalfQBO/user/"+testingUserId+"/QBOURL",
		    "form_data" : {
		    	  "oauth_callback": "http://localhost:8080/CallBackURL"
		    }
		},
		
		
}	 
	 