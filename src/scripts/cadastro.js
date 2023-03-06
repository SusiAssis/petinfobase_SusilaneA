import { registerRequest } from "./requests.js"

function authentication(){
    const token = localStorage.getItem('@petinfo:token')
    if(token){
    window.location.replace('./dashboard.html')
    }
}



function handleRegister(){
const inputs = document.querySelectorAll('.cadastro_input')
const button = document.querySelector('.bnt_cadastrar')
const registerBody = {}
let count = 0

button.addEventListener('click', async(event)=>{
    event.preventDefault()

    inputs.forEach(({name,value})=>{
        if(value == ''){
            count++
        }

        registerBody[name] = value
    })
     
    console.log(registerBody)
    localStorage.setItem('@petinfo:username', JSON.stringify(registerBody.username))

    if(count != 0){
        console.log(count)
        return alert('por favor preencha todos os campos necessários para realizar o cadastro')
    }else{
    const newUser = await registerRequest(registerBody)

    setTimeout(()=>{
    window.location.replace('../../index.html')
    },3000)

    }

})

}
handleRegister()



function loginBack(){
    const botoesVoltarLogin = document.querySelectorAll(".bnt_voltar")
    
    botoesVoltarLogin.forEach(button=>{
        button.addEventListener('click',()=>{
            window.location.replace('/')
        })
    })

}
loginBack()

authentication()