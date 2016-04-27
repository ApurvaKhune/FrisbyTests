/**
* Created by Apurva on 31/3/16.
*/
var frisby = require('../node_modules/frisby');

   //var commonCfg = require("../Frisby_Inputs/CommonConfiguration_spec.js");
   //var cfg = require("../Frisby_Inputs/DataSquareInputs_spec.js");
   //var frisby = require(commonCfg.dev_frisby_lib_location);
   
   //frisby.create(cfg.datasquareServices.desc)
   frisby.create('apurva')
  //.get(cfg.datasquareServices.Get_ID.url)
  .get('https://dev-services.bighalf.io/DataSquareService/user/tfortesting16@gmail.com/datasquares/et745c60a8-b38f-4e9d-8d5d-26ac64a4d7ac')
  //.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
  .addHeader('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2hhcmF0aC5nYWRpZ2VAdGhlYmlnaGFsZi5jb20iLCJ1c2VybmFtZSI6IlNoYXJhdGggU3JlZW5pdmFzIEdhZGlnZSIsImlhdCI6MTQ1NTc3NTQ1MX0.2TGz5RtQbe0pquwXL7YXwO6OvMB3Fc5bXSmDUN8uNE8')
  .expectStatus(200)
  .toss();
