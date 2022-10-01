// Resolvers define how to fetch the types defined in your schema.
import { coins } from "./typeDefs";
const resolvers = {
    Query: {
        coin: () => coins,
    },
};
export { resolvers };
