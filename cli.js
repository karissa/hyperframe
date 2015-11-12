#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2))
var hyperframe = require('./')

var cmd = args._[0]

var db = hyperframe({path: args.path})
if (cmd === 'download') {
  var
}
else if (cmd === 'listen') {
  var server = db.serve()
  var port = 6543
  server.listen(port, function () {
    console.log('Listening on port', port)
  })
}
else {
  console.error('hyperframe [download,update,clone,serve]')
  process.exit(1)
}
