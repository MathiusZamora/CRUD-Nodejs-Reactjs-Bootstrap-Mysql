const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

app.use(cors());
app.use(express.json());




const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"clientes_crud"
});

app.post("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const fecha = req.body.fecha;
    const membresia = req.body.membresia;
    const telefono = req.body.telefono;

    db.query('INSERT INTO clientes(nombre,fecha,membresia,telefono) VALUES(?,?,?,?)', [nombre,fecha,membresia,telefono],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("empleado registrado con exito!!");
            }

        }
        );
});

app.get("/clientes",(req,res)=>{

    db.query('SELECT * FROM clientes',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
            }

        }
        );
});


app.listen(3001,()=>{
    console.log("corriendo en el puerto 3001")
})