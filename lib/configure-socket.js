'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apis = require('./apis');

exports.default = function (io) {
  io.on('connection', function (socket) {

    console.log('connection made');

    socket.broadcast.emit('populate');

    socket.on('action', function (action) {
      action.socket = false;
      switch (action.type) {
        case 'COMPARE_TERMS':
          var terms = (0, _apis.buildTerms)(action.random, action.word);
          (0, _apis.compare)(terms, function (err, res) {
            io.emit('update-score', { id: action.id, score: Math.floor(res.weightedScoring) });
          });
          break;

        case 'GET_RANDOM':
          (0, _apis.getRandomWord)(function (err, res) {
            var random = res.word;
            io.emit('random', res.word);
          });

        default:
          socket.broadcast.emit('action', action);
          break;
      }
    });

    socket.on('disconnect', function () {
      console.log('SOCKET disconnected');
      socket.broadcast.emit('remove', socket.id);
    });
  });
};