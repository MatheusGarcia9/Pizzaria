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
    const detalhesUsuario = usuarios.find((usuario)=>usuario.id == idUsuario);
    console.log("Nome: " + detalhesUsuario.nome)
    console.log("Endereço: ")
    console.table(detalhesUsuario.enderecos)
    console.log("Formas de Pagamento: ")
    console.table(detalhesUsuario.formasDePagamento)

}

function remover(idDoUsuarioParaRemover) {
    // Seu código aqui findIndex
    // for (let i=0; i<=usuarios.length.id; i++){
    //     if (idDoUsuarioParaRemover == usuarios[i].id)
    //     usuarios.delete(idDoUsuarioParaRemover)
    //     return usuarios

const removerUsuario = usuarios.findIndex((usuario)=> usuario.id = idDoUsuarioParaRemover);
    // removerUsuario.splice(0, 6);
    
    for (const dados in idDoUsuarioParaRemover)
    delete dados
    usuarios.push(removerUsuario)
    fs.writeFileSync(caminhoUsuario, JSON.stringify(usuarios,null,4));
}
// delete removerUsuario.nome;
// delete removerUsuario.id;
// delete removerUsuario.email;
// delete removerUsuario.enderecos;
// delete removerUsuario.formasDePagamento;




function alterar(novosDados, idUsuario) {
    // Seu código aqui 
    //     Nome: novosDados.nome,
    //     email: novosDados.email,
    //     endereco: novosDados.endereco,
    const alterarDados = usuarios.findIndex((usuario)=> usuario.id = idUsuario);
        idUsuario.nome = novosDados.nome 
        idUsuario.email = novosDados.email 
        idUsuario.endereco = novosDados.endereco 
usuarios.id.push(alterarDados)
    fs.writeFileSync(caminhoUsuario, JSON.stringify(usuarios,null,4));
}

function addEndereco(novoEndereco, idUsuario) {
    // Seu código aqui push
    usuarios.find(usuario => idUsuario === usuario.id);
    usuarios.push(novoEndereco);

}
function removerEndereco(posicaoDoEndereco, idUsuario) {
    // Seu código aqui splice
    usuarios.find((usuario)=> usuario.id = idUsuario);{
        usuarios.splice(posicaoDoEndereco, 1)
}
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario) {
    const alterarEnderecoUsuario = usuarios.find((usuario)=> usuario.id = idUsuario);{  
        alterarEnderecoUsuario.splice(posicaoDoEndereco,0,novoEndereco)
}
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario) {
    var usuario = usuario.find(usuario => idUsuario === usuario.id)
    usuarios.endereco.push(novaFormaDePagamento);
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario) {
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario) {
    // Seu código aqui
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