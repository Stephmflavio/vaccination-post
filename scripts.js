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



// SEGUNDA DOSE ------------------------------------------


// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     let novoUsuario = [...usuarios]

//     for (let n of novoUsuario) {
//         if (n.nome === nomeDoUsuario) {
//            n.imunizacao= "completa"
//             return novoUsuario
//         }

//     }
// }
// console.log(segundaDose("Barbara"));


// ATRASO DE DOSE -------------------------------------------


// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     for (let n of usuarios) {
//         if (n.imunizacao === "incompleta") {

//             console.log(`Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
//         }

//     }
// }
// console.log(avisoAosAtrasados());


// DESAFIO --------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]
// const novoUsuario=[]
// const cadastro=()=>{
       
//         const nomeDoUsuario = prompt("Digite seu nome") 
//         const anoDeNascimento = Number(prompt("Digite seu ano de nascimento") )
//         const nacionalidadeDoUsuario = prompt("Digite sua nacionalidade").toLowerCase()
//         const senhaDoUsuario = prompt("Cadastre sua senha") 
//         console.log("nacionalidadeDoUsuario", nacionalidadeDoUsuario);
//         const idade = 2021 - anoDeNascimento
    
//         if(senhaDoUsuario.length < 6){
//             console.log('sua senha deve ter pelo menos 6 caracteres')
//         }
//         if(idade < 18){
//             console.log('Para se cadastrar precisa ter 18 anos')
//         }
//         if(nacionalidadeDoUsuario !== "brasileira" || nacionalidadeDoUsuario !== "brasileiro"){
//             console.log('Para se cadastrar precisa ser brasileiro ou brasileira')
//         }
    
//         if(idade >= 18 && nacionalidadeDoUsuario === "brasileira" && senhaDoUsuario.length >= 6){
//             usuarios.push({nome:nomeDoUsuario, ano:anoDeNascimento, nacionalidade:nacionalidadeDoUsuario, senha:senhaDoUsuario} )
//             console.log('Usuário cadastrado com sucesso')
//         }
//         return usuarios
//     }
//     console.log(cadastro());

//     const login = () => {

//          const senhaDoUsuario = prompt("Digite sua senha") 
//          const senhaValida = usuarios.filter((senha)=>{

//             if(senha.senha===senhaDoUsuario){
//                 return "Usuário logado"
//             }else{
//                 return 
//             }

//          }) 
        
//          }
//         console.log(login());