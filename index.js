var server = require('./lib/server.js')
var path = require('path')
var level = require('level')
var hypergraph = require('hypergraph')

module.exports = HyperFrame

function HyperFrame (args) {
  if (!(this instanceof HyperFrame)) return new HyperFrame(args)
  this.path = path.join(args.path || process.cwd(), 'data.hyperframe')
  this.db = hypergraph(level(this.path))
}

HyperFrame.prototype.download = function (version, cb) {
  this.db.get(version, function (err, data) {
    if (err) throw err
    console.log(data)
  })
}

HyperFrame.prototype.append = function (data, cb) {
  // TODO: serialize data
  this.db.append(data, function (err, data) {
    if (err) throw err
    console.log(data)
  })
}

HyperFrame.prototype.server = function () {
  return server(this.db)
}
