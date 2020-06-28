module.exports.home= async function(req,res){
    if(req.isAuthenticated()){
        return res.render('welcome');
    }
    else{
        return res.render('home')
    }
   
    // try{
    //     return res.render('home');
    // }
    // catch(err){
    //     console.log('Error',err);
    //     return;
    // }
   
}

