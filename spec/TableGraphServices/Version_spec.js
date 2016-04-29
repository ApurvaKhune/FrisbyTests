/**
 * Created by Apurva on 4/4/16.
 */
 var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/TableGraphServices_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);


   frisby.create(cfg.TableGraphServices.desc)
	  .addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
      .get(cfg.TableGraphServices.Version.url)
//      .inspectJSON()
	  .expectStatus(200)
	  .toss()