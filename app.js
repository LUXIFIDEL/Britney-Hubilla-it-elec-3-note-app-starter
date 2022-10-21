const add = require('./add')
//const write = require('./write')
const read = require('./read')
const present = require('./present')
const update = require('./update')
const cmd = process.argv

var note = {}

if(cmd[2] == 'add') {

  note = {
    id: cmd[3],
    title: cmd[4],
    body: cmd[5]
  }

  var oldNote = read()

  add(note, oldNote)
  console.log(note, oldNote)
}
if(cmd[2] == 'read') {
    present(read())
  }
  if(cmd[2] == 'delete') {
    const id = cmd[3]
    const oldNote = read()
    const del = require('./del')
    del(id, oldNote)
    
    console.log(del)
  }
  if(cmd[2] == 'update') {
    const note = {
      id: cmd[3],
      title: cmd[4],
      body: cmd[5]
    }
  
    const oldNote = read()
  
    update(note,oldNote)
    
    console.log(note, oldNote);
  }
  