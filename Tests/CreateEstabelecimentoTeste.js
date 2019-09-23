const assert = require('assert');
require('./config/db'); 


describe('Teste para criar um registro', () => {
    it('Criar um estabelecimento', (done) => {
        //utilizando o model instanciado pelo app
        const estabelecimento = new global.modelestabelecimento({
            nome: 'Show de bola',
            email: 'showdebola@gmail.com',
            cidade: 'Ponta Grossa',
            pais: 'Brasil',
            endereco: 'Av. Carlos Cavalcanti N:12',
			horario: '13:00 - 23:00',
			dia: 'segunda - domingo'
        });
        assert(estabelecimento.isNew);//Se o model contato ainda não foi salvo isNew==true
        estabelecimento.save() //envio para o banco de dados (retorna um promisse)
            .then(() => {
                assert(!estabelecimento.isNew); //Se o contato foi salvo no banco de dados ele não é novo
                done();
            });
    });
});