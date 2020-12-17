
const scrapeIt = require("scrape-it")
const express = require('express')
const server = express()

scrapeIt('http://www.imdb.com/title/tt1274586', {
        title: "h1",
        summary: "div.summary_text",
        rating:"[itemprop=ratingValue]"
        })
        .then(({ data, response }) => {
            console.log(`Status Code: ${response.statusCode}`)
            console.log(data)
        })

         
  server.listen(3000, ()=>{
    console.log('Server Online...')
}) 