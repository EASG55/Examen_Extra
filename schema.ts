export const typeDefs = `#graphql

type Character{
    id: ID!,
    name: String!,
    status: String!,
    species: String!,
    type: String!,
    gender: String!,
    origin: Origin!,
    location: Location!,
    image: String!,
    episode: [String]!,
    url: String!,
    created: String!
}

type Origin{
    name: String!,
    url: String!
}
type Location{
    name: String!,
    url: String!
}

type Query {
    character(id: ID!): Character 
    charactersByIds(ids: [ID!]!): [Character] 
}`;