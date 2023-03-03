import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config();

mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);

export const connect = () => mongoose.connect('mongodb+srv://Manish:Qd27yqNJ43hGBP-@letstalk.nviuu.mongodb.net/bunow?retryWrites=true&w=majority')

