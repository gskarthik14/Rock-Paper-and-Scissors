function rpsGame(choiceMade)
{
    humanChoice=choiceMade.id;
    botChoice=botId(generateInt());
    var result=decideWinner(humanChoice,botChoice);
    var message=resultGenerate(result);
    frontEnd(humanChoice,botChoice,message);
}
function generateInt()
{
    return Math.floor(Math.random()*3);
}
function botId(id)
{
    var items=['rock','paper','scissors'];
    return items[id];
}
function decideWinner(humanChoice,botChoice)
{
    var rpsDB=
    {
        'rock':{'rock':0.5,'paper':0,'scissors':1},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'rock':0,'paper':1,'scissors':0.5},
    }
    var humanScore=rpsDB[humanChoice][botChoice];
    var botScore=rpsDB[botChoice][humanChoice];
    return [humanScore,botScore];
}
function resultGenerate(result)
{
    if(result[0]===0)
    {
        return {'text':'You Lost!','colorH':'red','colorB':'green'};
    }
    else if(result[0]===1)
    {
        return {'text':'You Won!','colorH':'green','colorB':'red'};
    }
    else
    {
        return {'text':'Game Tied!','colorH':'blue','colorB':'blue'};
    }
}
function frontEnd(humanChoice,botChoice,message)
{
    var imageDatabase=
    {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var humanDiv=document.createElement('div');
    var msgDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    humanDiv.innerHTML="<img src='"+imageDatabase[humanChoice]+"'height=200 width=200 style='box-shadow: 0px 0px 40px "+message['colorH']+";'>"
    botDiv.innerHTML="<img src='"+imageDatabase[botChoice]+"'height=200 width=200 style='box-shadow: 0px 0px 40px "+message['colorB']+";'>"
    msgDiv.innerHTML="<h1 style='font-size:45px;'>"+message['text']+"</h1>" 
    document.getElementById('flex-box-div').appendChild(humanDiv);
    document.getElementById('flex-box-div').appendChild(msgDiv);
    document.getElementById('flex-box-div').appendChild(botDiv);
}
function tryAgain()
{
    //Refreshes the window
    window.location.reload();
} 