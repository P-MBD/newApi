const { gql } = require('apollo-server-express');
const typeDefs = gql`
type Query {
    user : String
    login(phone: String!, password: String!): operation!
}
type Mutation {
    register(phone : String! , password : String! ) : operation!
}
type operation {
    status : Int,
    message : String
}
`;
module.exports = typeDefs