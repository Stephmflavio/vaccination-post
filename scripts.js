// CADASTRO ------------------------------------------

// const cadastro = () => {
//     const usuario = []
//     const nome = prompt("Digite seu nome") 
//     const anoDeNascimento = Number(prompt("Digite seu ano de nascimento") )
//     const nacionalidade = prompt("Digite sua nacionalidade") 
//     const senha = prompt("Digite sua senha") 

//     const idade = 2021 - anoDeNascimento

//     if(senha.length < 6){
//         console.log('sua senha deve ter pelo menos 6 caracteres')
//     }
//     if(idade < 18) {
//         console.log('Para se cadastrar precisa ter 18 anos')
//     }
//     if(nacionalidade !== "brasileira") {
//         console.log('Para se cadastrar precisa ser brasileiro')
//     }

//     if(idade >= 18 && nacionalidade === "brasileira" && senha.length >= 6){
//         usuario.push(nome, anoDeNascimento, nacionalidade, senha)
//         console.log('Usuário cadastrado com sucesso')
//     }

//     console.log("usuario: ", usuario)
// }
// console.log(cadastro());



// LOGIN ----------------------------------------------


// const login = () => {
//  const senha = prompt("Digite sua senha")   
//  const login = "labenu"
//     if(senha === login){
//         console.log("Usuário logado");
//     } else {
//         console.log("Senha Inválida");
//     }
// }

// console.log(login());


// PRIMEIRA DOSE --------------------------------------


// const primeiraDose = () => {
//     const nome = prompt("Digite seu nome")
//     const vacina = prompt("Digite o nome da vacina da 1ª dose")
//     let tempo = ""
//     let data = ""

//     if (vacina === "coronavac") {
//         tempo = 28
//         data = "27/09/2021"

//     } else if (vacina === "pfiser") {
//         tempo = "90"
//         data = "30/11/2021"

//     } else {
//         tempo = "90"
//         data = "30/11/2021"

//     }

//     return (`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)

// }
// console.log(primeiraDose())



