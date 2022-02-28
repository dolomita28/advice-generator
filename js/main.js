const adviceId = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice-lnk');



// generate random id
const getRandomId = () => {
    return Math.floor(Math.random() * 150);
}

// fetch api
const getAdvice = async () => {
    const id = getRandomId();
    console.log('this is the id', id);
    const result = await fetch(`https://api.adviceslip.com/advice/${id}`);
    result.json().then(data => {
        adviceId.innerHTML = data.slip['id'];
        advice.innerHTML = data.slip['advice'];
        
    });
}

// click on dice
dice.addEventListener('click',getAdvice);

//starting point
getAdvice();