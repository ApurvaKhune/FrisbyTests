/**
* Created by Apurva on 4/4/16.
*/

   var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/TableGraphServices_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);

   	 frisby.create(cfg.TableGraphServices.desc)
	.get(cfg.TableGraphServices.Get_Card_Details.url)
	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
//	.inspectJSON()
	.expectStatus(200)
	.toss();