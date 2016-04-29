/**
* Created by Apurva on 4/4/16.
*/

   var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/BigHalfQBOInputs_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);

   	 frisby.create(cfg.BigHalfQBO.desc)
	.post(cfg.BigHalfQBO.Post_QBO_URL.url,cfg.BigHalfQBO.Post_QBO_URL.form_data,{ json: true })
	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
//	.inspectJSON()
	.expectStatus(200)
	.toss();
