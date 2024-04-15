const harry = {
    name: 'Harry Potter',
    hair: 'black',
}
const hermoine = {
    name: 'Hermoine Granger',
    hair: 'brown',
}
const ron = {
    name: 'Ron Weasley',
    hair: 'red',
}


const array = [harry, hermoine, ron];
// það fylgir () eftir öllum fuctions  
function render() {
    // document er allt html-ið
    const list = document.getElementById("a");
    // list er núna sama og ul (whatever), list er að geyma parent-ið,
    console.log(list)
    // array geymir uppl
    //forEach þýðir að það sé rúllað í gegnum öll stak/nöfnin einu sinni. 
    array.forEach((person) => {
        console.log(person)
        const listNames = document.createElement('li')
        listNames.textContent = person.name
        listNames.style.cssText = `color: ${person.hair}`;
        list.appendChild(listNames);
    })
};



//render = sýna hluti
render();

// Án ForEach
/*
onst Harry = document.createElement('li');
harry.textContent = 'Harry';
harry.style.cssText = 'color: black';



const Hermoine = document.createElement('li');
Hermoine.textContent = 'Hermoine';
Hermoine.style.cssText = 'color: black';


const harry = document.createElement('li');
harry.textContent = 'Harry';
harry.style.cssText = 'color: black';
*/
