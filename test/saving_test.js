const assert = require("assert");
const MarioChar = require("../models/mariochar");

//describe tests
describe("Saving records", () => {
  //create tests
  it("Saves a record to the database", done => {
    let char = new MarioChar({
      name: "Yoshi"
    });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });
});
