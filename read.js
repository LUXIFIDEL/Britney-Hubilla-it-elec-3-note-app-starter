const fs = require('fs')

const read = function() {
  if(fs.existsSync('./note.txt')) {
  return fs.readFileSync('note.txt', 'utf8');
  } else {
    return '[]'
  }



} 

module.exports = read