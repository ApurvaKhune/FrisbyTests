/**
* Created by Apurva on 31/3/16.
*/
var commonCfg = require("../Frisby_Inputs/CommonConfiguration_spec.js");
var cfg = require("../Frisby_Inputs/DataSquareInputs_spec.js");
var frisby = require(commonCfg.dev_frisby_lib_location);

frisby.create(cfg.datasquareServices.desc)
	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
	.post(cfg.datasquareServices.Post_DataSquareFamily.url,cfg.datasquareServices.Post_DataSquareFamily.form_data,{json: true})
	.inspectJSON()
	.afterJSON(function(jsonResponse) {
		frisby.create(cfg.datasquareServices.desc)
	        .addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
	        .delete(cfg.datasquareServices.Delete_DataSquareFamily.url+jsonResponse.id)
	        .expectStatus(200)
	        .toss()
	})
.toss()