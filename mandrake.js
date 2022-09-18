export class Mandrake {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.image = document.getElementById("mandrake");
    this.spriteWidth = 256;
    this.spriteHeight = 256;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.x = this.canvasWidth / 2 - this.width / 2;
    this.y = this.canvasHeight - this.height + 20;
    this.minFrame = 0;
    this.maxFrame = 355;
    this.frame = 0;
    this.frameX = 3;
    this.frameY = 10;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  setAnimation(minFrame, maxFrame) {
    this.minFrame = minFrame;
    this.maxFrame = maxFrame;
    this.frame = minFrame;
  }
  update() {
    this.frame = this.frame < this.maxFrame ? this.frame + 1 : this.minFrame;
    this.frameX = this.frame % 18;
    this.frameY = Math.floor(this.frame / 18);
  }
}
