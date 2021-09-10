function login(element){
    if (element.innerText== "Login"){
        element.innerText = "Logout";
    } 
    
    else{
        element.innerText = "Login";

    }
    

}

function remove(element){

    element.remove();

}

function like(element){
    alert("Ninja was liked");
    let content;
    let number;
    content=element.innerText;
    words= content.split(" ");
    // alert('Ninja was liked');
    number = parseInt(words[0]) + 1;
    element.innerText = number + " "  + words[1];

}

