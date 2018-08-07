

function Bird() {
    this.y = height/2;
    this.x = 64;
  
    this.gravity = 0.7;
    this.lift = -12;
    this.velocity = 0;
  //this is where the bird is being drawn
    this.show = function() {
      fill(255);
      ellipse('shark.png', 20, 20, 20 ,20);
    }
  
    this.up = function() {
      this.velocity += this.lift;
    }
  
    this.update = function() {
      this.velocity += this.gravity;
      // this.velocity *= 0.9;
      this.y += this.velocity;
  
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }
  
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
  
    }
  
  }