console.log('Bem vindo')

// 1. Declare uma variável de nome Weigth
let weigth;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weigth)


/* 3. Declare uma variável e atribua valores para cada um dos dados:  

* name = String
* age = Number (integer)
* stars = (float)
* isSubscribed = Boolean

*/

let name = "Vitor"
let age = 21
let stars = 4.8
let isSubscribed = true

/* 
 4. A variável student abaixo é de que tipo de dados?

 4.1 Atribua a ela as mesmas propiedades e valores do exercício 3.

 4.2 Mostre no console a seguinte mensagem:
    
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propiedade do objeto.

    */
   

    let student = {
    name: "Vitor",
    age: 21,
    weigth: 59,
    isSubscribed: true,}

    console.log(`${student.name} de idade ${student.age} pesa ${student.stars} kg.`)

    /* 5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.
    */

    let students = []


    /* 6.Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
    */

    students = [
        student
    ]




    /*
     7. Coloque no console o valor da posição zero do array acima
     */

     console.log(students[0])





     /* 
     8. Crie um novo student e coloque na posição 1 do array students
     */
     const lucas ={
        name: "Lucas",
        age: 22,
        weigth: 70,
        isSubscribed: true,

     }
    student =[
        student,
        Lucas
    ]

     /* Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou. 

     console.log(a)
     var a =1
     */

     var a

     console.log(a)
     a =1





