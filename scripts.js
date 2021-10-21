window.onload = function (){
    let subscribeButton = document.querySelector('button');
    let message = document.querySelector(".message");
    let email = document.querySelector  ('input')
subscribeButton.onclick = () =>{
    if (email.value == ""){
        message.innerHTML = " Please enter a valid email address"
        return false
    }else{
        message.innerHTML = " Thank you! Your email address " +email.value+ " has been added to our mailing list!"
        return false
    
    }   
}
}
