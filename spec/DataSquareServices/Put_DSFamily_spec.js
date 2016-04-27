var commonCfg = require("../Frisby_Inputs/CommonConfiguration_spec.js");
var cfg = require("../Frisby_Inputs/DataSquareInputs_spec.js");
var frisby = require(commonCfg.dev_frisby_lib_location);

frisby
	.create(cfg.datasquareServices.desc)
	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
	.put(cfg.datasquareServices.Put_User_DataSquareFamily_Attributes.url,cfg.datasquareServices.Put_User_DataSquareFamily_Attributes.form_data,{ json: true })
	.expectStatus(200).toss();