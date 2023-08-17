/*
    How to fetch a movie?
    To fetch our movie, we are using the TVMAZE API
*/
const get_movie = (value = "Game of thrones") => {
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response)=> create_UI(response.json()))
}

/* 
    we created a function get_movie(value = "Game of thrones") that uses the JavaScript fetch API. 
    we use it to make a GET request to our movie API endpoint.

    The fetch API returns a promise. To use the response from the API we attach the .then() callback in
    which we pass the response.json() into a new function create_UI()
*/

const create_UI = (data) => {
    const movie_img = document.querySelector('#img_src')
    const movie_icon = document.querySelector("#img_icon");
    const movie_title = document.querySelector(".movie_title");
    const movie_desc = document.querySelector(".movie_desc");
    const movie_link = document.querySelector(".btn");
    const movie_date = document.querySelector("#movie_date");
    const movie_rating = document.querySelector("#movie_rating");
    const movie_runtime = document.querySelector("#movie_runtime");
    const movie_status = document.querySelector("#movie_status");

    // set the UI
    movie_icon.src = data.image.medium;
    movie_img.src = data.image.original;
    movie_title.textContent = data.name;
    movie_desc.innerHTML = data.summary;
    movie_link.href = data.officialSite;
    movie_date.textContent = data.premiered;
    movie_rating.textContent = data.rating.average;
    movie_runtime.textContent = data.runtime;
    movie_status.textContent = data.status;
    }
    
    /*
        The above function, as the name implies, helps us create the UI for our movie app. But we still need
        a way to collect the movie name from the users

        The first thing we need to do is to add an `onsubmit` event handler to our HTML form
    */

    // handle form submit
    const search = (event) => {
        event.preventDefault()
        const value = document.querySelector(".header_form-input").value
        get_movie(value)
    }

    /*
        Anytime the user submits the form we get the value then entered in the search box and we pass it to
        the get_movie(value = "Game of thrones") functtion.
    */