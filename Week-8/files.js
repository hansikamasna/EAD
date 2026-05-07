const fs = require('fs')

fs.writeFile('sample.txt', 'Hello World', err => {
  if (err) throw err

  console.log('File created')

  fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) throw err

    console.log(data)

    fs.appendFile('sample.txt', '\nNew Line Added', err => {
      if (err) throw err

      console.log('Content appended')

      fs.rename('sample.txt', 'newfile.txt', err => {
        if (err) throw err

        console.log('File renamed')

        fs.unlink('newfile.txt', err => {
          if (err) throw err

          console.log('File deleted')
        })
      })
    })
  })
})