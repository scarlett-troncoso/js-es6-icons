/* TRACCIA:
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/

/* Dati */

const iconsDati = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

console.log(iconsDati);

/* Selezionare il TAG contenitore degli icons, HTML */

const containerDiv = document.querySelector('.container .row')


/* Funzione per stampare in pagina gli icons */

function stampIcon(icons) {

	containerDiv.innerHTML = ""

	icons.forEach((icon) => {

		const iconsDivAnimal =
		`<div class="col-1 m-3">
			<div class="${icon.prefix + icon.name} ${icon.family} ${icon.color}">
			</div>
			<p class="${icon.color}">${icon.name}</p>
		</div>`
		containerDiv.insertAdjacentHTML('beforeend', iconsDivAnimal)
	})
}

stampIcon(iconsDati);


//Select HTML

const iconSelect = document.getElementById("select_icon")


// Filtrare per tipo

const icon_animal = iconsDati.filter(icon => icon.type === 'animal')

const icon_vegetable = iconsDati.filter(icon => icon.type === 'vegetable')

const icon_user = iconsDati.filter(icon => icon.type === 'user')


// Evento, alla selezione di una opzione della select, chiamare la function

iconSelect.addEventListener('change', funSelector);


/* Funzione per selezionare gli icons */

function funSelector(){
    if (iconSelect.value === 'animal') { // Select option "Animal"
	
		console.log(icon_animal);

		stampIcon(icon_animal);

	} else if (iconSelect.value === 'vegetable') { // Select option "Vegetable"
			
		console.log(icon_vegetable);

			stampIcon(icon_vegetable);

			} else if (iconSelect.value === 'user') { // Select option "User"
				
				console.log(icon_user);

				stampIcon(icon_user);

				} else { // Select option "All"

					stampIcon(iconsDati);
				}
			};
