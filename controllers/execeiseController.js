exports.two = (req, res) =>
  res.send(
    `<body>
  <ol style="list-style-type: none;">
  <li>Javascipt is:</li>
      <ul style="list-style-type:disc">
      <li>cool</li>
      <li>funny</li>
      <li>weird</li>
  </ul>
  </ol>
  </body>`
  );

exports.three = (req, res) =>
  res.send(
    `Hello... 
    <br>
    <a href ="/world">next</a>
`
  );

exports.four = (req, res) =>
  res.send(
    `World... 
    <br>
    <a href ="/hello">previous</a>
`
  );

exports.temp = (req, res) => {
  const celsius = req.query.celsius;
  const fahrenheit = (celsius * 9) / 5 + 32;
  res.send(`<h1>${celsius}°C = ${fahrenheit}°F</h1>`);
};
exports.colour = (req, res) => {
  const bg = req.query.bg;
  const fg = req.query.fg;
  res.send(
    `<body style="background-color:${bg}"><h1 style = "text-align:center;color:${fg};">Hello</h1></body>`
  );
};
exports.seclect = (req, res) => {
  const mysql = require("mysql");
  const connection = require('../models/db')
  const sql = "select * from majors";
  connection.query(sql,(error,results,fields)=>{
      if(error){
        throw error
      }
      console.log(results)
      const context = { results }
      res.render('majorTable',context)
  })
  connection.end()
};
