const request = require('supertest');
const app = require('../../src/app');

describe('ONG', ()=>{
    it('should be able to create a new ONG', async() => {
        const response = await request(app).post('/ongs').send({
            id: "0943344f",
            name: "APAD",
            email: "contato@apad.com",
            whatsapp: "4700000000",
            city: "Rio do Sul",
            uf: "SC"
        });

        console.log(response.body);
    });
});