import React from 'react';

const AuthForm = (props) => {
  return (
    <div>
      <form>
        <h1>{ props.formName }</h1>
        <div className="input-group">
          <label htmlFor="email">Email</label><br/>
          <input 
            type="email" 
            id="emailField" 
            name="email" 
            className="input-field" 
            onChange={ props.changeInputs }
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label><br/>
          <input 
            type="password"
            id="passwordField"
            name="password"
            className="input-field"
            onChange={ props.changeInputs }
          />
        </div>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default AuthForm;