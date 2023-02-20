const resturants = ['Skrimp Shack', 'Soul Central', 'Halal Street Food', 'Redeye Diner', 'Papi Queso']

const random = Math.floor(Math.random() * resturants.length);

const randomBtn = document.querySelector('#random-btn')


randomBtn.addEventListener('click', () =>{
    return alert(`You should visit ${random, resturants[random]}!`);
    
})

