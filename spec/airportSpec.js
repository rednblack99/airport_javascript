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

  it("Can takeoff a plane", function() {
    gatwick.landPlane(plane)
    gatwick.takeOff()
    expect(gatwick.getRunway()).toEqual([])
  })

  it("Prevents landing when airport is at default capacity", function() {
    gatwick.landPlane(plane)
    gatwick.landPlane(plane)
    gatwick.landPlane(plane)
    expect(gatwick.landPlane(plane)).toEqual("Airport at capacity")
  })

  it("Can have custom capacity", function() {
    heathrow = new Airport(1);
    heathrow.landPlane(plane)
    expect(heathrow.landPlane(plane)).toEqual("Airport at capacity")
  })

});

