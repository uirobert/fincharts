const { gql } = require("apollo-server");

const typeDefs = `#graphql

 type Message{
   text: String
   createdAt: String
   createdBy: String
}

  type User {
	username: String
	email: String
	password: String
	token: String
  }

  input CreateAccountInput {
	username: String
	email: string, 
	password: String
  }

  input CreateAccountInput {
	email: string, 
	password: String
  }



  type Book {

    title: String

    author: String

  }


  # The "Query" type is special: it lists all of the available queries that

  # clients can execute, along with the return type for each. In this

  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {

    books: [Book]

  }

`;

const books = [
	{
		title: "The Awakening",

		author: "Kate Chopin",
	},

	{
		title: "City of Glass",

		author: "Paul Auster",
	},
];

export { typeDefs, books };
