import { ApolloServer, gql } from "apollo-server";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongo from "mongodb";
const { MongoClient, ObjectId } = mongo;

dotenv.config();

const { MONGO_CS, DB_NAME, JWT_SECRET } = process.env;

const getJWT = (user) =>
  jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7 days" });

const getUserFromToken = async (token, db) => {
  if (!token) {
    return null;
  }
  const tokenData = jwt.verify(token, JWT_SECRET);

  if (!tokenData?.id) {
    return null;
  }
  const user = await db
    .collection("Users")
    .findOne({ _id: ObjectId(tokenData.id) }, { fields: { password: 0 } });
  return user;
};
const start = async () => {
  const client = new MongoClient(MONGO_CS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db(DB_NAME);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const user = await getUserFromToken(req.headers.authorization, db);
      return { db, user };
    },
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

const typeDefs = gql`
  type Query {
    getTopics: [Topic!]
    getTopicById(topicId: ID!): Topic
  }

  type Mutation {
    signUp(input: SignUpInput!): AuthUser!
    signIn(input: SignInInput!): AuthUser!
    createTopic(title: String!): Topic!
    updateTopic(topicId: ID!, title: String!): Topic!
    deleteTopic(topicId: ID!): SimpleResponse!
    addResponder(topicId: ID!, userId: ID!): Topic!
    createItem(topicId: ID!, name: String!, image: String): Item!
    updateItem(itemId: ID!, name: String!, image: String): Item!
    deleteItem(itemId: ID!): SimpleResponse!
  }

  input SignUpInput {
    email: String!
    password: String!
    name: String!
    avatar: String
  }

  input ItemInput {
    name: String!
    image: String
  }

  input SignInInput {
    email: String!
    password: String!
  }

  type SimpleResponse {
    success: Boolean
  }

  type AuthUser {
    user: User!
    token: String!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String
  }

  type Topic {
    id: ID!
    createdAt: String!
    creator: User!
    title: String!
    responderIds: [ID!]
    responders: [User!]
    items: [Item!]
  }

  type Item {
    id: ID!
    topicId: ID!
    topic: Topic!
    name: String!
    image: String
  }
`;

const resolvers = {
  Query: {
    getTopics: async (_, __, { db, user }) => {
      if (!user) {
        throw new Error("Not authorized");
      }
      return await db.collection("Topics").find({ userIds: user.id }).toArray();
    },

    getTopicById: async (_, { topicId }, { db }) => {
      return await db.collection("Topics").findOne({ _id: ObjectId(topicId) });
    },
  },
  Mutation: {
    signUp: async (_, { input }, { db }) => {
      // todo: add validation
      var salt = await bcrypt.genSalt(10);
      const hashedPassword = bcrypt.hashSync(input.password, salt);
      const user = {
        ...input,
        password: hashedPassword,
      };

      const result = await db.collection("Users").insert(user);
      return {
        user: result.ops[0],
        token: getJWT(user),
      };
    },
    signIn: async (_, { input }, { db }) => {
      // todo: validation
      const user = await db.collection("Users").findOne({ email: input.email });
      const isValid =
        user && bcrypt.compareSync(input.password, user?.password);

      if (!isValid) {
        throw new Error("Invalid request");
      }
      return {
        user,
        token: getJWT(user),
      };
    },
    createTopic: async (_, { title }, { db, user }) => {
      if (!user) {
        throw new Error("Not authorized");
      }

      const topic = {
        title,
        createdAt: new Date().toUTCString(),
        creator: user,
        responderIds: [user._id],
        responders: [],
      };

      const result = await db.collection("Topics").insert(topic);
      return result.ops[0];
    },
    updateTopic: async (_, { topicId, title }, { db, user }) => {
      if (!user) {
        throw new Error("Not authorized");
      }
      const topic = await db
        .collection("Topics")
        .findOne({ _id: ObjectId(topicId) });
      const isValid =
        topic && topic.creator._id.toString() === user._id.toString();
      if (!isValid) {
        throw new Error("Bad request");
      }
      await db
        .collection("Topics")
        .updateOne({ _id: ObjectId(topicId) }, { $set: { title } });

      return await db.collection("Topics").findOne({ _id: ObjectId(topicId) });
    },
    deleteTopic: async (_, { topicId }, { db, user }) => {
      if (!user) {
        throw new Error("Not authorized");
      }

      const response = await db
        .collection("Topics")
        .removeOne({ _id: ObjectId(topicId) });
      return { success: response.result.ok == 1 };
    },
    addResponder: async (_, { topicId, userId }, { db, user }) => {
      if (!user) {
        throw new Error("Not authorized");
      }
      const topic = await db
        .collection("Topics")
        .findOne({ _id: ObjectId(topicId) });

      const isValid =
        topic && topic.creator._id.toString() === user._id.toString();
      if (!isValid) {
        throw new Error("Bad request");
      }
      console.log(topic.responderIds);
      if (
        topic.responderIds.find((id) => {
          id?.toString() === userId.toString();
        })
      ) {
        return topic;
      }
      await db
        .collection("Topics")
        .updateOne(
          { _id: ObjectId(topicId) },
          { $push: { responderIds: ObjectId(userId) } }
        );

      return await db.collection("Topics").findOne({ _id: ObjectId(topicId) });
    },
    createItem: async (_, { topicId, name, image }, { db, user }) => {
      if (!user) {
        throw new Error("Not authorized");
      }

      const item = {
        name,
        image,
        topicId: ObjectId(topicId),
      };

      const result = await db.collection("Items").insert(item);
      console.log(result.ops[0]);
      return result.ops[0];
    },
    updateItem: async (_, { itemId, name, image }, { db, user }) => {
      if (!user) {
        throw new Error("Not authorized");
      }
      const item = await db
        .collection("Items")
        .findOne({ _id: ObjectId(itemId) });
      if (!item) {
        throw new Error("Bad request");
      }

      await db
        .collection("Items")
        .updateOne({ _id: ObjectId(itemId) }, { $set: { name, image } });

      return await db.collection("Items").findOne({ _id: ObjectId(itemId) });
    },
    deleteItem: async (_, { itemId }, { db, user }) => {
      if (!user) {
        throw new Error("Not authorized");
      }
      const item = await db
        .collection("Items")
        .findOne({ _id: ObjectId(itemId) });

      if (!item) {
        throw new Error("Bad request");
      }
      const response = await db
        .collection("Items")
        .removeOne({ _id: ObjectId(itemId) });
      return { success: response.result.ok == 1 };
    },
  },
  User: {
    id: ({ _id }) => _id,
  },
  Topic: {
    id: ({ _id }) => _id,
    responders: async ({ responderIds }, _, { db }) => {
      return await Promise.all(
        responderIds.map((userId) =>
          db.collection("Users").findOne({ _id: userId })
        )
      );
    },
    items: async ({ _id }, __, { db }) => {
      console.log(_id);
      return db
        .collection("Items")
        .find({ topicId: ObjectId(_id) })
        .toArray();
    },
  },
  Item: {
    id: ({ _id }) => _id,
    topic: async ({ topicId }, _, { db }) => {
      return await db.collection("Topics").findOne({ _id: ObjectId(topicId) });
    },
  },
};

start();
