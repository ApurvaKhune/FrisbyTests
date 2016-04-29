/**
* Created by Apurva on 5/4/16.
*/

var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
var cfg = require("../../Frisby_Inputs/BigHalfExcelServicesInputs_spec.js");
var frisby = require(commonCfg.dev_frisby_lib_location);

   	 frisby.create(cfg.ExcelServices.desc)
	.get(cfg.ExcelServices.Get_ExcelData.url)
	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
//	.inspectJSON()
	.expectStatus(200)
	.toss()
