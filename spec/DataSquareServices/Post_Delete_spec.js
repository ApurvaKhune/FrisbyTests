var commonCfg = require("../Frisby_Inputs/CommonConfiguration_spec.js");
var cfg = require("../Frisby_Inputs/DataSquareInputs_spec.js");
var frisby = require(commonCfg.dev_frisby_lib_location);

console.log(cfg.datasquareServices.Post.form_data);
	frisby.create(cfg.datasquareServices.desc)
	  .addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
	  .post(cfg.datasquareServices.Post.url,cfg.datasquareServices.Post.form_data)
	  .afterJSON(function(json) {
	     frisby.create(cfg.datasquareServices.desc)
	          .addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
	          .delete(cfg.datasquareServices.DeleteForPost.url)
	          .expectStatus(200)
	          .toss();
	   })
	.toss();