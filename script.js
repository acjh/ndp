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
function generate() {
  var random = myArray[Math.floor(Math.random() * myArray.length)];
  var item = document.getElementById("item");
  item.innerHTML = random;

  var ndp = '';
  if (myArray == ndpSongs) {
    ndp = "NDP ";
  }
  item.href="http://images.google.com/search?q="+ndp+random+"&tbm=isch";
}
