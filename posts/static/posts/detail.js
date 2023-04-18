const backBtn = document.getElementById('back-btn')
const postBox = document.getElementById('post-box')
backBtn.addEventListener('click', () => {
    history.back()
})
const url = window.location.href + "data/"
const updateUrl = window.location.href + "update/"
const deleteUrl = window.location.href + "delete/"
const updateForm = document.getElementById('update-form')
const deleteForm = document.getElementById('delete-form')

const spinnerBox = document.getElementById('spinner-box')
const updateBtn = document.getElementById('update-btn')
const deleteBtn = document.getElementById('delete-btn')
const titleInput = document.getElementById('id_title')
const bodyInput = document.getElementById('id_body')

$.ajax({
    type: 'GET',
    url: url,
   
    success: function(response){
        console.log('success',response)   
        const data = response.data
        if(data.logged_in !== data.author){}
        else{
            updateBtn.classList.remove('not-visible')
            deleteBtn.classList.remove('not-visible')

        }
        const titleEl = document.createElement('h3')
        titleEl.setAttribute('class', 'mt-3')
        titleEl.setAttribute('id', 'title')


        const bodyEl = document.createElement('p')
        bodyEl.setAttribute('class', 'mt-1')
        bodyEl.setAttribute('id', 'body')


        spinnerBox.classList.add('not-visible')  
        titleEl.textContent = data.title
        bodyEl.textContent = data.body
        titleInput.value = data.title
        bodyInput.value =data.body
        postBox.appendChild(titleEl)
        postBox.appendChild(bodyEl)

    },
    error: function(error){
        console.log('error', error)
    }
})
updateForm.addEventListener('submit', e=>{
    e.preventDefault()
    const title = document.getElementyId ('title')
    const body = document. getElementById ('body')
    $.ajax({
        type: 'POST',
        url: updateUrl,
        data: {
        'csrfmiddlewaretoken': csrf[0].value,
        'title': titleInput. value,
        'body': bodyInput. value,
        },
        sucess: function (response) {
        console. log (response)
        handleAlerts(' success','post has been updated')
        title.textContent = response.title
        body.textContent = response. body
        },
        error: function (error){
        console. log(error)
        }
    })
      
})

deleteForm. addEventListener('submit', e=>{
    e-preventDefault ()
    94
    95
    96
    97
    98
    $.ajax({
    type: "POST",
    url: deleteUrl,
    data: {
    'csrfmiddlewaretoken': csrf [0]. value,
    },
    
    success: function (response){
        window.location.href = window.location.origin
        localStorage.setItem('title', titleInput.value)
    },
    error: function (error) {
    console. log (error)
    }
})
})