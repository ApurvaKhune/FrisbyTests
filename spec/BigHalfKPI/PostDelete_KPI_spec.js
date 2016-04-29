/**
* Created by Apurva on 5/4/16.
*/

   var commonCfg = require("../../Frisby_Inputs/CommonConfiguration_spec.js");
   var cfg = require("../../Frisby_Inputs/BigHalfKPIInputs_spec.js");
   var frisby = require(commonCfg.dev_frisby_lib_location);

   	 frisby.create(cfg.BigHalfKPI.desc)
   	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
	.post(cfg.BigHalfKPI.Post_KPI_Data.url,cfg.BigHalfKPI.Post_KPI_Data.form_data,{ json: true })
//	.inspectJSON()
	 .expectStatus(200)
	.afterJSON(function(json) {
		 frisby.create(cfg.BigHalfKPI.desc)
		   	.addHeader(commonCfg.authrizationKey,commonCfg.authrizationValue)
		   	.delete(cfg.BigHalfKPI.Delete_KPI_Data.url+json.kpi_id)
//		   	.inspectJSON()
		    .expectStatus(200)
	          .toss();
	})
	.toss();
