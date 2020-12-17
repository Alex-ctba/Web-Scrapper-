const scrapeIt = require("scrape-it")
/* const express = require('express')
const server = express() */


 //todos os links 

  scrapeIt('https://www.imdb.com/name/nm0000115/', {
    movies: {
        listItem:"[id^=actor-]", // ( Seleciona id que começa com ator -) 
        data: {
            url: {
                selector:'a:first-child', // ( aqui vamos coletar o url ) 
                attr:'href'
            }
        }
    }
})

.then(function({ data }){
   var urls = data.movies.map( movie =>'http://www.imdb.com' + movie.url)

    Promise.all(urls.slice(0,2).map( url => getPage(url) ))
    .then(({ data, response }) => {
        console.log(`Status Code: ${response.status}`)
        console.log(data)
    })
    .catch(err => console.log(err))
})
.catch(err => console.log(err)) 

 

//Buscando dados da pagina
function getPage(url){
    console.log(`Extraindo paginas... ${url}`)
    return scrapeIt(url, {
        title: "h1",
        summary: "div.summary_text",
        rating:"[itemprop=ratingValue]"
        }).catch(err => console.log(err))       
} 

/* Promise.all( [getPage('https://www.imdb.com/title/tt1274586/')] )
.then(([{ data }]) => {
        console.log(data)
}) */
 
/* server.listen(3000, ()=>{
    console.log('Server Online...')
}) */