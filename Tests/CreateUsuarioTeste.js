const assert = require('assert');
require('./config/db'); 


describe('Teste para criar um registro', () => {
    it('Criar um usuario', (done) => {
        //utilizando o model instanciado pelo app
        const usuario = new global.modelestabelecimento({
            nome: 'Cesar',
            email: 'cesar@gmail.com',
			funcao: 'jogador',
			disponibilidade 'horario disponivel',
            
        });
        assert(usuario.isNew);//Se o model contato ainda não foi salvo isNew==true
        usuario.save() //envio para o banco de dados (retorna um promisse)
            .then(() => {
                assert(!usuario.isNew); //Se o contato foi salvo no banco de dados ele não é novo
                done();
            });
    });
});