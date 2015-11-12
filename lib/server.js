var debug = require('debug')('hyperframe')
var replicator = require('dat-http-replicator')
var http = require('http')

module.exports = function (db) {
  function router (req, res) {
    debug(req.method, req.url, req.connection.remoteAddress)
    if (req.url === '/' && req.method === 'GET') {
      db.heads(function (err, heads) {
        if (err) throw err
        res.end(heads)
      })
    }
    else replicator.server(db)

  }
  return http.createServer(router)
}
