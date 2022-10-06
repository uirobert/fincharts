import * as mongoose from "mongoose";

export interface IMessage extends mongoose.Document {
	content: string;
	createdAt: string;
	createdBy?: string;
}

export const messageSchema = new mongoose.Schema<IMessage>({
	content: { type: String },
	createdAt: { type: String },
	createdBy: { type: String },
});

module.exports = mongoose.model<IMessage>("Message", messageSchema);
