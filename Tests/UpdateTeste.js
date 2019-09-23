const assert = require('assert');
require('./config/db');
var usuario;

function verificaAtualizado(statement, done) {
    statement
     .then(() => global.modelusuario.find({}))
     .then((usuariobusca) => {
      assert(usuariobusca.length === 1);
      assert(usuariobusca[0].nome === 'Sicrano');
      done();
    });
  }

describe('Atualizando um usuario', () => {
    beforeEach((done) => {
        usuario = new global.modelusuario({
            nome: 'Cesar',
            email: 'cesar@gmail.com',
			funcao: 'jogador',
			disponibilidade 'horario disponivel',
        });
        usuario.save()
            .then(() => done());
    });
    it('Modificar e salvar o nome de um usuario', (done) => {
        usuario.set('nome', 'Sicrano');
        verificaAtualizado(usuario.save(), done);
    });

    it('Atualizar utilizando a instancia', (done) => {
        verificaAtualizado(usuario.updateOne({nome: "Sicrano"}), done);
    });

    it('Atualizar utilizando o model', (done) => {
        verificaAtualizado(global.modelusuario.updateOne({nome: "Fulano"}, {nome: "Sicrano"}), done);
    });
    it('Atualizar utilizando o id', (done) => {
        verificaAtualizado(global.modelusuario.updateOne({_id: usuario._id}, {nome: "Sicrano"}), done);
    });
   
})