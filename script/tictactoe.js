var gameFinished = false;
var numSpotsLeft = 9;
var playedLast = 'O';



function placeMarker(spotID)
{
    if (!gameFinished)
    {
     var spot = document.getElementById(spotID);
     //if spot empty, place marker, else (or if game ended), do nothing.
     if (spot.innerHTML=='' && playedLast=='O')
     {
         spot.innerHTML='X';
         playedLast='X';
            numSpotsLeft--;
            document.getElementById("banner").innerHTML=('Player O\'s turn');
            checkVictory();
     }//if
     else if (spot.innerHTML=='' && playedLast=='X')
      {
           spot.innerHTML='O';
           playedLast='O';
            numSpotsLeft--;
            document.getElementById("banner").innerHTML=('Player X\'s turn');
            checkVictory();
        }//else if
    }//outer if
}//placeMarker

function checkVictory ()
{
    //a big honkin if statement to check all 8 victory possibilities (3 col, 3 row, 2 diag)
    //then an else that checks for ties.
    var spot1 = document.getElementById("one").innerHTML;
    var spot2 = document.getElementById("two").innerHTML;
    var spot3 = document.getElementById("three").innerHTML;
    var spot4 = document.getElementById("four").innerHTML;
    var spot5 = document.getElementById("five").innerHTML;
    var spot6 = document.getElementById("six").innerHTML;
    var spot7 = document.getElementById("seven").innerHTML;
    var spot8 = document.getElementById("eight").innerHTML;
    var spot9 = document.getElementById("nine").innerHTML;
    /*
    //i dont know why but this doesnt work
    if (spot1 === spot2 && spot1 === spot3)
        victory();
    else if (spot4 === spot5 && spot4 === spot6)
        victory();
    else if (spot7 === spot8 && spot7 === spot9)
        victory();
    else if (spot1 === spot5 && spot1 === spot9)
        victory();
    else if (spot3 === spot5 && spot3 === spot7)
        victory();
    else if (spot1 === spot4 && spot1 === spot7)
        victory();
    else if (spot2 === spot5 && spot2 === spot8)
        victory();
    else if (spot3 === spot6 && spot3 === spot9)
        victory();
    else if (numSpotsLeft<=0)
    {
        //tie
        document.getElementById("banner").innerHTML=('Bummer, it\'s a tie!');
        gameFinished = true;
    }
    else
    {
        //no victory, but no tie. play continues
        gameFinished = false;
    }//else
    */
    if (spot1 == 'X' && spot2 == 'X' && spot3 == 'X')
     victory();
    else if (spot4 == 'X' && spot5 == 'X' && spot6 == 'X')
     victory();
    else if (spot7 == 'X' && spot8 == 'X' && spot9 == 'X')
        victory();
    else if (spot1 == 'X' && spot5 == 'X' && spot9 == 'X')
        victory();
    else if (spot3 == 'X' && spot5 == 'X' && spot7 == 'X')
       victory();
    else if (spot1 == 'X' && spot4 == 'X' && spot7 == 'X')
       victory();
    else if (spot2 == 'X' && spot5 == 'X' && spot8 == 'X')
       victory();
    else if (spot3 == 'X' && spot6 == 'X' && spot9 == 'X')
       victory();
    else if (spot1 == 'O' && spot2 == 'O' && spot3 == 'O')
       victory();
    else if (spot4 == 'O' && spot5 == 'O' && spot6 == 'O')
       victory();
    else if (spot7 == 'O' && spot8 == 'O' && spot9 == 'O')
          victory();
    else if (spot1 == 'O' && spot5 == 'O' && spot9 == 'O')
          victory();
    else if (spot3 == 'O' && spot5 == 'O' && spot7 == 'O')
         victory();
    else if (spot1 == 'O' && spot4 == 'O' && spot7 == 'O')
         victory();
    else if (spot2 == 'O' && spot5 == 'O' && spot8 == 'O')
         victory();
    else if (spot3 == 'O' && spot6 == 'O' && spot9 == 'O')
         victory();
    else if (numSpotsLeft<=0)
    {
        //tie
        document.getElementById("banner").innerHTML=('Bummer, it\'s a tie!');
       gameFinished = true;
    }
    else
    {
       //no victory, but no tie. play continues
      gameFinished = false;
    }//else



    
}//checkVictory

function victory ()
{
    //victory for whoever played last
    document.getElementById("banner").innerHTML=('Player '+ playedLast +' wins!');
    gameFinished = true;
}//victory
