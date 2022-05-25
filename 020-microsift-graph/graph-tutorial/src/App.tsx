import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function App({ pca }: AppProps) {
  return(
    <MsalProvider instance={ pca }>
      <ProvideAppContext>
        <Router>
          <div>
            <NavBar />
            <Container>
              <ErrorMessage />
              <Route exact path="/"
                render={(props) =>
                  <Welcome {...props} />
                } />
            </Container>
          </div>
        </Router>
      </ProvideAppContext>
    </MsalProvider>
  );
}
