//middleware function
const express = require('express')
const app = express()
//function-1
const myLogger = function (req, res, next) {
  console.log('come in function 1');
  next();
}
//Application-level middleware it handles http methods like GET,POST,PUT,DELETE
app.use(myLogger);

app.get('/', (req, res) => {
    console.log('come in function 2');
  res.send('Hello World!')
})

app.listen(3000,()=>{console.log(`server at 3000`)})