const capacity = 3

class Airport {
  constructor(){
    this.runway = []
  }

  getRunway() {
    return this.runway
  }

  landPlane(plane) {
    if(this.runway.length >= 3) {
      return "Airport at capacity" 
    } else {
      this.runway.push(plane)
    }
  }

  takeOff() {
    this.runway.pop();
  }
  
}