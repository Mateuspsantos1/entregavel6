function usuario(nome, idade, cep) {
    this.nome = nome;
    this.idade = idade;
    this.cep = cep;
}
    const usuario1 = new usuario("nenhun", 0, "0");
    const cadastro = prompt("qual seu nome?")
    const cadastro2 = prompt("qual sua idade?")
    const cadastro3 = prompt("qual seu CEP?")
    
    usuario1["nome"] = cadastro
    usuario1.idade = cadastro2
    usuario1["CEP"] = cadastro3

    alert("ola seja bem-vindo " + cadastro + ", voce já esta cadastrado :)")