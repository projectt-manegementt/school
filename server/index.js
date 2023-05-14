const connection = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

// const db=mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'root',
//   database:'schoooly'
// })
const db = connection.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "schoooly"
})


app.get('/use',(req,res)=>{
  const sqlSelect="SELECT * FROM courses"
  db.query(sqlSelect, (err, result)=>{
      console.log('erreur',err)
      console.log('result',result)
      res.json(result)
  })

})

app.post('/create', (req, res) => {
  const course  = req.body;
  console.log("creating course", course); 
  db.query(
    `INSERT INTO courses (name, subject, hour) VALUES (?, ?, ?)`,
    [course.name, course.subject, course.hour],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send(error.message);
      } else {
        res.status(200).send(results);
      }
    }
  );
});


app.delete('/course/:name', (req, res) => {
  const name = req.params.name;
  db.query('DELETE FROM courses WHERE name = ?', name, (err, result) => {
    if (err) {
      console.error('Error deleting course:', err);
      res.status(500).send('Error deleting course');
    } else if (!result.affectedRows) { 
      console.log('course not found');
      res.status(404).send('course not found');
    } else {
      console.log('course deleted successfully');
      res.send('course deleted successfully');
    }
  });
});

// this is connection
db.connect(function (err) {
  if (err) console.log("Error to connect to database", err);
  else console.log("Database connected");
});

app.get("/", (req, res) => {
  res.send("ines");
});

app.post("/login",(req,res)=>{
  const q="select * from users  where username = ? "
  const values=[req.body.username]
  db.query(q,values,(err,data)=>{
      if(err){
 res.send(err)}
 
 
 
 const temp=Object.assign({},data)


 if(temp[0]?.password==req.body.password){
  
  return res.status(200).send({succes:true,message:JSON.stringify(data)})
 }else{
  return  res.status(500).send({succes:false})
 }

   } )
  })
    
  app.post("/enregister",(req,res)=>{
     const q="insert into users(username,password) values(?,?)"
      const values=[req.body.username,req.body.password]
      
     db.query(q, values, (err, data) => {
        if (err) return res.send(err);
        return res.send("created");
       });
     });
  
  
 
app.listen(3000, () => {
  console.log("listening on 3000");
});
