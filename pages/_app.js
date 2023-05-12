import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
 <Component {...pageProps} />

    </ApolloProvider>
  )
  
 
}
