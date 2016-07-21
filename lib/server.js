'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _configureSocket = require('./configure-socket');

var _configureSocket2 = _interopRequireDefault(_configureSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);
var port = process.env.PORT || 3000;
var io = (0, _socket2.default)(server);

app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

(0, _configureSocket2.default)(io);

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../public/index.html'));
});

server.listen(port, function () {
  console.log('Words Worth is streaming the interwaves on port ' + port);
});