import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
	username: string;
	email: string;
	token: string;
}

export const UserSchema = new mongoose.Schema<IUser>({
	username: { type: String, default: null },
	email: { type: String, unique: true },
	token: { type: String },
});

module.exports = mongoose.model<IUser>("User", UserSchema);
