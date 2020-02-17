async function getFilms() {
    const filmElement = document.querySelector('#films');
    let response  = await fetch('https://swapi.co/api/films/');
    let data = await response.json();
    //console.log(`toto jsou filmy ${data.results[0].title}`);
    let nazvyFilmu = [];
    let html = '';
    
    
    data.results.sort(function(a, b) {return a.episode_id - b.episode_id}).forEach(element => {
        console.log(`nazev je ${element.title}`)
        html +=`
        <div class="film">
        <div class="film__episode">${element.episode_id}</div>
        <div class="film__data">
        <div class="film__name">${element.title}</div>
        <div class="film__year">${element.release_date.slice(0,4)}</div>
        <div class="film_director">${element.director}</div>
        </div>
        </div>`
        
    });
    
    filmElement.innerHTML = html;
}


export {getFilms};