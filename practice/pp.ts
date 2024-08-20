class Player {
  private height: number;
  private weight: number;
  
  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }

  show() {
    return `${this.height} ${this.weight}`;
  }
}

let player1 = new Player(3, 5);
console.log(player1.show());
