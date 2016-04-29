/**
 * Created by Apurva on 4/4/16.
 */
   var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/TableGraphServices_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);

   	 frisby.create(cfg.TableGraphServices.desc)
   	  .addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
   	  .post(cfg.TableGraphServices.Post_TableGraph.url,cfg.TableGraphServices.Post_TableGraph.form_data,{ json: true })
//   	  .inspectJSON()
   	  .expectStatus(200)
   	  
   	  .afterJSON(function(json) {
   		  frisby.create(cfg.TableGraphServices.desc)
   		  .addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
   		  .put(cfg.TableGraphServices.Put_TableGraph.url+json.card_id,cfg.TableGraphServices.Put_TableGraph.form_data,{ json: true })
//   		  .inspectJSON()
   		  .expectStatus(200)
   		  
   		  .afterJSON(function(json2) {
   			   frisby.create(cfg.TableGraphServices.desc)
   			  .addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
   			  .delete(cfg.TableGraphServices.Delete_TableGraph.url+json.card_id)
//   			  .inspectJSON()
   			  .expectStatus(200)
   			  .toss()
   		})
   		.toss() 
   	 })
   	 .toss()
