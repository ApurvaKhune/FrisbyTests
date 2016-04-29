/**
* Created by Apurva on 5/4/16.
*/

var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
var cfg = require("../../Frisby_Inputs/BigHalfExcelServicesInputs_spec.js");
var frisby = require(commonCfg.dev_frisby_lib_location);

var authVal=commonCfg.authrizationValue;
var auth = 'Authorization';
var fs = require('fs');
var path = require('path');
var FormData = require('form-data');
var form = new FormData();
form.append('file', fs.createReadStream('PostDeleteExcel_Frisby.xlsx'), {
	  knownLength: fs.statSync('PostDeleteExcel_Frisby.xlsx').size
	});
 	frisby.create(cfg.ExcelServices.desc)
 		.post(cfg.ExcelServices.Post_ExcelData.url, form, {
 			json: false,
 			headers: {
 				'content-type': 'multipart/form-data; boundary=' + form.getBoundary(),
 				'content-length': form.getLengthSync(),
 				'Authorization':authVal
 			}
 		})
// 		.inspectJSON()
 		.expectStatus(200)
 		.afterJSON(function(jsonResponse){
 			 frisby.create(cfg.ExcelServices.desc)
 			.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
 			.delete(cfg.ExcelServices.Delete_ExcelData.url)
// 			.inspectJSON()
 			.expectStatus(200)
 			.toss()
 		})
 		.toss();
