this.dev_frisby_lib_location = "node_modules/frisby";
//this.test_frisby_lib_location = "";
//this.production_frisby_lib_location = "";
//var jria_base_url="http://services.thebighalf.com/";
//var localHost_url="http://localhost:8080/";
var localHost_url="https://dev-services.bighalf.io/";

//GLOBAL SETUP FOR ALL SERVICES 

this.frisby = require(this.dev_frisby_lib_location);
this.maxTimeout = 120*1000; //max 2mins 
//Global setup for all tests
this.frisby.globalSetup({
	request: {
		headers:{'Accept': 'application/json','Content-Type': 'application/json'},
		inspectOnFailure: true, timeout: this.maxTimeout
	}
});
