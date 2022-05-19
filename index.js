var num1 = 0;
var num2 = 0;
var op;
var isGettingNum1 = true;
var isGettingNum2 = false;
var res = 0;
var todo;

$(".butOne").click(function(Event){
    if(isGettingNum1){
        num1 = (num1*10) + 1;
        $("h3").text(num1);
    }
    else if(isGettingNum2){
        num2 = (num2*10) + 1;
        $("h3").text(num1 + " " + op + " " + num2);
    }
})
$(".butTwo").click(function(Event){
    if(isGettingNum1){
        num1 = (num1*10) + 2;
        $("h3").text(num1);
    }
    else if(isGettingNum2){
        num2 = (num2*10) + 2;
        $("h3").text(num1 + " " + op + " " + num2);
    }
})
$(".butThree").click(function(Event){
    if(isGettingNum1){
        num1 = (num1*10) + 3;
        $("h3").text(num1);
    }
    else if(isGettingNum2){
        num2 = (num2*10) + 3;
        $("h3").text(num1 + " " + op + " " + num2);
    }
})
$(".butFour").click(function(Event){
    if(isGettingNum1){
        num1 = (num1*10) + 4;
        $("h3").text(num1);
    }
    else if(isGettingNum2){
        num2 = (num2*10) + 4;
        $("h3").text(num1 + " " + op + " " + num2);
    }
})
$(".butFive").click(function(Event){
    if(isGettingNum1){
        num1 = (num1*10) + 5;
        $("h3").text(num1);
    }
    else if(isGettingNum2){
        num2 = (num2*10) + 5;
        $("h3").text(num1 + " " + op + " " + num2);
    }
})
$(".butSix").click(function(Event){
    if(isGettingNum1){
        num1 = (num1*10) + 6;
        $("h3").text(num1);
    }
    else if(isGettingNum2){
        num2 = (num2*10) + 6;
        $("h3").text(num1 + " " + op + " " + num2);
    }
})
$(".butSeven").click(function(Event){
    if(isGettingNum1){
        num1 = (num1*10) + 7;
        $("h3").text(num1);
    }
    else if(isGettingNum2){
        num2 = (num2*10) + 7;
        $("h3").text(num1 + " " + op + " " + num2);
    }
})
$(".butEight").click(function(Event){
    if(isGettingNum1){
        num1 = (num1*10) + 8;
        $("h3").text(num1);
    }
    else if(isGettingNum2){
        num2 = (num2*10) + 8;
        $("h3").text(num1 + " " + op + " " + num2);
    }
})
$(".butNine").click(function(Event){
    if(isGettingNum1){
        num1 = (num1*10) + 9;
        $("h3").text(num1);
    }
    else if(isGettingNum2){
        num2 = (num2*10) + 9;
        $("h3").text(num1 + " " + op + " " + num2);
    }
})
$(".butZero").click(function(Event){
    if(isGettingNum1){
        num1 = (num1*10);
        $("h3").text(num1);
    }
    else if(isGettingNum2){
        num2 = (num2*10);
        $("h3").text(num1 + " " + op + " " + num2);
    }
})

$(document).keydown(function(Event){
    todo=Event.which;
    todo-=96;
    if(todo>=0 && todo <=9){
        if(isGettingNum1){
            num1 = (num1*10) + todo;
            $("h3").text(num1);
        }
        else if(isGettingNum2){
            num2 = (num2*10) + todo;
            $("h3").text(num1 + " " + op + " " + num2);
        }
    }
    else if(todo===11){
        if(isGettingNum1){
            op = '+';
            isGettingNum1 = false;
            isGettingNum2 = true;
            $("h3").text(num1 + " " + op);
            }
            else if(isGettingNum2){
                Result(num1, num2, op);
                num1=res;
                op = '+';
                $("h3").text(res + " " + op);
                num2 = 0;
            }
    }
    else if(todo===13){
        if(isGettingNum1){
            op = '-';
            isGettingNum1 = false;
            isGettingNum2 = true;
            $("h3").text(num1 + " " + op);
            }
            else if(isGettingNum2){
                Result(num1, num2, op);
                num1=res;
                op = '-';
                $("h3").text(res + " " + op);
                num2 = 0;
            }
    }
    else if(todo===10){
        if(isGettingNum1){
            op = '*';
            isGettingNum1 = false;
            isGettingNum2 = true;
            $("h3").text(num1 + " " + op);
            }
            else if(isGettingNum2){
                Result(num1, num2, op);
                num1=res;
                op = '*';
                $("h3").text(res + " " + op);
                num2 = 0;
            }    
    }
    else if(todo===15){
        if(isGettingNum1){
            op = '/';
            isGettingNum1 = false;
            isGettingNum2 = true;
            $("h3").text(num1 + " " + op);
            }
            else if(isGettingNum2){
                Result(num1, num2, op);
                num1=res;
                op = '/';
                $("h3").text(res + " " + op);
                num2 = 0;
            }
    }
    else if(todo===-83){
        Result(num1, num2, op);    
    }

})

$(".butEqual").click(function(Event){
    Result(num1, num2, op);
})

$(".butPlus").click(function(Event){
    if(isGettingNum1){
    op = '+';
    isGettingNum1 = false;
    isGettingNum2 = true;
    $("h3").text(num1 + " " + op);
    }
    else if(isGettingNum2){
        Result(num1, num2, op);
        num1=res;
        op = '+';
        $("h3").text(res + " " + op);
        num2 = 0;
    }
})
$(".butMinus").click(function(Event){
    if(isGettingNum1){
    op = '-';
    isGettingNum1 = false;
    isGettingNum2 = true;
    $("h3").text(num1 + " " + op);
    }
    else if(isGettingNum2){
        Result(num1, num2, op);
        num1=res;
        op = '-';
        $("h3").text(res + " " + op);
        num2 = 0;
    }
})
$(".butMultiply").click(function(Event){
    if(isGettingNum1){
    op = '*';
    isGettingNum1 = false;
    isGettingNum2 = true;
    $("h3").text(num1 + " " + op);
    }
    else if(isGettingNum2){
        Result(num1, num2, op);
        num1=res;
        op = '*';
        $("h3").text(res + " " + op);
        num2 = 0;
    }
})
$(".butDivide").click(function(Event){
    if(isGettingNum1){
    op = '/';
    isGettingNum1 = false;
    isGettingNum2 = true;
    $("h3").text(num1 + " " + op);
    }
    else if(isGettingNum2){
        Result(num1, num2, op);
        num1=res;
        op = '/';
        $("h3").text(res + " " + op);
        num2 = 0;
    }
})
$(".butClear").click(function(Event){
    num1=0;
    num2=0;
    isGettingNum1=true;
    isGettingNum2=false;
    op = null;
    $("h3").text("Enter Equation");
    $("p").text("00.0");
})


function Result (num1, num2, op){
if(op==='+'){
    res = num1+num2;
    $("p").text(res);
}
else if(op==='-'){
    res = num1-num2;
    $("p").text(res);
}
else if(op==='*'){
    res = num1*num2;
    $("p").text(res);
}
else if(op==='/'){
    res = num1/num2;
    $("p").text(res);
}
}
