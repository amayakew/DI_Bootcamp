// Exercise1

function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// 1.1 funcOne() ---> alert message with a = 3 as we change the same a variable inside the func scope;  
// 1.2 - error will raised, as it's impossible to change const variable.

//#2
let b = 0;
function funcTwo() {
    b = 5;
}
function funcThree() {
    alert(`inside the funcThree function ${b}`);
}

//2.1 
    //funcThree() ---> alert message with 0, as 'b=5' is not visible within funcThree;
    //funcTwo() ---> change the value of global 'b' variable;
    //funcThree() ---> as 'b' was changed, we'll see alert message with 5;
//2.2 error as it's impossible to change const variable.


//#3
function funcFour() {
    window.a = "hello";
}
function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

    //funcFour() ---> declare a as global variable;
    //funcFive() ---> alert message with 'hello' instead of ${a}, as a global and can be seen from the second func.


//#4
let c = 1;
function funcSix() {
    let c = "test";
    alert(`inside the funcSix function ${c}`);
}

//4.1
    //funcSix() ---> alert message with c = 'test' as 'c' inside the function equals to 'test';
//4.2 alert will be with 'test', as local 'c' will be used instead of global 'c'.


//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

//5.1 the fisrt alert will show 5 as 'a' inside if block it's a new variable visible only in this block scope;
    //the second alert will show 2 as 'a=2' - global, while 'a=5' isn't seen from the outside;
//5.2 same as in the previous