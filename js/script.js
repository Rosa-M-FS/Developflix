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

/* action.forEach((element=>{
    const divact=document.createElement("div")

    const titleact=document.createElement("h3")
    titleact.textContent=element.title;
    const imgact=document.createElement("img")
    imgact.src=element.poster_path
    imgact.alt=element.title

    divact.appendChild(titleact)
    divact.appendChild(imgact)

    actionlist.appendChild(divact)
}))
thriller.forEach((element=>{
    const divthri=document.createElement("div")
    
    const titlethri=document.createElement("h3")
    titlethri.textContent=element.title;
    const imgthri=document.createElement("img")
    imgthri.src=element.poster_path
    imgthri.alt=element.title

    divthri.appendChild(titlethri)
    divthri.appendChild(imgthri)

    thrillerlist.appendChild(divthri)
}))
adventure.forEach((element=>{
    const divadv=document.createElement("div")
    
    const titlegen=document.createElement("h3")
    titleadv.textContent=element.title;
    const imgadv=document.createElement("img")
    imgadv.src=element.poster_path
    imgadv.alt=element.title

    divadv.appendChild(titleadv)
    divadv.appendChild(imgadv)

    adventurelist.appendChild(divadv)
})) */

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
