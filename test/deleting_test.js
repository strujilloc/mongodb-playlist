const assert = require("assert");
const MarioChar = require("../models/mariochar");

let char;
//describe tests
describe("Deleting records", () => {
  // create values before the test
  beforeEach(done => {
    char = new MarioChar({
      name: "Yoshi"
    });
    char.save().then(() => {
      done();
    });
  });

  //create tests
  it("Delete one record from the database", done => {
    MarioChar.findOneAndDelete({ name: "Yoshi" }).then(() => {
      MarioChar.findOne({ name: "Yoshi" }).then(result => {
        assert(result === null);
        done();
      });
    });
  });
});
