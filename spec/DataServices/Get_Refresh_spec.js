/**
* Created by Apurva on 2/4/16.
*/

   var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/DataServicesInputs_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);

   	 frisby.create(cfg.dataServices.desc)
	.get(cfg.dataServices.Get_Refresh.url)
	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
//	.inspectJSON()
	.expectStatus(200)
	.toss();
