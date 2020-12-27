const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://user:pwd@321@ssquaresolution.zx7de.mongodb.net/libraryapp?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true });
const Schema=mongoose.Schema;

const BookSchema=new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});

var BookData=mongoose.model('bookdata',BookSchema);

module.exports=BookData;