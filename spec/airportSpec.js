describe("Airport", function() {
  var gatwick;

  beforeEach(function() {
    gatwick = new Airport();
    plane = new Airplane()
  });

  it("should have an airport class", function() {
    expect(gatwick instanceof Airport).toBe(true);
  })

  it("Can land a plane", function() {
    gatwick.landPlane(plane)
    expect(gatwick.getRunway()).toEqual([plane])
  })
});

