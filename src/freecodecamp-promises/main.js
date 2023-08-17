/*
    How to fetch a movie?
    To fetch our movie, we are using the TVMAZE API
*/
const get_movie = (value = "Game of thrones") => {
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response)=> create_UI(response.json()))
}