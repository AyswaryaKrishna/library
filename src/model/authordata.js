const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://user:pwd@321@ssquaresolution.zx7de.mongodb.net/libraryapp?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
const Schema=mongoose.Schema;

const AuthorSchema=new Schema({
    author:String,
    country:String,
    category:String,
    image:String
});

var AuthorData=mongoose.model('authordata',AuthorSchema);

module.exports=AuthorData;