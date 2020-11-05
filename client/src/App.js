import './App.css';
import logo from './logo.png';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Launches } from './components/Launches';
import { Launch } from './components/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <div className="Container">
            <img
              src={logo}
              alt="SpaceX"
              style={{ width: 300, display: 'block', margin: 'auto' }} />
            <Route path="/" exact>
              <Launches />
            </Route>
            <Route path="/launch/:flight_number" exact>
              <Launch />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}
