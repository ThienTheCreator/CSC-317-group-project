function store() {
    var usrName = document.getElementById('uName').value;
    var usrPw = document.getElementById('uPswrd').value;
    var reusrPw = document.getElementById('reuPswrd').value;
    
    console.log(usrName);
    console.log(usrPw);
    console.log(reusrPw);

    if(usrPw == reusrPw){
        console.log(usrPw==reusrPw);
        let stored_users = JSON.parse(localStorage.getItem('users'));
        if(stored_users) {
            stored_users.push({name: usrName, password: usrPw});
            localStorage.setItem('users', JSON.stringify(stored_users));
        } else {
            localStorage.setItem('users', JSON.stringify([{name: usrName, password: usrPw}]));
        }
    } else {
        return alert('Re-entered password does not match password');
    }
}

function check() {
    var usrName = document.getElementById('uName').value;
    var usrPw = document.getElementById('uPswrd').value;



    let stored_users = JSON.parse(localStorage.getItem('users'))
    if(stored_users) {
        for (let u = 0; u < stored_users.length; u++){
            if (usrName == stored_users[u].name && usrPw == stored_users[u].password) {
                alert('You are logged in ' + usrName);
                try {return window.location = "../index.html";}
                catch(e) {console.log(e)}
             }
        }
    } else {
        localStorage.setItem('users', '[]');
    }

    return alert('Access denied. Valid username and password is required.');
}
