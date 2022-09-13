import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const add = () => {
    dispatch({ type: 'ADD', payload: 10 })
  }

  return (
    <div>
      <h2>React Redux : Counter App</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add}>Add 10 more</button>
      <ul>
        <li><p>Store: <b>createStore()</b></p></li>
        <li><p>Reducer Function: <b>reducerFn(state, action)</b></p></li>
        <li><p>Reducer Function must return a state</p></li>
        <li><p>pass Reducer Function to store: <b>createStore(reducerFn)</b></p></li>
        <li><p>import <b>Provider</b> from react-redux</p></li>
        <li><p>Wrap the universe inside <b>Provider tag</b></p></li>
        <li><p>Pass the store to Provider in <b>store='store'</b> prop</p></li>
        <li><p>*** <b>useSelector()</b> *** to access the store </p></li>
        <li><p>*** <b>useDispatch()</b> *** to dispatch an action to the reducer </p></li>

      </ul>
    </div>
  );
}

export default App;
