const searchResult = document.querySelector('.search-result');
const searchBtn = document.querySelector('.search');
const loadingMsg = document.querySelector('.loading');
const userInput = document.querySelector('input');

searchBtn.addEventListener('submit', fetchData);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f66893e5f9msh00fb9b8646ff60dp134dfajsn9736e2742d47',
		'X-RapidAPI-Host': 'real-time-google-search.p.rapidapi.com'
	}
};
function fetchData(event) {
    event.preventDefault();
    console.log(userInput.value);
    loadingMsg.classList.add('hidden');
    fetch('https://real-time-google-search.p.rapidapi.com/search?q=bitcoin&location_name=London%2COntario%2CCanada&location_parameters_auto=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}