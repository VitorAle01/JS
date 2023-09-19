
// criar um app frases motivacionais

function createPhrases () {
   console.log('eu sou o melhor') 
   console.log('tudo depende de si mesmo')
   console.log( 'nunca pare de estudar')
}

cheatePhrases ()

console.log('Fim do programa')





//function expression
//fuction anonymous

//paramêtros(parameters)
const sum = function(number1, number2){
   total = number1 + number2
   return total
}

let number1 = 35
let number2 = 25


console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)




//fuctions hoisting

sayMyName ()

function sayMyName (){
   console.log('Vitor')
}


//arrow function



const sayMyName = (name) =>{
   console.log(name)
}

sayMyName('Vitor')



//callback function

const sayMyName = (name) {
   console.log('antes de executar a função callback')

   name()

   console.log('depois de executar a callback')
}

   sayMyName(
   () =>{
      console.log('estou em uma callback')
   }
   )





/* Function()  constructor

 * Expressão new
 * Criar um novo objeto
 * This keyword 
 


*/

function Person(name) {
	this.name = name
	this.walk = function() {
		return this.name + "está andando"
	}
}
const vitor = new Person("Vitor")
const joao = new Person("Joao")

console.log(vitor.walk())
console.log(joao.walk())






