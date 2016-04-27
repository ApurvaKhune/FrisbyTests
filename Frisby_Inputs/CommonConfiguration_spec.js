/**
* Created by Apurva on 31/3/16.
*/
this.testingUserId="tfortesting16@gmail.com";
this.javaServices_dev_Base_url="https://dev-services.bighalf.io/";
this.javaServices_prod_Base_url="https://services.bighalf.io/";
this.authrizationKey="Authorization";
this.authrizationValue="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2hhcmF0aC5nYWRpZ2VAdGhlYmlnaGFsZi5jb20iLCJ1c2VybmFtZSI6IlNoYXJhdGggU3JlZW5pdmFzIEdhZGlnZSIsImlhdCI6MTQ1NTc3NTQ1MX0.2TGz5RtQbe0pquwXL7YXwO6OvMB3Fc5bXSmDUN8uNE8";

//this.dev_frisby_lib_location = "C:/Users/Apurva/node_modules/frisby";
this.dev_frisby_lib_location = "node_modules/frisby";
this.test_frisby_lib_location = "";
this.production_frisby_lib_location = "";

this.frisby = require(this.dev_frisby_lib_location);
this.maxTimeout = 120*1000; //max 2mins 
//Global setup for all tests
this.frisby.globalSetup({
	request: {
		headers:{'Accept': 'application/json','Content-Type': 'application/json'},
		inspectOnFailure: true, timeout: this.maxTimeout
	}
});

