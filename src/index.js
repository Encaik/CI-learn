var Mock = require('mockjs');

var data = Mock.mock({
  'list|50-100': [{
    'id|+1': 1
  }]
});

document.write(JSON.stringify(data))
