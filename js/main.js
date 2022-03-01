const adviceId = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice-lnk');
const apiUrl = 'https://api.adviceslip.com/advice';
// print advice message
const printAdvice = (data) => {
    adviceId.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
}
// case error messages
const printError = (msg) => {
    advice.innerHTML = msg;
}
// fetch api
const getAdvice = async () => {    
    try{
        const result = await fetch(apiUrl);
        result.json().then(data => {
            printAdvice(data);                        
        })
    }
    catch(err){
        printError(err.message);
    }  
}
// handle click on dice
dice.addEventListener('click',getAdvice);

//starting
getAdvice();