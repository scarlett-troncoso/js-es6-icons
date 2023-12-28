/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

BONUS
1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2 - popolare le options della select della milestone 3 dinamicamente.

Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.

Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.

Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome.
Solamente quando la parte logica è completa, ci dedichiamo al css.

*/

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

const containerDiv = document.querySelector('.container .row')

iconsDati.forEach((icon) => {
	console.log(`${icon.name} ${icon.prefix + icon.type} ${icon.family} ${icon.color}`);

	const iconsDiv =
	`<div class="col-1 m-3">
		<div class="${icon.prefix + icon.name} ${icon.family} ${icon.color}">
		</div>
		<p class="m-0">${icon.name}</p>
	</div>`
	//containerDiv.style.color = icon.color
	containerDiv.insertAdjacentHTML('beforeend', iconsDiv)	
})


/*
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/

//function per select

console.log('--------------------------');

const iconSelect = document.getElementById("select_icon")

//const typeIcon = document.querySelector('.form-select')  //prima era:   .icon_type  //non é necesario quest costante

// Filtrare segun il tipo

const icon_animal = iconsDati.filter(icon => icon.type === 'animal')

const icon_vegetable = iconsDati.filter(icon => icon.type === 'vegetable')

const icon_user = iconsDati.filter(icon => icon.type === 'user')



console.log('--------------------------');

iconSelect.addEventListener('change', funSelector);

function funSelector(e){
    if (iconSelect.value === 'animal') {
	console.log(icon_animal);

	containerDiv.innerHTML = ""

	icon_animal.forEach((iconAn) => {

	const iconsDivAnimal =
    `<div class="col-1 m-3">
        <div class="${iconAn.prefix + iconAn.name} ${iconAn.family}">
        </div>
        <p>${iconAn.name}</p>
    </div>`
	containerDiv.style.color = iconAn.color
    containerDiv.insertAdjacentHTML('beforeend', iconsDivAnimal)

		})} else if (iconSelect.value === 'vegetable') {
			console.log(icon_vegetable);

			containerDiv.innerHTML = ""

			icon_vegetable.forEach((iconVeg) => {

			const iconsDivVegetable =
			`<div class="col-1 m-3">
				<div class="${iconVeg.prefix + iconVeg.name} ${iconVeg.family}">
				</div>
				<p>${iconVeg.name}</p>
			</div>`
			containerDiv.style.color = iconVeg.color
			containerDiv.insertAdjacentHTML('beforeend', iconsDivVegetable) 

			})} else if (iconSelect.value === 'user') {
				console.log(icon_user);

				containerDiv.innerHTML = ""
	
				icon_user.forEach((iconUs) => {
	
				const iconsDivUser =
				`<div class="col-1 m-3">
					<div class="${iconUs.prefix + iconUs.name} ${iconUs.family}">
					</div>
					<p>${iconUs.name}</p>
				</div>`
				containerDiv.style.color = iconUs.color
				containerDiv.insertAdjacentHTML('beforeend', iconsDivUser)
		
				})}
			};

/* BONUS
const cod = Math.floor(Math.random( ) * 10)
console.log(cod);

const letras = ['A', 'B', 'C', 'D', 'E', 'F']

const lun = Math.floor(Math.random() * letras.length)
console.log(lun);
console.log(lun.valueOf());
*/