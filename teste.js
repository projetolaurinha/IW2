
//alert("eu acho que vi um gatinho!")


/*  var nome = prompt("digite seu nome:") 
 console.log(nome)
 document.write(nome)
 */

 //variaveis

/* 
 let  a = 10
 console.log(a)

if(true){
    let a = 15
    console.log(a)
}

 console.log(a) */



 /* var nome= prompt("digite seu nome:")
alert("bom dia  " + nome  )
//template string = interpolação 

alert(` bom dia ${nome}`)
 */


var n1 =  parseInt(prompt("digite n1:"))
var n2 =  parseInt(prompt("digite n2:"))
console.log("n1 é : " + typeof n1)
console.log("n2 é : " + typeof n2)

var soma = n1+n2
console.log("Somo é : " + typeof soma)


if(soma>10){
    document.write(`<p class="maior"> a soma de ${n1} com ${n2} e ${soma}</p>`)
}
else{
    document.write(`<p class="menor"> a soma de ${n1} com ${n2} e ${soma}</p>`)
}


 