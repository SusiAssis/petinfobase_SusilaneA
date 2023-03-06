export async function render(array,user){
    const lista = document.querySelector('.lista_posts')

    lista.innerHTML = ''
    
    array.forEach(post => {
        const card = createCard(post,user)
        lista.appendChild(card)
    });

}

function createCard(post,user){
    const li = document.createElement('li')
    const contanier_Perfil = document.createElement('div')
    const perfil = document.createElement('div')
    const img_Perfil = document.createElement('img')
    const name_Perfil = document.createElement('h3')
    const data = document.createElement('p')
    const contanier_buttons = document.createElement('div')
    
    
    const contanier_conteudo = document.createElement('div')
    const title = document.createElement('h3')
    const descricao = document.createElement('p')
    const acessar_Post = document.createElement('p')

    contanier_Perfil.classList.add('contanier_Perfil_Post')
    
    perfil.classList.add('perfil')
    img_Perfil.alt = "Foto de perfil"
    img_Perfil.src = post.user.avatar

    name_Perfil.innerText = post.user.username
    data.innerText = new Date(post.createdAt).toLocaleDateString()

    contanier_buttons.classList.add('contanier_buttons')

    if(post.user.email == user.email){

    const editar_button = document.createElement('button')
    editar_button.innerText = "Editar"
    editar_button.classList.add('button_editar')
    editar_button.dataset.postid = post.id

    const excluir_button = document.createElement('button')
    excluir_button.innerText = "Excluir"
    excluir_button.classList.add("button_excluir")
    excluir_button.dataset.postid = post.id

    contanier_buttons.append(editar_button,excluir_button)
    }
    
    contanier_conteudo.classList.add('contanier_conteudo')
    title.innerText = post.title

    descricao.innerText = `${post.content.substring(0,150)}...`

    acessar_Post.innerText = "Acessar publicação"
    acessar_Post.classList.add('acessar_post')
    acessar_Post.dataset.postid = post.id

    
    perfil.append(img_Perfil,name_Perfil,data)
    //contanier_buttons.append(editar_button,excluir_button)

    contanier_Perfil.append(perfil,contanier_buttons)

    contanier_conteudo.append(title,descricao,acessar_Post)
    
    li.append(contanier_Perfil,contanier_conteudo)

    return li
}


export function renderProfile(user){
    const contanierPerfil = document.querySelector('.contanier_perfil')
    console.log(contanierPerfil)
    contanierPerfil.innerHTML = ''

    const button = document.createElement('button')
    const imgPerfil = document.createElement('img')

    button.innerText = "Criar publicação"
    button.classList.add('button_criar')
    button.id = "buttoncriar"

    imgPerfil.alt = user.username
    imgPerfil.src = user.avatar
    imgPerfil.classList.add('avatar_profile')

    const contanier_logout = document.createElement('div')
    const email_logout = document.createElement('p')
    const sairDaConta = document.createElement('p')
    
    contanier_logout.classList.add('contanier_logout')
    
    email_logout.innerText = user.email
    sairDaConta.innerText = 'Sair da conta'

    contanier_logout.append(email_logout,sairDaConta)
    
    contanierPerfil.append(button,imgPerfil,contanier_logout)
  
}



export function modalCriarPost (){

const lista = document.querySelector('.controler_modal')

lista.innerHTML = ''

const contanier_modal = document.createElement('div')
const contanier_header = document.createElement('div')
const criandoNovoPost = document.createElement('h1')
const buttonCloseModal = document.createElement('button')
const contanier_Formulario = document.createElement('form')
const nomeTitulo = document.createElement('label')
const nomeTituloInput = document.createElement('input')
const nomeconteudo = document.createElement('label')
const nomeconteudoInput = document.createElement('textarea')
const contanier_buttons = document.createElement('div')
const buttonCancelar = document.createElement('button')
const buttonPublicar = document.createElement('button')

contanier_modal.classList.add('contanier_header')
contanier_buttons.classList.add('contanier_buttons_modal')

criandoNovoPost.innerText = "Criando novo post"

buttonCloseModal.innerText = "X"
buttonCloseModal.classList.add('closeModal')

nomeTitulo.innerText = "Título do post"
nomeTituloInput.placeholder = "Digite o título aqui..."
nomeTituloInput.name = "title"
nomeTituloInput.classList.add('add_newpost')
nomeTituloInput.type = "text"

nomeconteudo.innerText = "Conteúdo do post"
nomeconteudoInput.placeholder = "Desenvolva o conteúdo do post aqui..."
nomeconteudoInput.name = "content"
nomeconteudoInput.classList.add('add_newpost')


buttonCancelar.innerText = "Cancelar"
buttonCancelar.classList.add('CancelarPost')
buttonPublicar.innerText = "Publicar"
buttonPublicar.classList.add('publicarPost')

contanier_header.append(criandoNovoPost,buttonCloseModal)

contanier_Formulario.append(nomeTitulo,nomeTituloInput,nomeconteudo,nomeconteudoInput)

contanier_buttons.append(buttonCancelar,buttonPublicar)

contanier_modal.append(contanier_header,contanier_Formulario,contanier_buttons)

lista.appendChild(contanier_modal)

}



export function modalEditarPost(){

const lista = document.querySelector('.controler_modal')

lista.innerHTML = ''

const contanier_modal = document.createElement('div')
const contanier_header = document.createElement('div')
const editandoPost = document.createElement('h1')
const buttonCloseModal = document.createElement('button')
const contanier_Formulario = document.createElement('form')
const nomeTitulo = document.createElement('label')
const nomeTituloInput = document.createElement('input')
const nomeconteudo = document.createElement('label')
const nomeconteudoInput = document.createElement('textarea')
const contanier_buttons = document.createElement('div')
const buttonCancelar = document.createElement('button')
const buttonSalvar = document.createElement('button')

contanier_modal.classList.add('contanier_header')
contanier_buttons.classList.add('contanier_buttons_modal')

editandoPost.innerText = "Edição"

buttonCloseModal.innerText = "X"
buttonCloseModal.classList.add('closeModal')

nomeTitulo.innerText = "Título do post"
nomeTituloInput.placeholder = ""
nomeTituloInput.name = "title"
nomeTituloInput.classList.add('editar_post')
nomeTituloInput.type = "text"

nomeconteudo.innerText = "Conteúdo do post"
nomeconteudoInput.placeholder = ""
nomeconteudoInput.name = "content"
nomeconteudoInput.classList.add('editar_post')


buttonCancelar.innerText = "Cancelar"
buttonCancelar.classList.add('cancelar_alteracoes')
buttonSalvar.innerText = "Salvar Alterações"
buttonSalvar.classList.add('salvar_alteracoes')

contanier_header.append(editandoPost,buttonCloseModal)

contanier_Formulario.append(nomeTitulo,nomeTituloInput,nomeconteudo,nomeconteudoInput)

contanier_buttons.append(buttonCancelar,buttonSalvar)

contanier_modal.append(contanier_header,contanier_Formulario,contanier_buttons)

lista.appendChild(contanier_modal)

}



export function modalExcluirPost(){

const lista = document.querySelector('.controler_modal')

lista.innerHTML = ''

const contanier_modal = document.createElement('div')
const contanier_header = document.createElement('div')
const excluirModalPost = document.createElement('h1')
const buttonCloseModal = document.createElement('button')
const contanier_aviso = document.createElement('div')
const aviso = document.createElement('h2')
const descricao = document.createElement('p')
const contanier_buttons = document.createElement('div')
const buttonCancelar = document.createElement('button')
const buttonSimExcluir = document.createElement('button')


contanier_modal.classList.add('contanier_header')
contanier_buttons.classList.add('contanier_buttons_modal')
contanier_aviso.classList.add('contanier_conteudo_modal')

excluirModalPost.innerText = "Confirmação de exclusão"

buttonCloseModal.innerText = "X"
buttonCloseModal.classList.add('closeModal')

aviso.innerText = "Tem certeza que deseja excluir este post?"
descricao.innerText = "Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir"

buttonCancelar.innerText = "Cancelar"
buttonCancelar.classList.add('cancelar_bnt')

buttonSimExcluir.innerText = "Sim, excluir este post"
buttonSimExcluir.classList.add('excluir_bnt')

contanier_header.append(excluirModalPost,buttonCloseModal)

contanier_aviso.append(aviso,descricao)

contanier_buttons.append(buttonCancelar,buttonSimExcluir)

contanier_modal.append(contanier_header,contanier_aviso,contanier_buttons)

lista.appendChild(contanier_modal)

}



export function createModalAcessarPost(post){

    const lista = document.querySelector('.controler_modal')

    lista.innerHTML = ''

    const contanier_Perfil = document.createElement('div')
    const perfil = document.createElement('div')
    const img_Perfil = document.createElement('img')
    const name_Perfil = document.createElement('h3')
    const data = document.createElement('p')
    const buttonCloseModal = document.createElement('button')
    const contanier_conteudo = document.createElement('div')
    const title = document.createElement('h3')
    const descricao = document.createElement('p')
    
    contanier_Perfil.classList.add('contanier_Perfil_Post_Modal')
    
    perfil.classList.add('perfil')

    img_Perfil.alt = "Foto de perfil"
    img_Perfil.src = post.user.avatar

    name_Perfil.innerText = post.user.username
    data.innerText = new Date(post.createdAt).toLocaleDateString()

    buttonCloseModal.innerText = "X"
    buttonCloseModal.classList.add('closeModal')

    contanier_conteudo.classList.add('contanier_conteudo_modal')

    title.innerText = post.title
    descricao.innerText = post.content 

    perfil.append(img_Perfil,name_Perfil,data,buttonCloseModal)
    contanier_conteudo.append(title,descricao)

    contanier_Perfil.append(perfil,contanier_conteudo)

    lista.appendChild(contanier_Perfil)
}



export const toast = (message, color) => {
    const body = document.querySelector('body')
    const container = document.createElement('div')
    const text = document.createElement('p')
  
    container.classList.add('toast__container', 'toast__add')
    
  
    text.innerText = message
    container.style.color = color
  
    container.appendChild(text)
  
    body.appendChild(container)
  
    setTimeout(() => {
      container.classList.add('toast__remove')
    }, 3000)
  
    setTimeout(() => {
      body.removeChild(container)
    }, 4990);
  }