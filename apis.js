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
