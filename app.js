class Hold {
  constructor(id) {
    this.btn = document.getElementById(id);
    this.isHeld = true;
    this.offX_INIT = -128;
    this.offY_INIT = -128;
    this.offX = 0;
    this.offY = 0;
  }

  get isHeldSwitch() {
    this.isHeld = !this.isHeld;
  }

  get handleHold() {
    if (this.isHeld) {
      this.btn.style.left = this.offX + "px";
      this.btn.style.top = this.offY + "px";
      setTimeout(() => this.handleHold, 0);
    }
  }
  handleOrigin(offsetX, offsetY) {
    this.offX_INIT = offsetX;
    this.offY_INIT = offsetY;
    this.btn.style.transform =
      "translate(" + -offsetX + "px, " + -offsetY + "px)";
  }
}

let me = new Hold("btn");

window.addEventListener("mousemove", (e) => {
  me.offX = e.clientX;
  me.offY = e.clientY;
});

me.btn.addEventListener("mousedown", (e) => {
  me.handleOrigin(e.offsetX, e.offsetY);
});

me.btn.addEventListener("mousedown", (e) => {
  me.isHeldSwitch;
  me.handleHold;
});
me.btn.addEventListener("mouseup", (e) => {
  me.isHeldSwitch;
});
