const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://user:pwd@321@ssquaresolution.zx7de.mongodb.net/libraryapp?retryWrites=true&w=majority',{useNewUrlParser:true,useNewUnifiedTopology:true});
const Schema=mongoose.Schema;

const SignUpSchema=new Schema({
    user:String,
    email:String,
    password:String,
    phone:String
});

var signupdata=mongoose.model('userRegistration',SignUpSchema);

module.exports=signupdata;