import Mongoose from "mongoose";

const Schema = Mongoose.Schema

const userSchema = new Schema({
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    refreshTokenId: { type: String, require: true ,unique: true},

}, { timestamps: true })

const User = Mongoose.model('User', userSchema, 'users')

export default User