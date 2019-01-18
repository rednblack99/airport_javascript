class Airport {
  constructor(capacity = 3){
    this.runway = [];
    this.capacity = capacity;
  }

  getRunway() {
    return this.runway
  }

  landPlane(plane) {
    if(this.runway.length >= this.capacity) {
      return "Airport at capacity" 
    } else {
      this.runway.push(plane)
    }
  }

  takeOff() {
    this.runway.pop();
  }
  
}