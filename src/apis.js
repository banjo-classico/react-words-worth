import request from 'superagent'
require('dotenv').config()

export function compare(terms, callback) {
  request
    .post('http://api.cortical.io:80/rest/compare?retina_name=en_associative')
    .send(terms)
    .set('api-key', process.env.RETINA_API_KEY)
    .end(function(err, res) {
      if (err) {
        console.log(err)
      } else {
        callback(err, res.body)
      }
    })
}

export function buildTerms(main, word) {
  return [{"term": main}, {"term": word}]
}

export function getRandomWord(callback) {
  request
    .get('http://api.wordnik.com/v4/words.json/randomWord?includePartOfSpeech=noun&minCorpusCount=4000&maxCorpusCount=-1&minDictionaryCount=8&maxDictionaryCount=-1&minLength=4&maxLength=-1&api_key=' + process.env.WORDNIK_API_KEY)
    .end(function(err, res) {
      if (err) {
        console.log(err)
      } else {
        callback(err, res.body)
      }
    })
}
