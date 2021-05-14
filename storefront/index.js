const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.static(__dirname));


// used to read data
app.use(express.urlencoded({
  extended: true
}))


// use this to see the data
// take this out after debuging everthing
app.get('/data1',(req,res) => {
  res.send(accounts);
})

app.get('/data2',(req,res) => {
  res.send(cart);
})


// store the accounts
// has one account already in to test
const accounts = []

// register the account if the password match the re enter password
app.post('/register',(req,res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const Email = req.body.Email;
  const userName = req.body.userName;
  const passW = req.body.passW;
  
  var hashPw = 0, i, chr;
  for (i = 0; i < passW.length; i++) {
    chr   = passW.charCodeAt(i);
    hashPw  = ((hashPw << 5) - hashPw) + chr;
    hashPw |= 0; // Convert to 32bit integer
  }
  

  let account = {
    firstName,
    lastName,
    Email,
    userName,
    hashPw
  }
  
  if(passW == req.body.rePassW){
    accounts.push(account);
    res.send("Create an account for username: " + account.userName);
  }else{
    res.send("Did not create an account");
  }
})

// authenticate username and password info
app.post('/login',(req,res) => {
  for(var item in accounts){
    let user = accounts.find(a => a.userName === req.body.userName);
    let passW = req.body.passW

    var hashPw = 0, i, chr;
    for (i = 0; i < passW.length; i++) {
      chr   = passW.charCodeAt(i);
      hashPw  = ((hashPw << 5) - hashPw) + chr;
      hashPw |= 0; // Convert to 32bit integer
    }

    console.log(user.hashPw);
    console.log(hashPw);

    let validate = user.hashPw === hashPw;

    if(validate){
      res.send("Welcome " + user.firstName);
      console.log(account);
      return;
    }
  }
  res.send("Account not found.");
})

//create an empty cart
const cart = []

// get data of the cart
app.post('/pay',(req,res) => {
  const cartData = req.body.cartData;
  
  if(cartData != ""){
    cart.push(cartData);
    res.send("Cart Received!");
  }else{
    res.send("Error receiving cart!");
  }
})

//opens the server on port 3000
const port = '3000';
app.listen(port, () => console.log('Server started on Port ' + port + '. Press Crtl C to stop.'));
