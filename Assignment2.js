let field;
let gridSize = 8;
let arrowLength =20;

function setup() {
  createCanvas(400, 400);
  field = new Field(gridSize,arrowLength,invertDirection);
  field.generateField();
}

function draw() {
  background(220);
  field.drawField();
}

class Field {
  constructor(gridSize,arrowLength,distortionFunction) {
    this.source = createVector(width / 2, height / 2);
    this.vectors = [];
    this.gridSize = gridSize;
    this.widthDistance = width / this.gridSize;
    this.heightDistance = height / this.gridSize;
    this.arrowLength = arrowLength;
    this.distortionFunction = distortionFunction
  }

  generateField() {
    for (let y = 0; y < this.gridSize; y++) {
      for (let x = 0; x < this.gridSize; x++) {
        let vec = createVector(x * (this.widthDistance) + this.widthDistance0.5, 
                               y (this.heightDistance) + this.heightDistance*0.5);
        this.vectors.push(vec);
      }
    }
  }

  drawField() {
    stroke(0);
    for (let i = 0; i < this.vectors.length; i++) {
      let vectorPoint = this.vectors[i];
      let arrowVector = createVector(vectorPoint.x - this.source.x, vectorPoint.y - this.source.y).setMag(this.arrowLength)
      this.distortionFunction(arrowVector)
      drawArrow(vectorPoint, arrowVector, "blue");
    }
  }
}

function invertDirection(myVector) {
  myVector.mult(-1);
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
