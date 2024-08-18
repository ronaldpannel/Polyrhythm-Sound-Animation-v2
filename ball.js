class Ball {
  constructor(track, radius, speed, soundFrequency, hue, lightness) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.hue = hue;
    this.lightness = lightness
    this.soundFrequency = soundFrequency;
    this.offset = 0;
    this.progress = 0;
    this.center = this.track.getPosition(this.offset);
  }
  move() {
    this.offset += this.speed;
    const res = this.track.getPosition(this.offset);
    this.center = { x: res.x, y: res.y };
    this.progress = res.progress
    if (res.round != this.round) {
      playSound(this.soundFrequency);
      this.round = res.round;
       console.log(this.progress);
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    const lightness = 100 - 50 * this.progress
    ctx.fillStyle = `hsl(${this.hue}, 100%, ${lightness}%)`;
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fill();
  
  }
}
