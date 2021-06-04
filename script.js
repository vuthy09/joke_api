const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('http://api.icndb.com/jokes/random', config).then(res => res.json()).then(data => {
        jokeEl.innerHTML = data.value.joke;
    })
}