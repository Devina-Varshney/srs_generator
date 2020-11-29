const mongoose = require('mongoose')
const db = 'mongodb+srv://devina:12devina@cluster0.hjwtn.mongodb.net/test?retryWrites=true&w=majority'  
mongoose.connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));