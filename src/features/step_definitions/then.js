const { Then } = require('@cucumber/cucumber');
const assert = require('chai').assert;
const request = require('supertest')('https://jsonplaceholder.typicode.com');

Then(/^GET$/, async () => {
        // Make a GET request to the users route 
        let response = await request
            .get('/users')
            .expect(200)
        // assert data bieng return to not be empty
        console.log(JSON.stringify(response));
        assert.isNotEmpty(response.body);
    });

Then(/^POST$/, async () => {
        const data = {
            name: 'Test user',
            email: 'test_user@digitalonus.com',
        };
        let response = await request
            .post('/users')
            .send(data) // send payload data
            
        assert.hasAnyKeys(response.body, 'id');
        assert.equal(response.body.name, data.name);
        assert.equal(response.body.email, data.email);
    });