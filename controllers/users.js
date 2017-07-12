const express = require('express');
const router = express.Router();
const User = require('../models/users');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

router.post('/register',(req,res,next)=>{    
    let newUser = new User({
        name : req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    });
    
    User.addUser(newUser, (err,user)=>{
        if(err){
            res.json({success:false, msg : 'Failed to register'});
        }
        else{
            res.json({success:true, msg:'User Registered'});
        }
    }); 
});

router.post('/authenticate',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    User.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg : 'User not found'});
        }
        
        User.comparePassword(password,user.password,(err,res2)=>{
            if(err) throw err;
            if(res2){
                const token = jwt.sign(user, config.secret, {
                expiresIn: 604800 // 1 week
                });

            return  res.json({
                    success:true,
                    token:'JWT '+token,
                    user:{
                        id:user.id,
                        name:user.name,
                        username:user.username,
                        email:user.email
                    } 
                });
            }
            else{
                return res.json({success:false,msg:'Wrong Password'});
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({'msg': 'hiii'});
});

module.exports = router; 