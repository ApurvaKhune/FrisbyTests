/**
* Created by Apurva on 6/4/16.
*/

   var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/DataDefinitionInputs_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);
   


   	 frisby.create(cfg.DataDefinition.desc)
   	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
   	.post(cfg.DataDefinition.Post_DataDefinition.url,cfg.DataDefinition.Post_DataDefinition.form_data,{ json: true })
//   	.inspectJSON()
   	 .expectStatus(200)
   	
   	.afterJSON(function(json) {
   		frisby.create(cfg.DataDefinition.desc)
   		  .addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
   		  .put(cfg.DataDefinition.Put_DataDefinition.url+json.data_definition_id,cfg.DataDefinition.Put_DataDefinition.form_data,{ json: true })
//   		  .inspectJSON()
   		  .expectStatus(200)
   		  
   		  .afterJSON(function(json2) {
   			frisby.create(cfg.DataDefinition.desc)
   			  .addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
   			  .delete(cfg.DataDefinition.Delete_Definition.url+json.data_definition_id+cfg.DataDefinition.Delete_Definition.url2)
   			  .expectStatus(200)
   			  .toss()
   		})
   		.toss() 
   	 })
   	 .toss()
