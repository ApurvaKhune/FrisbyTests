var frisby = require('/home/ec2-user/.npm-global/lib/node_modules/frisby');
frisby.create('as')
 .get('http://www.google.com')
 .expectStatus(200)
.toss()
