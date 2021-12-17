/*jshint esversion: 6 */
const unis = ["Rochester Institute of Technology", "University of Rochester",
	"University at Buffalo", "Buffalo State College", "SUNY Brockport",
	"University at Waterloo", "SUNY Geneseo", "University of Toronto"
];

const zipcodes = ["315", "585", "716"];
//const jsonIn = ["Zucc", "Limewire", "Bezos", "Stop", "Chungus"];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}


function post_About() {
	//var r1 = getRandomInt(4);
	var r2 = getRandomInt(7);
	var r3 = getRandomInt(2);


	var university = unis[r2];

	var number = Math.floor(1000000 + Math.random() * 9000000).toString();
	var pnumber = zipcodes[r3] + number;



	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://csec380-core.csec.rit.edu:86/home.php', true);

	//Send the proper header information along with the request
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function() { // Call a function when the state changes.
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			// Request finished. Do processing here.
		}
	};
	xhr.send(`school=${university}&phone=${pnumber}`);
}
post_About();