const baseUrl = 'http://localhost:3333'
const id = JSON.parse(localStorage.getItem('@petinfo:idPost'))
const token = JSON.parse(localStorage.getItem('@petinfo:token'))
const requestHeaders = {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
}


export async function loginRequest(loginBody){
    const token = await fetch(`${baseUrl}/login`,{
        method:'POST',
        headers:requestHeaders,
        body: JSON.stringify(loginBody)
    })
    .then((response)=>{
       if(response.ok){

        const responseJson = response.json().then(({token})=>{
            localStorage.setItem('@petinfo:token', JSON.stringify(token))
            window.location.replace('../src/pages/dashboard.html')

            return token
        })

        return responseJson
       }else{
    
        
        response.json().then(resError =>{
            alert(`${resError.message}`)
        })

       } 
    })

    return token
}




export async function registerRequest(registerBody){
    const newUser = await fetch(`${baseUrl}/users/create`,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(registerBody)
    })
    .then(response =>{
        if(response.ok){

            const responseJson = response.json().then(({id})=>{

                localStorage.setItem('@petinfo:id', JSON.stringify(id))

            })


        }else{
            response.json().then(resError => console.log(resError))
        }
    })

    return newUser
}




export async function userProfile(){
    const perfil = await fetch(`${baseUrl}/users/profile`,{
       method:'GET',
       headers: requestHeaders,

    }).then(response =>{
        if(response.ok){
            
            return response.json()

        }else{

            response.json().then((resp)=>{
                alert(`${resp.message}`)
            })

        }
    })

return perfil
}




export async function creatPosts(postBody){
    const newPost = await fetch(`${baseUrl}/posts/create`, {
    method:'POST',
    headers: requestHeaders,
    body: JSON.stringify(postBody)
    })
    .then((response)=>{
        if (response.ok){
            const postJson = response.json().then(resJson =>{
                alert('Post cadastrado com sucesso')
                
                localStorage.setItem('@petinfo:idPost', JSON.stringify(resJson.id))

                console.log(resJson.id)
                return postJson
            })
            return postJson
        }else{
            response.json().then((resp)=>{
                console.log(`${resp.message}`)
            })
        }
    })

return newPost
}




export async function readAllPosts(){
    const posts = await fetch(`${baseUrl}/posts`,{
        method:'GET',
        headers: requestHeaders
    }).then(response =>{
        if(response.ok){
            return response.json()
        }else{
           response.json().then((resp)=>{
            alert(`${resp.message}`)
           })
        }
    })
    return posts
}



export async function alterarPosts(postid, postbody){
    const post = await fetch(`${baseUrl}/posts/${postid}`,{
    method: 'PATCH',
    headers: requestHeaders,
    body: JSON.stringify(postbody)
    })
    .then(response => {
        if(response.ok){
          alert('Post atualizado com sucesso')

          return response.json()
        }else{
            response.json().then(({message})=>{
                alert(message)
            })
        }
    })

    return post
}


export async function deletePost(postid){
    const post = await fetch(`${baseUrl}/posts/${postid}`,{
        method: 'DELETE',
        headers: requestHeaders
    })
    .then(response =>{
        if(response.ok){
            alert('Post deletada com sucesso')

        return response.ok
        }else{
            response.json().then(({message})=>{
                alert(message)
            })
        }
    })

    return post
}



