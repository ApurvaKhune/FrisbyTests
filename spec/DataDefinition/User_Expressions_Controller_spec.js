/**
* Created by Apurva on 6/4/16.
*/

   var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/DataDefinitionInputs_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);
   
   	 frisby.create(cfg.DataDefinition.desc)
   	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
   	.post(cfg.DataDefinition.User_Expressions.url,cfg.DataDefinition.User_Expressions.form_data,{ json: true })
//   	.inspectJSON()
   	.expectStatus(200)
	.toss()
