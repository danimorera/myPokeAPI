const { request } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app;

describe('Suite de pruebas auth', () => {
    it('should return 401 when no jwt token available', (done) => {
        chai.request(app)
            .get('/team')
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 401);
                done();
            });
    });
    it('should return 200 when jwt token is valid', (done) => {
        chai.request(app)
            .post('/login') //logueamos un usuario
            .end((err, res) => {
                chai.request(app)
                    .get('/team')
                    .set('Authorization', `JWT ${res.body.token}`) //Authorization = header, su valor. Necesitamos otras llamadas
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200);
                        done();
                    });
            });
    });
});