var frisby = require('C:/Users/Apurva/node_modules/frisby');
frisby.create('as')
 .get('http://www.google.com')
 .expectStatus(200)
.toss()