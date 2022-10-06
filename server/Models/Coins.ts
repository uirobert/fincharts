import * as mongoose from "mongoose";

export interface ICoin extends mongoose.Document {
	symbol: string;
	icon_url: string;
	price: string;
	name: string;
	max_supply: string;
}

export const CoinSchema = new mongoose.Schema<ICoin>({
	symbol: { type: String },
	icon_url: { type: String },
	price: { type: String },
	max_supply: { type: String },
});

module.exports = mongoose.model<ICoin>("Coin", CoinSchema);
