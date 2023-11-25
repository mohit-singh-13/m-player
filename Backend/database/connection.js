// database link here
import mongoose from "mongoose";

const promise = mongoose.connect(URL);
promise.then(data => {
    console.log('DataBase Connected...');
}).catch(err => {
    console.log('Error during DataBase Connection', err);
})

export default mongoose;
