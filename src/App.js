import './App.css';

function App() {
  return (
    <div className="App">
      <div className="RegisterFormCont">
        <h2 className="RegisterHeadlineCont"> Register </h2>
          <form className="RegisterForm">
            <input
              className="TextInput" type="text" name="name" placeholder="Name"
            />
            <input
              className="TextInput" type="text" name="email" placeholder="Email"
            />
            <input
              className="TextInput" type="password" name="password" placeholder="Password"
            />
            <input
              className="TextInput" type="password" name="passwordRepeat" placeholder="Password Repeat"
            />

            <label className="CheckboxLabel">
              <input 
                className="Checkbox" type="checkbox" name="checkbox"
              />
              Accept terms of Use:
            </label>
          </form>


      </div>
    </div>
  );
}

export default App;
