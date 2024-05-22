const mongoose = require("mongoose");
const connection = async(req,res)=>{
    try {
        await mongoose
        .connect(
            "mongodb+srv://Nidhi1502_MK:Nidhi@74270@cluster0.xqqkyrv.mongodb.net/Todo Full Stack"
        )
    .then(()=>{
    console.log("Connected");
});
        
    } catch (error) {
       console.log("Not Connected");
    }
};
connection();