const fs = require('fs')

const write = function(cmd="default") {
  fs.writeFileSync('note.txt', cmd)
}

module.exports = write