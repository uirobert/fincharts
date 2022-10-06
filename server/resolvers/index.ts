const usersResolvers = require("../resolvers/User");
const testResolver = require("../resolvers/testdata");

module.exports = {
	Query: {
		...usersResolvers.Query,
	},
	Mutation: {
		...usersResolvers.Mutation,
	},
};

module.exports = {
	Query: {
		...testResolver.Query,
	},
};
