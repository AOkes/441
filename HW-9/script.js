$(document).ready(function(){

var more_abilities = new Array();


  $.getJSON("https://aokes.github.io/441/HW-9/data/sample.json", function(data){

        $.each(data, function(i, field){

        var names = new Ability(field.name, field.url);

        more_abilities.push(names);
      });
    });

// Random selection from array after button is pressed
  $("#btn_info").click(function(){

  let random_num = Math.floor(Math.random() * more_abilities.length);

          $("#name").text("Name: " + more_abilities[random_num].name);
          $("#url").text(" Url: " + more_abilities[random_num].url);

    });

})



// Puts data into an array
class Ability {

  constructor(name, url){

    this.name = name;
    this.url = url;
  }
    toString(){
      let str;
      str = "Name: " + this.name + " Url: " + this.url + "<br>";
      return str;
    }

    get details(){
      return "Name: " + this.name + " Url: " + this.url + "<br>";
    }
}
