import './App.css';

const Person = (props) => {
   return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: Holala {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
)
   }

  const App = () => {  
    return (
    <div className="App">
    
    </div>
  );
}

export default App;
