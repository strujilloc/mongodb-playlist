const assert = require("assert");
const MarioChar = require("../models/mariochar");

let char;
//describe tests
describe("Finding records", () => {
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
  it("Finds one record from the database", done => {
    MarioChar.findOne({ name: "Yoshi" }).then(result => {
      assert(result.name === "Yoshi");
      done();
    });
  });

  it("Finds one record by ID from the database", done => {
    MarioChar.findOne({ _id: char._id }).then(result => {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
