// wrap asyc error handlear for try and catch

function wrapAsunc(fn) {
   return function (req,res,next) {
        fn(req,res,next).catch((err)=>{
            next(err);
        });
    }
}


module.exports=wrapAsunc;