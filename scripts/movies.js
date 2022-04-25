// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// var arr = JSON.parse(localStorage.getItem("amount"));

//  document.querySelector("#wallet").value=arr.value;

let movies_box= document.querySelector("#movies");

async function searchMovies(){

    try{

        const search = document.querySelector("#search").value;

        const res = await fetch(`http://www.omdbapi.com/?apikey=807514a6&s=${search}`);

        const data = await res.json();

    //    console.log(data);

         const movies = data.Search;
         
         console.log(movies);

         appendMovies(movies);
       
    }

    catch (err){
        console.log("err:",err)
    }
}

function appendMovies(data) {
    data.forEach(function (el) {

        let box = document.createElement("div");
        box.id="box_div"
        let p  = document.createElement("p");
        p.innerText=el.Title;
        
        let poster = document.createElement("img")
        poster.src=el.Poster;
        poster.id="poster"

        let btn = document.createElement("button");
        btn.innerHTML="Book Now";
        btn.class="book_now";
        


        
        box.append(poster,p,btn);
        movies_box.append(box);
    })
}