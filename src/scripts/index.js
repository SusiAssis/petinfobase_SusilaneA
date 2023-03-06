import { loginRequest } from "./requests.js"

/* Desenvolva seu código aqui */

function authentication(){
    const token = localStorage.getItem('@petinfo:token')
    if(token){
    window.location.replace('./src/pages/dashboard.html')
    }
}

function handleLogin(){
    const inputs = document.querySelectorAll('.login_input')
    const button = document.querySelector('.bnt_acessar')
    const loginBody = {}
    let count = 0

    button.addEventListener('click', async(event)=>{
        event.preventDefault()

        inputs.forEach(input=>{
            
            if(input.value == ''){
                count++
            }

            loginBody[input.name] = input.value
        })
        
        console.log(loginBody)
        
        if(count != 0){
            return alert('Por favor preencha os campos e tente novamente')
        }else{
            const token = await loginRequest(loginBody)
            console.log(token)
            return token
        }
    })
}
handleLogin()



function goToRegister(){
    const botaoIrCadastro = document.querySelector(".bnt_cadastrar")
   
        botaoIrCadastro.addEventListener('click',()=>{
            
            setTimeout(()=>{
                window.location.replace('/src/pages/cadastro.html')
            },2000)
            
        })

}
goToRegister()

authentication()