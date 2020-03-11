const mongoose = require("mongoose");

// ES6 promises looks is already deprecade
mongoose.Promise = global.Promise;

// Connect to the DB bed¥fire tests run
before(done => {
  // connect ot mongodb
  // mongoose.connect("mongodb://localhost/testaroo");
  mongoose.connect("mongodb://localhost:27017/testaroo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }); // updated connection config

  mongoose.connection
    .once("open", function() {
      console.log("connection has been made, now make fireworks...");
      done();
    })
    .on("error", function(error) {
      console.log("connection error", error);
    });
});

// Drop the characters collection before each test
beforeEach(done => {
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(() => {
    done();
  });
});
