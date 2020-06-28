const User = require('../models/user');
const fs = require('fs');
const path =require('path');
const bcrypt = require('bcryptjs');

module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    
    return res.render('user_sign_up');
}

module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    req.flash('success', 'Logged in Successfully');
    return res.render('user_sign_in')
    
    
    
}


module.exports.profile = function(req,res){
    User.findById(req.user.id, function(err,user){
        return res.render('user_profile',{
            title: "Profile",
            profile_user: user
        });
    })
    
}


//Creating anew user/signup
module.exports.create = async function(req, res){
    if(req.body.password != req.body.confirm_password){
        req.flash('error', "Password don't match");
        return res.redirect('back');
    }
    try{
        let user = await User.findOne({email: req.body.email});
        if(!user){
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(req.body.password, salt);
            await User.create({
                email: req.body.email,
                password: hash,
                name: req.body.name
            });
            req.flash('success', 'Account created');
            return res.redirect('/users/signin');
        }else{
            return res.redirect('back');
        }
    }
    catch(err){
        console.log('Error in creating user' + err);
    }
}

//Sign in and create a session
module.exports.createSession = function(req, res){
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/');
}


//  Update the password from profile page
module.exports.update = async function(req,res){
    try{
        if(req.body.password != req.body.confirm_password){
            req.flash('error', 'Pasword does not match!');
            return res.redirect('back');
        }
        let user = await User.findOne({email: req.user.email});
        if(!user){
            req.flash('error', 'Error in finding the user');
            return res.redirect('back');
        }
        else{
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(req.body.password, salt);
            user.password=hash;
            user.save();
            req.flash('Success', 'Password updated Successfully');
            return res.redirect('back');
        }
    }
    catch(err){
        req.flash('Error', 'Error in updating the password');
        return res.redirect('back');
    }
    
}

module.exports.destroySession = function(req,res){
    req.logout();
     req.flash('success', 'You have logged out!');
    return res.redirect('/');
}



