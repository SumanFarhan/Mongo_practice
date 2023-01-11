const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app =express()

app.use(cors())
mongoose.set('strictQuery',false)
try{
mongoose.connect('mongodb+srv://root:root@cluster0.vyb7aac.mongodb.net/todoUsers',{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(console.log('Connection Established'))
 }catch(error){
    console.log('Connection Error')
 }

 process.on('UnhandledRejection', error => {
    console.log('DB error', error);
});
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let port=process.env.PORT || 3002

app.listen(port,()=>{
    console.log(`App listening on ${port}`)
})