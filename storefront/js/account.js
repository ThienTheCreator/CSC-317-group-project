if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var loggedIn = document.getElementById("loggedIn");
    var logOutButton = document.getElementById("logOut");
    var siteUsrName = localStorage.getItem('siteName');
    
    if (siteUsrName){
        loggedIn.innerHTML = "Hello " + siteUsrName;
	logOutButton.style.display = "block";
    } else {
        logOutButton.style.display = "none";
    }
}

console.log(localStorage.getItem('siteName'));

function store() {
    var usrName = document.getElementById('uName').value;
    var usrPw = document.getElementById('uPswrd').value;
    var reusrPw = document.getElementById('reuPswrd').value;

    if(usrPw == reusrPw){
        console.log(usrPw==reusrPw);
        let stored_users = JSON.parse(localStorage.getItem('users'));
        if(stored_users) {
            stored_users.push({name: usrName,});
            localStorage.setItem('users', JSON.stringify(stored_users));
	    return window.location = "../index.html";
        } else {
            localStorage.setItem('users', JSON.stringify([{name: usrName,}]));
            return window.location = "../index.html";
        }
    } else {
        return alert('Re-entered password does not match password');
    }
}

function check() {
    var usrName = document.getElementById('uName').value;



    let stored_users = JSON.parse(localStorage.getItem('users'))
    if(stored_users) {
        for (let u = 0; u < stored_users.length; u++){
            if (usrName == stored_users[u].name) {
                alert('You are logged in ' + usrName);
		localStorage.setItem('siteName', usrName);
		return window.location = "../index.html";

             }
        }
    } else {
        localStorage.setItem('users', '[]');
    }

    return alert('Access denied. Valid username and password is required.');
}

function logOut() {
	return localStorage.setItem('siteName', "");
}
