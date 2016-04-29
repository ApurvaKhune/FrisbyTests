/**
* Created by Apurva on 31/3/16.
*/

   var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/DataSquareInputs_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);

frisby.create(cfg.datasquareServices.desc)
  .get(cfg.datasquareServices.Version.url)
  .addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
  .expectStatus(200)
.toss()