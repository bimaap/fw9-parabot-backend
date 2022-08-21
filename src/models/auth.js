const db = require('../helpers/db.js');


exports.createRegister = (data,cb) =>{
  db.query('BEGIN', err=>{
    if(err){
      console.log(err);
      cb(err);}
    else{
      const queryUserCostumer = 'INSERT INTO users (email, password,role) VALUES ($1, $2, $3) RETURNING*';
      const valUser = [data.email, data.password,data.role];
      db.query(queryUserCostumer,valUser,(err,res)=>{
      if(err){
        cb(err);
      }else{
        const queryProfileCostumer = 'INSERT INTO profiles (user_id) VALUES ($1)';
        const valProfile = [res.rows[0].id];
        db.query(queryProfileCostumer,valProfile,(err)=>{
          if(err){
            cb(err);
          }else{
            cb(err,res);
            db.query('COMMIT',err=>{
              if(err){
                console.log(err);
              }
            });
            }
          });
        }
      });
    }
  });
}


exports.getUserByEmail = (email, cb) => {
  const quer = 'SELECT * FROM users WHERE email=$1';
  const value = [email];
  db.query(quer, value, (err, res)=>{
    cb(err, res);
  });
};
