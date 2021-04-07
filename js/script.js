function playGame(playerInput){
    clearMessages('');
    
    function getMoveName(argMoveId){
        console.log('wywołano getMoveName');
        
        if(argMoveId == 1){
            return 'kamień';
        } else if(argMoveId == 2) {
            return 'papier';
        } else if(argMoveId == 3) {
            return 'nożyce';
        } 
    }

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('wywołano displayResult');
        console.log('moves:', argComputerMove, argPlayerMove);
        printMessage('Zagrałem: ' + argComputerMove + ', a Ty: ' + argPlayerMove);
        
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == argPlayerMove){
            printMessage('Remis!');
        } else {
            printMessage('Ja wygrywam!');
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);

    console.log(getMoveName('2'));
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(argMoveId=1);
});
document.getElementById('play-paper').addEventListener('click',  function(){
    playGame(argMoveId=2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(argMoveId=3);
});