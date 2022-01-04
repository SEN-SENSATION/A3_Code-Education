const { buildSchema } = require("graphql");
const gql = String.raw;

const schema = gql`
  type Post {
    _id: ID!
    title: String!
    content: String!
    imageUrl: String!
    creator: User!
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    status: String!
    posts: [Post!]
  }

  input UserInputData {
    email: String!
    password: String!
    name: String!
  }

  type RootMutation {
    createUser(userInput: UserInputData): User!
  }

  type RootQuery {
    hello: String
  }

  schema {
    mutation: RootMutation
    query: RootQuery
  }
`;

module.exports = buildSchema(schema);
