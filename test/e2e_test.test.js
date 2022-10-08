const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app;


describe('Suite de prueba e2e HW', () => {
    it('Should return hello world', (done) => { //lo que debe devolver + el callback
        chai.request(app)//le decimos a chai que queremos usar el servidor definido en app
            .get('/') //queremos ver que nos devuelve la raiz
            .end((err, res) => { //recojemos lo que nos ha devuelto la llamada (error o exito)
                console.log('A')
                chai.assert.equal(res.text, 'Hello World!') //comprobamos que el caso exito devuelve lo que queremos que devuelva
                done(); //esta duncion suluciona problemas de asincronia, para que termine cuando se ha ejecutado la llamada y no antes.
            });
        console.log('B')
    });
});