class Spotlight {
    constructor({ toggleEl, outerColor = "#000000ee", innerRadius = 15, outerRadius = 150 }) {
      this.active = true;
      this.el = this.insertSpotlightElement();
      this.outerColor = outerColor;
      this.innerRadius = innerRadius;
      this.outerRadius = outerRadius;
      this.boundEventListener = this.handleMouseMove.bind(this);
  
      this.switchOn();
  
      if (toggleEl) {
        document.querySelector(toggleEl)?.addEventListener("click", this.toggleLight.bind(this));
      }
    }
  
    switchOn() {
      this.active = true;
      document.addEventListener("mousemove", this.boundEventListener);
      this.el.style.animation = "enter 1s ease forwards";
      setTimeout(() => {
        this.el.style.animation = "pulse 3s ease-in-out infinite alternate forwards";
      }, 1000);
    }
  
    switchOff() {
      this.active = false;
      this.el.style.animation = "exit 1s ease forwards";
      document.removeEventListener("mousemove", this.boundEventListener);
    }
  
    toggleLight() {
      if (this.active) {
        this.switchOff();
      } else {
        this.switchOn();
      }
    }
  
    insertSpotlightElement() {
      const el = document.createElement("div");
      el.classList.add("spotlight");
      document.body.appendChild(el);
      return el;
    }
  
    handleMouseMove(event) {
      setTimeout(() => {
        this.updateEl(event.clientX, event.clientY);
      }, 90);
    }
  
    updateEl(x, y) {
      this.el.style.background = `radial-gradient(circle at ${x}px ${y}px, #00000000 ${this.innerRadius}px, ${this.outerColor} ${this.outerRadius}px)`;
    }
  }
  
  export default Spotlight;
  