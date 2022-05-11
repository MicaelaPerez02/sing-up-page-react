import './App.css';
import { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordRepeat: '',
  checkbox: false,
};

function reducer(state, action){ 
    return {...state, [action.input]: action.value};
}

function validateState(state){
  return state.password === state.passwordRepeat 
  && state.checkbox
  && state.password.length > 3;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick(event){
    event.preventDefault();
    alert(`Hey ${state.name}! you are now registered`);
  }

  function onChance(event){ 
    //recive the action and use to update the state
    const {name, value, checked} = event.target;

    const action = {
      input : event.target.name,
      value : name === "checkbox" ? checked : value
    }
    dispatch(action);
  }



  return (
    <div className="App">
      <div className="RegisterFormCont">
        <h2 className="RegisterHeadlineCont"> Register </h2>
          <form className="RegisterForm">
            <input
              className="TextInput" type="text" name="name" placeholder="Name" onChange={onChance}
            />
            <input
              className="TextInput" type="text" name="email" placeholder="Email" onChange={onChance}
            />
            <input
              className="TextInput" type="password" name="password" placeholder="Password" onChange={onChance}
            />
            <input
              className="TextInput" type="password" name="passwordRepeat" placeholder="Password Repeat" onChange={onChance}
            />

            <label className="CheckboxLabel">
              <input 
                className="Checkbox" type="checkbox" name="checkbox" onChange={onChance}
              />
              Accept terms of Use:
            </label>
            <button 
            disabled={!validateState(state)}
            onClick={handleClick}
            className={!validateState (state) ? "Disabled" : null}> 
            Register 
            </button>
          </form>


      </div>
    </div>
  );
}

export default App;
