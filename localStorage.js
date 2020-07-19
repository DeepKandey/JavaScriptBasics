// clean localStorage
//localStorage.clear();

localStorage.setItem('hero', 'Thor');

var myHero = localStorage.getItem('hero');;
console.log(myHero);

// update localStorage
localStorage.setItem('hero', 'IronMan');