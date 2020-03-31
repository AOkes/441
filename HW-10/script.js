$(document).ready(function(){

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  // Class for creating objects on the canvas
  class Ship{

      constructor (x, y, width, height, fill){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.fill = fill;

      }

      get ship_x(){
        return this.x;
      }

      set ship_x(x){
        this.x = x;
      }

      get ship_y(){
        return this.y;
      }

      set ship_y(y){
        this.y = y;
      }

      get bwidth(){
        return this.width;
      }

      set bwidth(width){
        this.width = width;
      }

      get bheight(){
        return this.height;
      }

      set bheight(height){
        this.height = height;
      }

      get bfill(){
        return this.fill;
      }

      set bfill(fill){
        this.fill = fill;
      }

      create_square(){
        ctx.fillStyle = this.fill;
        ctx.fillRect(this.x,this.y,this.width,this.height);
      }


   }

// Variables
player_x =0;
player_y = canvas.height - 100;
player_width = 50;
player_height = 100;
ship_x = canvas.width/2;
ship_y = canvas.height/2;
ship_width = 20;
ship_height = ship_width;
var direction_x = 5;
var direction_y = 2;

// create 2 objects
var player_ship = new Ship(player_x, player_y, player_width, player_height, "rgb(256, 31, 30)");
var blue_ship = new Ship(ship_x, ship_y, ship_width, ship_height, "rgb(100, 40, 195)");

// Moves square across the screen

function move(object){

  object.x = object.x + direction_x;
  object.y = object.y + direction_y;

 //Makes the uncontrolled square interact with screen borders

  if (object.x > canvas.width || object.x <= 0 ){
      direction_x *= -1;
      }
  if (object.y >= canvas.height || object.y <= 0){
    direction_y *= -1;
  }

}

// Creates new ship
function draw_square(){
  blue_ship.create_square();
  move(blue_ship);
}

//Player ship

function player_square(){
  player_ship.create_square();

}

draw_square();
player_square();
setInterval(update,1000/60);

  function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw_square();
    player_square();

    if (boxes_collide(blue_ship, player_ship)){
      change_background();
      grow_size(blue_ship);
      shrink_size(player_ship);
    } else {
      $('body').css("background-color", "rgb("+0+", "+0+", "+0+")");
    }
  }



$(this).keypress(function(event){
  getKey(event, player_ship);
  stay_in_bounds(player_ship);

});


// Uses 'wasd' for movement
function getKey(event, object){

  let speed = 30;
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);

  if (actualLetter == "w"){
    object.y -= speed;
  }

  if (actualLetter =="s"){
    object.y += speed;
  }

  if (actualLetter == "a"){
    object.x -= speed;
  }

  if (actualLetter == "d"){
    object.x += speed;
  }
}

  // Ensures player stays in bounds
  function stay_in_bounds(object){
     if (object.x >= canvas.width){
       object.x = 1;
     }
     if (object.x < 0) {
       object.x = canvas.width;
     }

     if (object.y >= canvas.height){
       object.y = 1;
     }
     if (object.y < 0){
       object.y = canvas.height;
     }

  }

  // Check for collisions
  function boxes_collide(object1,object2){
    return !(
      ((object1.y + object1.height) < (object2.y)) || //
      (object1.y > (object2.y + object2.height)) ||
      ((object1.x + object1.width) < object2.x) ||
      (object1.x > (object2.x + object2.width))
    );
  }

  function change_background(){
    let r = 256 ;
    let g = 40;
    let b = 50;

    $('body').css("background-color", "rgb("+r+", "+g+", "+b+")");
  }

  //grows other ship
  function grow_size(object){
        object.width += 3;
        object.height += .5;

        if (object.width >= canvas.width){
          object.width = 10;
          object.height = object.width;
        };
    }

    // shinks player when collision is detected
    function shrink_size(object){
          object.width -= .5;
          object.height -= .5;

          if (object.width <= 0 || object.height <= 0 ){
            window.alert("Player Destroyed")

          };
      }

})
