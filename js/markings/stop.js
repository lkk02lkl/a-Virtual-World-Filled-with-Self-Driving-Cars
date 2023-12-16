class Stop {
  constructor(center, directionVector, width, height) {
    this.center = center;
    this.directionVector = directionVector;
    this.width = width;
    this.height = height;

    this.support = new Segment(
      translate(center, angle(directionVector), height / 2),
      translate(center, angle(directionVector), -height / 2)
    );
    this.poly = new Envelope(this.support, width, 0).poly;
  }

  draw(ctx) {
    this.poly.draw(ctx);
    ctx.save();
    ctx.translate(this.center.x, this.center.y);
    ctx.rotate(angle(this.directionVector) - Math.PI / 2);
    ctx.scale(1, 2);

    ctx.beginPath();
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fiilStyle = "white";
    ctx.font = "bold" + this.height * 0.3 + "px Arial";
    ctx.fillText("STOP", 0, 0);

    ctx.restore();
  }
}