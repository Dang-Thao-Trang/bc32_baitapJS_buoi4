function countNumber(){
    //input
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;

    var odd = 0;
    var event = 0;
    odd = ((number1 % 2) +(number2 % 2)  + (number3 % 2));
    event = 3 - odd;
    var write = odd + " số lẻ và " + event + " số chẵn."

    document.getElementById('count').innerHTML = write;



    // var count = 0;
    // if(number1 % 2 === 0 ){
    //     var ev = ++count ;
    //     console.log(ev)
    // }
    // else if(number1 % 2 === 0 ){
    //     var ev = ++count ;
    //     console.log(ev)
    // }
    // if(number1 % 2 === 0 ){
    //     var ev = ++count ;
    //     console.log(ev)
    // }
}