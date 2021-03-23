
var operatorOnTheBoard=''; //var used to track what operator is on the display

//for writing or clearing the display
function updateDisplay(newValue)
{
    var d = document.getElementById('output');
    if(newValue.length < 1) //newValue is 0 characters, meaning a clear
    {
    d.innerHTML = '';
    operatorOnTheBoard='';
    }
    else //newValue is a character, so append it
    d.innerHTML+=newValue;
}//updateDisplay

//for displaying operators
function displayOperator(op)
{
    if (operatorOnTheBoard!=='' || document.getElementById('output').innerHTML=='')
        { //an operator is already on the display
            //so do nothing
        }
    else //no operator is currently on the display
    {
        if (op === '+')
        {
            updateDisplay('+');
            operatorOnTheBoard='+';
        }
        else if (op === '-')
        {
            updateDisplay('-');
            operatorOnTheBoard='-';
        }
        else if (op === '/')
        {
            updateDisplay('/');
            operatorOnTheBoard='/';
        }
        else if (op === '*')
        {
            updateDisplay('*');
            operatorOnTheBoard='*';
        }
        else
        {
            //this should be impossible
            updateDisplay("faulty operator");
        }


    }//outer else
}//displayOperator

//function to handle arithmetic when equals key is pressed
function equals()
{
  //if operator is blank, it means they have not entered an expression
   if (operatorOnTheBoard!=='')
    {
        //find out which operator we're working with and do the appropriate math
        if(operatorOnTheBoard=='+')
        {
            var h = document.getElementById('output');
            var outArray = h.innerHTML.split("+");
            var arg1 = parseInt(outArray[0]);
            var arg2 = parseInt(outArray[1]);
            var solution = arg1+arg2;
            updateDisplay('');
            updateDisplay(solution);
        }
        else if (operatorOnTheBoard=='-')
        {
            var h = document.getElementById('output');
            var outArray = h.innerHTML.split("-");
            var arg1 = parseInt(outArray[0]);
            var arg2 = parseInt(outArray[1]);
            var solution = arg1-arg2;
            updateDisplay('');
            updateDisplay(solution);
        }
        else if (operatorOnTheBoard=='/')
        {
            var h = document.getElementById('output');
            var outArray = h.innerHTML.split("/");
            var arg1 = parseInt(outArray[0]);
            var arg2 = parseInt(outArray[1]);
            var solution = arg1/arg2;
            updateDisplay('');
            updateDisplay(solution);
        }
        else if (operatorOnTheBoard=='*')
        {
            var h = document.getElementById('output');
            var outArray = h.innerHTML.split("*");
            var arg1 = parseInt(outArray[0]);
            var arg2 = parseInt(outArray[1]);
            var solution = arg1*arg2;
            updateDisplay('');
            updateDisplay(solution);
        }
        else
        {
            //this should also be impossible
            updateDisplay("faulty operator");
        }



        operatorOnTheBoard='';
    }
    else
    {
        //no expression entered, so do nothing
    } 

}//equals