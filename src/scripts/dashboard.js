import { render } from "./render.js";
import { modalCriarPost, createModalAcessarPost } from "./render.js";
import { modalEditarPost, modalExcluirPost } from "./render.js";
import { renderProfile } from "./render.js";
import { readAllPosts } from "./requests.js";
import { userProfile } from "./requests.js";
import { creatPosts } from "./requests.js";
import { alterarPosts, deletePost } from "./requests.js";

async function renderDashboard(){
    const user = await userProfile()
    const allposts = await readAllPosts()
    render(allposts,user)
    
    console.log(user)
    localStorage.setItem('@petinfo:Allposts', JSON.stringify(allposts))
    
    renderProfile(user)

    showAddPostModal()

    showEditarPost()
    showExcluirPost()
    showModalAcessar()

}
renderDashboard()



function showAddPostModal(){
    const button = document.querySelector('.button_criar')
    console.log(button)
    const modalControler = document.querySelector('.controler_modal')

    button.addEventListener('click',()=>{
      modalControler.showModal()

      modalCriarPost()

      closeModal()

      handleNewPost()
    })
}


function closeModal(){
    const button = document.querySelector('.closeModal')
    const modalControler = document.querySelector('.controler_modal')
    button.addEventListener('click', ()=>{
        modalControler.close()

    })
}

function handleNewPost(){
    const inputs = document.querySelectorAll('.add_newpost')
    const button = document.querySelector('.publicarPost')
    const modalControler = document.querySelector('.controler_modal')
    const newPost = {}
    let count = 0

    button.addEventListener('click',async(event)=>{
        event.preventDefault()

        inputs.forEach(({name,value})=>{
            if(value == ''){
                count++
            }

            newPost[name] = value
        })
        console.log(newPost)
        if(count!= 0){
            return alert('Por favor preecha os campos necessários')
        }else{
            await creatPosts(newPost)
            modalControler.close()

            renderDashboard()

        }
    })
}


function showEditarPost(){
    const editarButtons = document.querySelectorAll('.button_editar')
    const modalControler = document.querySelector('.controler_modal')
    console.log(editarButtons)

    editarButtons.forEach(button=>{
        button.addEventListener('click',()=>{
        console.log(button.dataset.postid)
        modalControler.showModal()
        modalEditarPost()
        closeModal()
        hendleAtualPost(button.dataset.postid)

    })
  })
}


function hendleAtualPost(idEditar){
    const inputs = document.querySelectorAll('.editar_post')
    const button = document.querySelector('.salvar_alteracoes')
    const modalControler = document.querySelector('.controler_modal')
    const atualizarPost = {}
    let count = 0
    
    button.addEventListener('click',async(event)=>{
        event.preventDefault()

        inputs.forEach(({name,value})=>{
            if(value == ''){
                count++
            }

            atualizarPost[name] = value
        })
        
        console.log(atualizarPost)

        if(count!= 0){
            return alert('Por favor preecha os campos necessários')
        }else{
            await alterarPosts(idEditar,atualizarPost)
            modalControler.close()

            renderDashboard()
        }

    })
}



function showExcluirPost(){
    const excluirButtons = document.querySelectorAll('.button_excluir')
    const modalControler = document.querySelector('.controler_modal')
    console.log(excluirButtons)

    excluirButtons.forEach(button=>{
        button.addEventListener('click',()=>{
        console.log(button.dataset.postid)
        modalControler.showModal()
        modalExcluirPost()
        closeModal()
        hendleExcluirPost(button.dataset.postid)

    })
  })
}



function hendleExcluirPost(idExcluir){
    
    const button = document.querySelector('.excluir_bnt')
    const modalControler = document.querySelector('.controler_modal')

    button.addEventListener('click',async(event)=>{
        event.preventDefault()
        await deletePost(idExcluir)
            modalControler.close()

            renderDashboard()

})
}


function showModalAcessar(){
const modalControler = document.querySelector('.controler_modal')
const acessarPubicacao = document.querySelectorAll('.acessar_post')

acessarPubicacao.forEach(bnt=>{
    
    bnt.addEventListener('click',()=>{
        
        renderModalAcessar(bnt.dataset.postid)
        modalControler.showModal()
        closeModal()

    })
})


}

function renderModalAcessar(id){
    const posts = JSON.parse(localStorage.getItem('@petinfo:Allposts'))
    posts.forEach(post=>{
        
    if(post.id == id){

      
    createModalAcessarPost(post)
            

    }
    })
}



