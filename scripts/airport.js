class Airport {
  constructor(){
    this.runway = []
  }

  getRunway() {
    return this.runway
  }

  landPlane(plane) {
    this.runway.push(plane);
  }

  takeOff() {
    this.runway.pop();
  }
  
}