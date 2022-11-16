let allBtns = Array.from(document.querySelectorAll('.btn'));
let multiplyBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");
let subtractBtn = document.querySelector(".subtract");
let addBtn = document.querySelector(".add");
let equalBtn = document.querySelector(".equal");
let clearBtn = document.querySelector(".clear");
let input = document.querySelector(".input");

allBtns.forEach((value, index, array) => {
    value.addEventListener('click', (element) => {
        let val = input.value;

        let Symb;
        if (index > 3 & index < array.length - 2) {
            let number = element.target.innerText;

            if (val.length == 1 && val[0] == '*' || val[0] == '/' || val[0] == '-' || val[0] == '+') {
                input.value = number;

            }

            else if (val.length == 1 && val[0] == 0) {
                input.value = number;

            }
            else if (val.length > 1 && val[val.length - 1] == '*' || val[val.length - 1] == '/' || val[val.length - 1] == '-' || val[val.length - 1] == '+'){
                
                input.value += number;

            }
            else {
                input.value += number;

            }

            console.log()

        }

        else {
            if (index==15) {
                console.log( val.split('*',6));
                let answer=eval(input.value)
                input.value=answer
            }
            else if(index==16){
                input.value = 0;

            }
            else if (val[val.length - 1] == '*' || val[val.length - 1] == '/' || val[val.length - 1] == '-' || val[val.length - 1] == '+') {
                console.log(val)
                let cut = val.slice(0, val.length - 1) + element.target.innerText;
                input.value = cut
                if (index == 0) {


                }


                console.log("eithout */=-")
            }



            else {
                input.value += element.target.innerText;
                Symb = element.target.innerText;
                console.log("with")

            }

        }













    })
})





















//  else if (index == 1) {


//     console.log(element.target.innerText)
//     sybmol = element.target.innerText;
//     input.value += sybmol

// } else if (index == 2) {

//     console.log(element.target.innerText)
//     sybmol = element.target.innerText;
//     input.value += sybmol

// } else if (index == 3) {

//     console.log(element.target.innerText)
//     sybmol = element.target.innerText;
//     input.value += sybmol

// }
// else if (index == 15) {

//     // if (input.value) {

//     // }
//     // console.log(element.target.innerText)
//     let sybmol = element.target.innerText;
//     // input.value = 0;

// }
// else if (index == 16) {

//     let sybmol = element.target.innerText;
//     input.value = 0;

// }