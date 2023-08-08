var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById('btn').addEventListener('click',function()
{
    var guess=parseInt(document.getElementById('guessInput').value);
    attempts++;
    if(guess===randomNumber)
    {
        displayMessage("Congratulations! you got the number in "+attempts+ " attempts");
        document.getElementById('btn').diabled=true;
    }
    else if(guess<randomNumber)
    {
        displayMessage("Too low! try a higher number");
      
    }
    else
    {
        displayMessage("Too high! try a lower number")
    }
});
function displayMessage(Message)
{
    document.getElementById('msg').textContent=Message;
}