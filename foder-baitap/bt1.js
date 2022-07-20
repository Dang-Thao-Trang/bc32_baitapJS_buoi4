function al(){
    // input
    var a = +document.getElementById('interger1').value;
    var b = +document.getElementById('interger2').value;
    var c = +document.getElementById('interger3').value;
    //process
    if (a > b && c < b) {
    console.log(c<b<a);
    var show = c + "<" + b + "<" + a;
    }
    else if(a>c && b<c){
        console.log('b<c<a');
        show = b + "<" + c + "<" + a
    }
    else if(b>c && a<c){
        console.log('a<c<b');
        show = a + "<" + c + "<" + b;
    }
    else if(b>a && c<a){
        console.log('c<a<b');
        show = c + "<" + a + "<" + b;
    }
    else if(c>a && b<a){
        console.log('b<a<c');
        var show = b + "<" + a + "<" + c;
    }else if(c>b && a<b){
        console.log('a<b<c');
        show = a + "<" + b + "<" + c;
    }
    //output
    document.getElementById('resultArrange').innerHTML = show;

}

    
