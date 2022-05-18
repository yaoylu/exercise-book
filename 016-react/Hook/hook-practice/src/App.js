
import logo from './logo.svg';
import './App.css';
import { FilterableProductTable } from './components/FilterableProductTable';
import { ThemedToolbar } from './components/ThemedToolbar';
import { ThemedToolbarContext } from './components/ThemedToobarContext';
import { ThemedToolbarContextComplex } from './components/ThemedToobarContextComplex';
import { ThemedToolbarContextDeep } from './components/ThemedToobarContextDeep';
import { ThemedToolbarContextFunction } from './components/ThemedToolbarContextFunction';
function App() {
  const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FilterableProductTable products ={PRODUCTS} />
      <ThemedToolbar theme="dark"/>
      <ThemedToolbarContext theme="dark"/>
      <ThemedToolbarContextComplex></ThemedToolbarContextComplex>
      <ThemedToolbarContextDeep></ThemedToolbarContextDeep>
      <ThemedToolbarContextFunction></ThemedToolbarContextFunction>

    </div>
  );
}

export default App;
