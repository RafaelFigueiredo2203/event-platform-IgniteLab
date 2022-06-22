import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4op7pl70q0301xk8vgt2q0r/master',
  cache: new InMemoryCache()
})