/**
 * Created by Apurva on 3/4/16.
 */

   var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/BigStoreInputs_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);

   	 frisby.create(cfg.BigStoreServices.desc)
   	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
	.put(cfg.BigStoreServices.Put_BigStore_Data.url,cfg.BigStoreServices.Put_BigStore_Data.form_data,{ json: true })
//	.inspectJSON()
	.afterJSON(function(json) {
		 frisby.create(cfg.BigStoreServices.desc)
		   	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
		   	.delete(cfg.BigStoreServices.Delete_BigStore.url)
//		   	.inspectJSON()
		    .expectStatus(200)
	          .toss();
	})
	.toss();
