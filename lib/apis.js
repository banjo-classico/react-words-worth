'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compare = compare;
exports.buildTerms = buildTerms;
exports.getRandomWord = getRandomWord;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

function compare(terms, callback) {
  _superagent2.default.post('http://api.cortical.io:80/rest/compare?retina_name=en_associative').send(terms).set('api-key', process.env.RETINA_API_KEY).end(function (err, res) {
    if (err) {
      console.log(err);
    } else {
      callback(err, res.body);
    }
  });
}

function buildTerms(main, word) {
  return [{ "term": main }, { "term": word }];
}

function getRandomWord(callback) {
  _superagent2.default.get('http://api.wordnik.com/v4/words.json/randomWord?includePartOfSpeech=noun&minCorpusCount=4000&maxCorpusCount=-1&minDictionaryCount=8&maxDictionaryCount=-1&minLength=4&maxLength=-1&api_key=' + process.env.WORDNIK_API_KEY).end(function (err, res) {
    if (err) {
      console.log(err);
    } else {
      callback(err, res.body);
    }
  });
}