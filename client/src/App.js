import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
//import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import  { setContext } from  '@apollo/client/link/context';

/*const httpLink = createHttpLink({
  uri: '/graphql',
  });

  const authLink = setContext((_, { headers })=> {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  }) ;

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
 });
*/


const client = new ApolloClient({


  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  
   uri: '/graphql'
  

  
})

function App() {
  return (
<ApolloProvider client = {client}>
    <Router>
      <div>
        <Header />
        <div>
          <Route exact path ='/' component={Home} />
          <Route exact path ='/dashboard' component={Dashboard} />
          <Route exact path='/login' component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
</ApolloProvider>
  );
}

export default App;


/*const client = new ApolloClient({


  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  link: createUploadLink({
   uri: '/graphql'
  }),
cache: new InMemoryCache(),
})*/