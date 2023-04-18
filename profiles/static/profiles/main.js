const avatarBox = document .getElementById ('avatar-box')
const alertBox = document. getElementById('alert-box')
const profileForm = document. getElementById ('profile-form')
const csrf = document. getElementsByName ( 'crfmiddlewaretoken')

const bioInput = document.getElementById('id_avatar')
const avatarInput = document.getElementById ('id_avatar')


profileform.addEventListener('submit',e=>{
    e-preventDefault ()

    const formData = new FormData()
    formData. append ( 'csrfmiddlewaretoken', csrf[0] . value) 
    formData. append ('bio', bioInput. value) 
    formData. append ('avatar', avatarInput. files [0])

    $.ajax({
        type: 'POST',
        url: '',
        enctype: 'multipart/form-data',
        data: formData,
        success: function (response) {
            console. log (response)
        },
        
        error: function (error){
        console. log (error)
        }, 
        processData: false, 
        contentType: false, 
        cache: false,
    })
})
