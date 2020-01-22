const { expect } = require("chai");
const request = require("supertest");

describe("UserRouter", function() {
  describe("Create a new user", function() {
    it("should create a new user", async function() {
      const res = await request(this.server)
        .post("/users")
        .send({
          username: "guillaume",
          email: "guillaume@example.com",
          password: "1password4instance"
        })
        .expect(200)
        .expect("Content-Type", /json/);

      // expect(res.body).to.equal({
      //   message: 'User saved successfully',
      //   user: {
      //     "active": 1,
      //     "email": "guillaume@example.com",
      //     "id": 1,
      //     // "joinedAt": new Date(),
      //     "score": 0,
      //     "username": "guillaume",
      //   },
      // });
      expect(res.body).to.have.property("user");
      expect(res.body.user).to.have.property("joinedAt");

      return;
    });
  });

  // describe("Connect a user", function() {
  //   it("should connect", function(done) {

  //   });
  // });
});
