"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
function App({ pca }) {
    return (<MsalProvider instance={pca}>
      <ProvideAppContext>
        <Router>
          <div>
            <NavBar />
            <Container>
              <ErrorMessage />
              <Route exact path="/" render={(props) => <Welcome {...props}/>}/>
            </Container>
          </div>
        </Router>
      </ProvideAppContext>
    </MsalProvider>);
}
exports.default = App;
