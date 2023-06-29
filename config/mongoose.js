import mongoose from "mongoose";
const CONNECTION_URL = "mongodb+srv://prakharsh3:prakharsh@gymdata.xcst7p9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongo has connected succesfully')
}).catch((error) => { console.log(error) })