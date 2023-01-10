const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/'){

    res.end('Welcome to  our Home page')
  }

  if (req.url === '/about') {
    res.end('Here is a short story')
  }

  res.end(`
  <h1>OOps we can't find the page you're looking for</h1>`)
})

server.listen(8000)



