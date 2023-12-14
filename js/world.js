class World {
  constructor(graph, roadWidth = 100, roadRoundness = 10) {
    this.graph = graph;
    this.roadWidth = roadWidth;
    this.roadRoundness = roadRoundness;

    this.envelopes = [];

    this.generate();
  }

  generate() {
    this.envelopes.length = 0;
    for (const seg of this.graph.segments) {
      this.envelopes.push(
        new Envelope(seg, this.roadWidth, this.roadRoundness)
      );
    }

    this.intersections = Polygon.break(
      this.envelopes[0].poly,
      this.envelopes[1].poly
    );
  }

  draw(ctx) {
    for (const env of this.envelopes) {
      env.draw(ctx);
    }

    for (const int of this.envelopes) {
      int.draw(ctx, { color: "red", size: 6 });
    }
  }
}