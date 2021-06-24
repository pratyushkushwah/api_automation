const request = require('supertest')('https://jsonplaceholder.typicode.com');
const assert = require('chai').assert;

describe('Users API', () => {
    it('GET /users', () => {
        // Make a GET request to the users route 
        return request.get('/users').expect(200).then((res) => {
            // assert data bieng return to not be empty
            assert.isNotEmpty(res.body);
        });
    });

    it('POST /users', async () => {
        const data = {
            name: 'Test user',
            email: 'test_user@digitalonus.com',
        };
        let response = await request
            .post('/users')
            .send(data) // send payload data
        // console.log(response)
        assert.hasAnyKeys(response.body, 'id');
        assert.equal(response.body.name, data.name);
        assert.equal(response.body.email, data.email);
    });
});