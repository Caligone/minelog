var Sails = require('sails');
var assert = require("assert");
var app;

// Setup the app
before(function(done) {
  this.timeout(5000);
  Sails.lift({
    log: {
      level: 'error'
    },
    adapters: {
      mongo: {
        module: 'sails-mongo',
        host: 'localhost',
        database: 'minelog_test'
      }
    }
  }, function(err, sails) {
    app = sails;
    done(err, sails);
  });
});

// Models test
describe('Models', function(){

  describe('#User()', function(){
    it('should return -1 when the value is not present', function(){
      User.create({ pseudo: 'Calitest' }, function(err, user) {
        console.log(err);
        assert.equal(undefined, err);
      });
    })
  })
});

// API test
describe('API', function(){
  // /api/connect?key=:key&name=:name&address=:address&version=:version
  // Create or update the server into the database
  describe('#connect()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
});
