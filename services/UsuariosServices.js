const usuarios = require('../databases/usuarios.json')
const fs = require('fs');
const bcrypt = require('bcrypt')
const path = require('path')
const caminhoUsuario = path.join(__dirname,"..","databases","usuarios.json")


function listar() {
    console.table(u.map(
        usuario => {
            return {
                id: usuario.id,
                nome: usuario.id,
                email: usuario.email,
            }
        }
    ));
}

function buscar(trecho){
    let temTrechoNoNome = usuario => usuario.nome.includes(trecho);

    let usuariosComNomesBuscados = usuarios.filter(temTrechoNoNome);
    
    return usuariosComNomesBuscados;

}

function salvar(arrayDeUsuarios) {
    fs.writeFileSync(caminhoUsuario, JSON.stringify(arrayDeUsuarios,null,4));

}

function cadastrar(objeto) {
    let senhaCriptografada = bcrypt.hashSync(objeto.senha, 10)
    let novoId = usuarios[usuarios.length-1].id + 1;

    let usuario = {
        id: novoId,
        nome: objeto.nome,
        email: objeto.email,
        senha: senhaCriptografada,
        enderecos:[objeto.endereco],
        formasDePagamento:[]
    }
    usuarios.push(usuario)
    fs.writeFileSync(caminhoUsuario, JSON.stringify(usuarios,null,4));
    
}

function detalhar(idUsuario) {
    const detalhesUsuario = usuarios.find(usuario=>usuario.id == idUsuario);
    console.log("Nome: " + detalhesUsuario.nome)
    console.log("Endereço: ")
    console.table(detalhesUsuario.enderecos)
    console.log("Formas de Pagamento: ")
    console.table(detalhesUsuario.formasDePagamento)

}

function remover(idDoUsuarioParaRemover) {
const removerUsuario = usuarios.findIndex(usuario=> usuario.id == idDoUsuarioParaRemover);
usuarios.splice(removerUsuario,1)
salvar(usuarios)
}

function alterar(novosDados, idUsuario) {
    let senhaCriptografada = bcrypt.hashSync(novosDados.senha, 10);
    const usuarioId = usuarios.find(usuario=> usuario.id == idUsuario);
        usuarioId.nome = novosDados.nome;
        usuarioId.email = novosDados.email;
        usuarioId.senha = senhaCriptografada;
        
        salvar(usuarios)
}

function addEndereco(novoEndereco, idUsuario) {
    // Seu código aqui push
    let usuarioId = usuarios.findIndex(usuario => idUsuario === usuario.id);
    usuarios[usuarioId].enderecos.push(novoEndereco);
    salvar(usuarios);
}

function removerEndereco(posicaoDoEndereco, idUsuario){
    // Seu código aqui splice
    const usuarioId = usuarios.findIndex(usuario=> usuario.id == idUsuario);{
    usuarios[usuarioId].enderecos.splice(posicaoDoEndereco, 1);
    salvar(usuarios)
    }
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario) {
    const usuarioId = usuarios.findIndex(usuario=> usuario.id == idUsuario);{  
    usuarios[usuarioId].enderecos[posicaoDoEndereco] = novoEndereco;
    salvar(usuarios)
}
}


function addFormaDePagamento(novaFormaDePagamento, idUsuario) {
    const usuarioId = usuarios.findIndex(usuario => idUsuario == usuario.id)
    usuarios[usuarioId].formasDePagamento.push(novaFormaDePagamento);
    salvar(usuarios)
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario) {
    const usuarioId = usuarios.findIndex(usuario => idUsuario == usuario.id)
    usuarios[usuarioId].formasDePagamento.splice(posicaoDaFormaDePagamento,1);
    salvar(usuarios)
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario) {
    const usuarioId = usuarios.findIndex(usuario=> usuario.id == idUsuario);
    usuarios[usuarioId].formasDePagamento[posicaoDaFormaDePagamento] = novaFormaDePagamento;
    salvar(usuarios)
}

const UsuariosServices = {
    cadastrar,
    listar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices