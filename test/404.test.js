const request = require("supertest");

describe("404", function() {
  describe("when GET /", function() {
    it("should return the 404 page", function(done) {
      request(this.server)
        .get("/")
        .expect(404)
        .expect(/Not Found/, done);
    });
  });
});
