const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const songs = [
  {
    url: '/audio/ODESZA-Its-Only.mp3',
    title: 'It\'s Only',
    artist: 'Odesza',
    album: 'In Return',
    art: 'http://cdn.shopify.com/s/files/1/0993/9646/products/COUNT052CD.jpeg?v=1466450945',
    release: '2014',
    songTime: '4:28',
    id: 0
  },
  {
    url: '/audio/ODESZA-Say-My-Name.mp3',
    title: 'Say My Name',
    artist: 'Odesza',
    album: 'In Return',
    art: 'http://cdn.shopify.com/s/files/1/0993/9646/products/COUNT052CD.jpeg?v=1466450945',
    release: '2014',
    songTime: '4:23',
    id: 1
  }
]

// serve CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// endpoints
app.get('/', (req, res) => {
  res.send(songs)
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
  console.log('Press CTRL + C to stop server')
})
