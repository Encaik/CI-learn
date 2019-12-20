var Mock = require('mockjs');

var data = Mock.mock({
  'list|50-100': [{
    'id|+1': 1
  }]
});

fetch('http://example.com/movies.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });
document.write(JSON.stringify(data))
