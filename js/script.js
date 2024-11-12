import peliculas from './peliculas.js'
console.log(peliculas);
const imageBase="https://image.tmdb.org/t/p/w500"
const action=peliculas.filter((element) => element.genre_ids.includes(28)).map((element)=>({
    title:element.title,
    poster_path:imageBase.concat(element.poster_path)
}));
console.log("estas son las de accion",action)

const thriller=peliculas.filter((element) => element.genre_ids.includes(53)).map((element)=>({
    title:element.title,
    poster_path:imageBase.concat(element.poster_path)
    
}));
console.log("estas son las de thriller",thriller)

const adventure=peliculas.filter((element) => element.genre_ids.includes(12)).map((element)=>({
    title:element.title,
    poster_path:imageBase.concat(element.poster_path)
    
}));
console.log("estas son las de aventuras",adventure)


const actionlist =document.getElementById("genero-28")
const thrillerlist =document.getElementById("genero-53")
const adventurelist =document.getElementById("genero-12")

function ordermovies(pelicula,genlist){
    pelicula.forEach((element=>{
        const divgen=document.createElement("div")
        
        const titlegen=document.createElement("h3")
        titlegen.textContent=element.title;
        titlegen.classList.add("title");
        const imggen=document.createElement("img")
        imggen.src=element.poster_path
        imggen.alt=element.title
    
        divgen.appendChild(titlegen)
        divgen.appendChild(imggen)
    
        genlist.appendChild(divgen)
    }))
}

ordermovies(action,actionlist)
ordermovies(thriller,thrillerlist)
ordermovies(adventure,adventurelist)
