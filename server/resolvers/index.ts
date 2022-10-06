const usersResolvers = require("../resolvers/User");

module.exports = {
	Query: {
		...usersResolvers.Query,
	},
	Mutation: {
		...usersResolvers.Mutation,
	},
};
