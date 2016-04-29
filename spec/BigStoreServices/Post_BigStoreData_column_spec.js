/**
 * Created by Apurva on 3/4/16.
 */

   var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/BigStoreInputs_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);

   	 frisby.create(cfg.BigStoreServices.desc)
   	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
   	.post(cfg.BigStoreServices.Post_BigStore_Column.url,cfg.BigStoreServices.Post_BigStore_Column.form_data,{ json: true })
//   	.inspectJSON()
   	.afterJSON(function(json) {
		 frisby.create(cfg.BigStoreServices.desc)
		   	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
		   	.put(cfg.BigStoreServices.Update_BigStore_Column.url,cfg.BigStoreServices.Update_BigStore_Column.form_data,{ json: true })
//		   	.inspectJSON()
		    .expectStatus(200)
	          .toss();
	})
	.toss();