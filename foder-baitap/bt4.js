function triangleWhat(){
    //input
    var cA = +document.getElementById('canhA').value;
    var cB = +document.getElementById('canhB').value;
    var cC = +document.getElementById('canhC').value;
    //process
    if(cA === cB && cA === cC){
        console.log("Tam giac deu");
        var triangleWhat = "Tam giác đều"
    }
    else if((cA === cB) || (cA  ===  cC) || (cB === cC)){
        console.log("Tam giac can")
        triangleWhat = "Tam giác cân"
    }
        // else if((Math.pow(cA, 2)=Math.pow(cB, 2)+Math.pow(cC,2)) || (Math.pow(cB,2)=Math.pow(cA,2)+Math.pow(cC,2)) || (Math.pow(cC,2)=Math.pow(cB,2)+Math.pow(cA,2))) {
    //     console.log("Tam giac Vuong")
    // }
    else if((cA*cA === cB*cB + cC*cC) || (cB*cB === cA*cA + cC*cC) || (cC*cC === cA*cA + cB*cB)){
        console.log("tam giac vuong")
        triangleWhat = "Tam giác vuông"
    }
    else{
        console.log("tam giac thuong")
        triangleWhat = "Tam giác thường"
    }
    //output
    document.getElementById('triangle').innerHTML = triangleWhat;
}