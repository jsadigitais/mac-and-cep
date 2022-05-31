import mysql from 'mysql2'

async function conn() {
  
  await mysql.createPool({
    connectionLimit:10,
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b85c76285f22b0',
    password: 'c357c966',
    database: 'heroku_3dd3b805c4b19e5'
  });
  
}  

/*
  conn.connect(function(err){
    if(err){
      console.log(err)
      return
    }
    console.log('conectou ao mysql puro')
  })
*/
  export default conn;
