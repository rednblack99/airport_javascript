describe("Airplane", function() {
  var airplane;

  beforeEach(function() {
    gatwick = new Airport();
    airplane = new Airplane();
  });

  it("should have a plane class", function() {
    expect(airplane instanceof Airplane).toBe(true);
  })
});

