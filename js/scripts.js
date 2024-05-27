console.log("Hoy! Welcome to my Portfolio Site")

var age = 39;
var name = "John";

var personParent = {
  name: name,
  age: age,
  child: {
    name: "Sara"
  }
};
var person = john
function testFunction() {
  person.age = 40;
  //do something else
}

console.log(personParent["name"]); // The same as personParent.name
var weWantThisField = "age";
console.log(personParent[weWantThisField]); // The same as personParent.age



$(document).ready(function() {
  $('.navtoggle').click(function() {
    $('.navigation').slideToggle('fast');
  });
});

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
