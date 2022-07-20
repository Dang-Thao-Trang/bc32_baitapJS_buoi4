
document.getElementById('btnName').onclick = function (){
   //input
    var user = document.getElementById('user').value;    
    console.log(user);
    var hello = "";
    // process
    if (user === "bo"){
       hello = "Xin chào Bố!";
    }
    else if(user === "me"){
        hello = "Xin chào Mẹ!";
    }
    else if(user === "anh"){
        hello = "Xin chào anh trai!";
    }
    else if(user === "em"){
        hello = "Xin chào em út!";
    }
    // output
    document.getElementById('name').innerHTML = hello;
}
