/**
* Created by Apurva on 31/3/16.
*/

   //var commonCfg = require("../Frisby_Inputs/CommonConfiguration_spec.js");
   //var cfg = require("../Frisby_Inputs/DataSquareInputs_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);
   
   frisby.create(cfg.datasquareServices.desc)
  //.get(cfg.datasquareServices.Get_ID.url)
  .get(https://dev-services.bighalf.io/DataSquareService/user/tfortesting16@gmail.com/datasquares/et745c60a8-b38f-4e9d-8d5d-26ac64a4d7ac)
  //.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
  .expectStatus(200)
  .toss()