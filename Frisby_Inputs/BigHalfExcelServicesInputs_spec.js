/**
* Created by Apurva on 5/4/16.
*/

var commonCfg = require("./CommonConfiguration_spec.js");
var javaServices_dev_Base_url=commonCfg.javaServices_dev_Base_url;
var testingUserId=commonCfg.testingUserId;

var DSID_Get_ExcelData="ld71bd5710-a97c-4f8f-90ad-4c025eb75b15";
var DSID_Post_ExcelData="jw42c10b59-3f6d-4b3f-9a27-23416c9990b6";
var DSID_Delete_ExcelData="jw42c10b59-3f6d-4b3f-9a27-23416c9990b6";

this.ExcelServices={
	"desc" : "ExcelServices frisby tests",
	 "Get_ExcelData" : {
		"url" : javaServices_dev_Base_url+"BigHalfExcelServices/user/"+testingUserId+"/datasquares/"+DSID_Get_ExcelData+"/excelData"
	 },
	 "Post_ExcelData" : {
		"url" : javaServices_dev_Base_url+"BigHalfExcelServices/user/"+testingUserId+"/datasquares/"+DSID_Post_ExcelData+"/excelData"
	 },
	 "Get_Version" : {
		"url" : javaServices_dev_Base_url+"BigHalfExcelServices/user/"+testingUserId+"/version"
	 },
	 "Delete_ExcelData" : {
		"url" : javaServices_dev_Base_url+"BigHalfExcelServices/user/"+testingUserId+"/datasquares/"+DSID_Delete_ExcelData+"/excelData"
	 }
}