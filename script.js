var ndpSongs = ['One People, One Nation, One Singapore',
               'Home',
               'Where We Belong',
               'Stand Up for Singapore',
               'Count on Me, Singapore',
               'Where I Belong',
               'My Island Home',
               'In a Heartbeat',
               'One Singapore'];
var mrtStations = ['Woodlands',
                   'City Hall',
                   'Jurong East',
                   'Bishan',
                   'Eunos',
                   'Mountbatten',
                   'Khatib',
                   'Punggol',
                   'Pasir Ris']
var singaporeFood = ['White Carrot Cake',
                     'Hokkien Prawn Mee',
                     'Mee Soto',
                     'Black Pepper Crab',
                     'Hainanese Chicken Rice',
                     'Laksa',
                     'Mee Goreng',
                     'Nasi Lemak',
                     'Otah']
var kopitiam = ['Yuan Yang',
                'Teh Peng',
                'Kopi O',
                'Teh Tarik',
                'Teh Kosong',
                'Barley',
                'Bandung',
                'Milo Dinosaur',
                'Honey Lemon']
var singaporeSights = ['Mustafa Centre',
                       'Changi Airport',
                       'Chomp Chomp Food Market',
                       "People's Park Complex",
                       'Ngee Ann City',
                       'SCAPE',
                       'Marina Bay Floating Stadium',
                       'Coney Island']
var myArray = [];
var activeView = "charades";

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
function cat1() {
  myArray = ndpSongs;
  generate();
}
function cat2() {
  myArray = mrtStations;
  generate();
}
function cat3() {
  myArray = singaporeFood;
  generate();
}
function cat4() {
  myArray = kopitiam;
  generate();
}
function cat5() {
  myArray = singaporeSights;
  generate();
}
function catCustom() {
  var text = document.getElementById('textarea').value;
  myArray = text.split('\n');
  generate();
}
function generate() {
  var random = myArray[Math.floor(Math.random() * myArray.length)];
  var item = document.getElementById(activeView+"Item");
  if (item.innerHTML == random) {
    generate()
  } else {
    item.innerHTML = random;
    if (myArray == ndpSongs) {
      random = "NDP "+random;
    }
    item.href="http://images.google.com/search?q="+random+"&tbm=isch";
  }
}
function resize() {
  var textarea = document.getElementById("textarea");
  var buffer = 5;
  textarea.style.height = 0;
  textarea.style.height = textarea.scrollHeight + buffer;
  textarea.style.width = 0;
  textarea.style.width = textarea.scrollWidth + buffer;
}
function revealCharades() {
  var custom = document.getElementById("custom");
  custom.classList.remove("fullwidthheight");
  custom.classList.add("zeroheight");

  var charades = document.getElementById("charades");
  charades.classList.remove("zeroheight");
  charades.classList.add("fullwidthheight");
  activeView = "charades"
}
function revealCustom() {
  var charades = document.getElementById("charades");
  charades.classList.remove("fullwidthheight");
  charades.classList.add("zeroheight");

  var custom = document.getElementById("custom");
  custom.classList.remove("zeroheight");
  custom.classList.add("fullwidthheight");
  activeView = "custom"
}
