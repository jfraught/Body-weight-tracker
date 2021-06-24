import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

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
});

function App() {
  return (
<ApolloProvider client = {client}>
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route exact path ='/dashboard' component={Dashboard} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
</ApolloProvider>
  );
}

export default App;
