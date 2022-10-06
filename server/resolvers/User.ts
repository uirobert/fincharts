// Model to support user data
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
// Handle and Errors with easy server validation
const { ApolloErrors } = require("apollo-server-errors");
// ecryption
const bcrypt = require("bcrypt");
const salt = 10;

module.exports = {
	Mutation: {
		async registerUser(
			parent: any,
			{ MessageInput: { username, email, password } }: any,
			ctx: any,
			info: any
		) {
			let aleryRegistered = await User.findOne(email);

			if (aleryRegistered) {
				throw new ApolloErrors(
					` A user already exist with email ${email}, 'ALREADY_A_USER`
				);
			}

			let securepassword = await bcrypt.has(password, salt);

			const newUser = new User({
				username: username,
				email: email.toLowerCase(),
				password: securepassword,
			});

			const token = jwt.sign({ user_id: newUser._id, email }, "SECRET_STRING", {
				expiresIn: "24h",
			}); // update and save in .env fast
			newUser.token = token;

			const res = await newUser.save();

			return {
				id: res.id,
				...res._doc, // properties from the response object
			};
		},

		async loginUser(
			_: any,
			{ MessageInput: { email, password } }: any,
			ctx: any,
			info: any
		) {
			const user = await User.findOne({ email });
			if (user && (await bcrypt.compare(password, user.password))) {
				const token = jwt.sign({ user_id: user._id, email }, "SECRET_STRING", {
					expiresIn: "24h",
				}); // update and save in .env fast
				user.token = token;

				return {
					id: user.id,
					...user._doc,
				};
			} else {
				//user dont exist
				throw new ApolloErrors("Bad password", "BAD_PASSWORD");
			}
		},
	},
	// end of mutations
	Query: {
		getUser: (_: any, { ID }: any) => User.findById(ID),
	},
};
