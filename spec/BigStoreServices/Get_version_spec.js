/**
 * Created by Apurva on 3/4/16.
 */
var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
var cfg = require("../../Frisby_Inputs/BigStoreInputs_spec.js");
var frisby = require(commonCfg.dev_frisby_lib_location);

frisby.create(cfg.BigStoreServices.desc).
      get(cfg.BigStoreServices.Get_Version.url).
      addHeader(commonCfg.authrizationKey, commonCfg.authrizationValue)
	  .expectStatus(200)
	  .toss()