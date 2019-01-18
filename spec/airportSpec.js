describe("Airport", function() {
  var gatwick;

  beforeEach(function() {
    gatwick = new Airport();
  });

  it("should have an airport class", function() {
    expect(gatwick instanceof Airport).toBe(true);
  })
});

