const express = require('express') 
const mysql = require('mysql') 
const db = mysql.createConnection({  
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fortest'
})
db.connect()
let app = express() 

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });
// Select Data
app.post('/post',(req,res ,next) =>{

            let abc =  req.body
            var sql = `INSERT INTO user ( Name, S_name ) VALUES ?`;    //insrt ข้อมูล ด้วยvalue
            let values = [ //insrt ข้อมูล ด้วยvalue
                [abc.Name,abc.S_name], //insrt ข้อมูล ด้วยvalue
              ]

             let Conquery =  db.query(sql,[values],function(err, results){
                if (err) throw err;
                let sql = 'SELECT * FROM user' // แสดงข้อมูลล่าสุด
                let query = db.query(sql, (err, results) => { 
                    if (err) throw err  
                    console.log(results) 
                    res.json(results)   
                })
              })
            
            // res.json(values)
            // res.send(abc)
            // return "xxxasdas";
})
app.get('/users', (req, res) => {   
    // let sql = 'SELECT * FROM user' 
    // let query = db.query(sql, (err, results) => { 
    //     if (err) throw err  
    //     console.log(results) 
    //     res.json(results)   
    // })
            // let data = [{'ID':157}]
       
            // let sql = `DELETE FROM user WHERE ID = ?`;
            // // let values = [[data]]
            // for (const itemdata of data) {
            //         let values = [itemdata.ID]
            //         // console.log(values);
            //             let Conquery =  db.query(sql,[values],function(err, results){
            //             if (err) throw err;
            //             let datasql = 'SELECT * FROM user' // แสดงข้อมูลล่าสุด
            //             let query = db.query(datasql, (err, require) => { 
            //                 if (err) throw err  
            //                 console.log(require)  //ออกที่terminal
            //                 res.json(require)    //ออกที่webapi
            //             })
            //         })
            // }
    
                    //     let Conquery =  db.query(sql,[obj.ID],function(err, results){
                    //     if (err) throw err;
                    //     let sql = 'SELECT * FROM user' // แสดงข้อมูลล่าสุด
                    //     let query = db.query(sql, (err, results) => { 
                    //         if (err) throw err  
                    //         console.log(results) 
                    //         res.json(results)   
                    //     })
                    // })
       
            //  var sql = `INSERT INTO user ( Name, S_name ) VALUES ?`;    //insrt ข้อมูล ด้วยvalue
            // let values = [ //insrt ข้อมูล ด้วยvalue
            //     ["xxx",'Ubon city'], //insrt ข้อมูล ด้วยvalue
            //     ['RedduckOK', 'Trat city'], //insrt ข้อมูล ด้วยvalue
            //     ['Somsri', 'Nonthaburi city'], //insrt ข้อมูล ด้วยvalue
            //     ['Somporn', 'Prachinburi'], //insrt ข้อมูล ด้วยvalue
            //     ['Owen', 'Manchestud city'] //insrt ข้อมูล ด้วยvalue
            //   ]
            //  let Conquery =  db.query(sql,[values],function(err, results){
            //     if (err) throw err;
            //     let sql = 'SELECT * FROM user' // แสดงข้อมูลล่าสุด
            //     let query = db.query(sql, (err, results) => { 
            //         if (err) throw err  
            //         console.log(results) 
            //         res.json(results)   
            //     })
            //   })

                let sql = 'SELECT * FROM user' // แสดงข้อมูลล่าสุด
                let query = db.query(sql, (err, results) => { 
                    if (err) throw err  
                    console.log(results) 
                    res.json(results)   
                    // return results;
                })

})
app.listen('8080', () => {    
    console.log('start port 8080')
})