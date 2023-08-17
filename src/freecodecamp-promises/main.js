/*
    How to fetch a movie?
    To fetch our movie, we are using the TVMAZE API
*/
const get_movie = (value = "Game of thrones") => {
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response)=> response.json())
    /*
    Promise chaining
        the .then() callback is not really the end. That's because when we return 
        value of a promise we get another promise. This becomes very useful when we want to run a series of
        async operations in order.

        For example, our movie API doesnt just return info about a movie, it also return information about all
        the episodes. Lets say that we really dont want to display all the episodes in GOT, we only want the
        first four episodes.

        with promise chaining we can easily achieve this:
    */
    .then((data)=>{
        if(data._embedded.episodes.length > 0){
            const new_data = data._embedded.episodes.slice(0,4)
            create_UI(data)
            return create_episodesUI(new_data)
        }else{
            return create_UI(data)
        }
    })
    /*
        This is still our get_movie() function, but this time instead of passing the dat to the create_UI function
        we return the response .then(response) => response.json(). This creates a new promise, which we can attach
        more callbacks to.
        Ideally this chain can keep going on and on as long as we want. All we need to is to return the value
        of the promise.
    */
   
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

    
