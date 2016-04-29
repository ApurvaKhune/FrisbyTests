/**
 * Created by Apurva on 5/4/16.
 */

var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
var cfg = require("../../Frisby_Inputs/DocumentServicesInputs_spec.js");
var frisby = require(commonCfg.dev_frisby_lib_location);

var authVal=commonCfg.authrizationValue;
var auth = 'Authorization';
var fs = require('fs');
var path = require('path');
var FormData = require('form-data');
var form = new FormData();
form.append('file', fs.createReadStream('Defects_Month.xlsx'), {
	  knownLength: fs.statSync('Defects_Month.xlsx').size
	});
 	frisby.create(cfg.DocumentServices.desc)
 		.post(cfg.DocumentServices.Post_Document.url, form, {
 			json: false,
 			headers: {
 				'content-type': 'multipart/form-data; boundary=' + form.getBoundary(),
 				'content-length': form.getLengthSync(),
 				'Authorization':authVal
 			}
 		})
// 		.inspectJSON()
 		.afterJSON(function(jsonResponse){
 			 frisby.create(cfg.DocumentServices.desc)
 			.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
 			.delete(cfg.DocumentServices.Delete_Document.url+jsonResponse.documentId)
// 			.inspectJSON()
 			.expectStatus(200)
 			.toss()
 		})
 		.toss();
