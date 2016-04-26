var frisby = require('../node_modules/frisby');
frisby.create('as')
 .get('http://www.google.com')
 .expectStatus(400)
.toss()
