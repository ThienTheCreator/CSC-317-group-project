const express = require('express');
const app = express();
app.use(express.json());


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
  
  let account = {
    firstName,
    lastName,
    Email,
    userName,
    passW
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
    let validate = user.passW === req.body.passW;

    if(validate){
      res.send("Welcome " + user.userName + ",");
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
