function updateDisplay(newValue)
{
    var d = document.getElementById('output');
    if(newValue.length < 1) //newValue is 0 characters, meaning a clear
    {
    d.innerHTML = '';
    operatorOnTheBoard=false;
    }
    else //newValue is a character, so append it
    d.innerHTML+=newValue;
}//updateDisplay

var operatorOnTheBoard = false;
function displayOperator(op)
{
    if (operatorOnTheBoard==true || document.getElementById('output').innerHTML=='')
        { //an operator is already on the display
            //so do nothing
        }
    else //no operator is currently on the display
    {
        if (op === '+')
            updateDisplay('+');
        else if (op === '-')
            updateDisplay('-');
        else if (op === '/')
            updateDisplay('/');
        else if (op === '*')
            updateDisplay('*');

        operatorOnTheBoard=true;
    }//outer else
}//displayOperator

function equals()
{
    operatorOnTheBoard=false;
    //arithmetic
    updateDisplay('');
}//equals