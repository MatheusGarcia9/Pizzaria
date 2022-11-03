const UsuariosServices = require('../services/UsuariosServices')

//UsuariosServices.salvar([{nome:"Felipe", idade:51}]);

// UsuariosServices.cadastrar({nome: "Nome do Usuário",
// email: "email@dousuario.com",
// senha: "senha_do_usuario_sem_criptografar",
// endereco: "Rua dos usuários, nº 256. Usuariolândia-BA"})

// UsuariosServices.detalhar(129);

UsuariosServices.remover(129);

// UsuariosServices.alterar({
//     "nome": "Matheus",
//     "email": "email@dousuario.com",
//     "enderecos": [
//         "Rua dos usuários, nº 256. Usuariolândia-BA"
//     ]    
// }, 131)

// UsuariosServices.addEndereco("Rua dos usuários, nº 351. Usuariolândia-BA",131);