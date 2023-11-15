// const URL = 'mongodb+srv://mohit_singh_13:hellomohit123@cluster0.rrtthhn.mongodb.net/?retryWrites=true&w=majority';
const URL = 'mongodb+srv://mohit:mohit123@cluster0.adj712w.mongodb.net/?retryWrites=true&w=majority';
import mongoose from "mongoose";

const promise = mongoose.connect(URL);
promise.then(data => {
    console.log('DataBase Connected...');
}).catch(err => {
    console.log('Error during DataBase Connection', err);
})

export default mongoose;