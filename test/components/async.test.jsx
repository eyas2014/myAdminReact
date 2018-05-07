var num=2;
var assert=require('assert');
var http=require('http');

describe('sample tests:', function() {
  it('callback', function(done) {
    http.get('http://www.xbaidu.com', function(res) {
      assert.equal(200, res.statusCode);
      done();


	});
  });
});