// let b = 58,
// a = 25
// console.log(a+b)

// let age = 22;
// if(age>=18 && age<60){
//     console.log("WELCOME BABE")
// }
// else{
//     console.log("SRRY((((")
// }

// let a=10,
// b=20,
// c=15,
// max=0;
// if(a>=b && a>=c){
// max=a;
// }
// else if( b>=a && b>=c){
//     max=b;
// }
// else if(c>=a && c>=b){
//     max=c;
// }
// console.log(max)

let a=prompt("Введите ваше имя")
if(a.length<=3){
    alert("Имя должно быть длиннее 3 символов")
    a=prompt("Введите ваше имя")
}
if(a.length>3){
    alert("Имя принятo");
    console.log(a)
}

let b=prompt("Введите ваш возраст")
if(b<=14 && b>60){
    b=prompt("Вы доллжны быть старше 14, попробуйте еще раз")
    if(b>14){
        alert("Возраст принят");
        console.log(b)
    }
}
else{
    b=prompt("Неверные данные, повторите ввод")
    if(b>14 && b<=60){
        alert("Возраст принят");
        console.log(b)
    }
    else{
        alert("Неверные данные")
    }
}


let c=prompt("Являетесь ли вы нашим студентом?")
if(c=="Да" || c=="да"){
    alert("Отлично, вы можете посетить наш сайт")
}
else if(c=="Нет" || c=="нет"){
    c=prompt("Вы не можете посетить наш сайт, повторите вход")
    if(c=="Да" || c=="да"){
        alert("Отлично, вы можете посетить наш сайт")
    }
}
else{
    c=prompt("Неверные данные, повторите ввод")
    if(c=="Да" || c=="да"){
        alert("Отлично, вы можете посетить наш сайт")
    }  
}