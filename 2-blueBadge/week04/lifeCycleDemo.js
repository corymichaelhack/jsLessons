/*********************
COMPONENT LIFECYCLE DEMO
*********************/
/*
create-react-app lifecycle-demo in the following location:
javaScriptLibrary
  4-ReactFundamentals
    pieclient
    react-gitbook
*   lifecycle-demo

* Tear out boiler plate

* Make render look like this

render() {
    console.log('[App.js] inside render()')
    return (
      <div className="App">
      </div>
    );
  }

reiterate the job of render

* set up the constructor
constructor(props){
  console.log('[App.js] inside constructor()')
  super(props);
  this.state = {
    name: 'Calcifer',
    ghibliFilms: {}
  }
}

reiterate the role of the constructor, discuss how we now have 2 lifecycle methods we're using

* run npm start on the app, discuss the console.logs we see

* add a componentDidMount() lifecycle method:
  componentDidMount = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(filmData => {
        this.setState({
          ghibliFilms : filmData
        }, () => console.log(this.state))
      })
      .catch(err => console.log(err));
  }

discuss the purpose of fetch, how we handle the results.  touch on promises
mention again that setState allows us to update a single value inside our state object,
we don't have to update everything.

* tell them about how setState allows a callback function, ask them to find the callback function

! break the swapi url we use to connect so they can see .catch in action

! Skip setInterval stuff

* build out a change name method

  changeName = () => {
    let currentName = this.state.name === 'Calcifer' ? 'Cat Bus' : 'Calcifer';
    this.setState({
      name : currentName
    });
  };

discuss how this method works
have them pay attention to the fact that render() fires every time the changeName method works
why is that?

* add the following inside our render's return
<button onClick={this.changeName}>Name Changer</button>


* finally, have them build out shouldComponentUpdate():
shouldComponentUpdate(){
  console.log('[App.js] inside shouldComponentUpdate()');
  return true;
}

have them pay attention to the fact that constructor() and componentDidMount() are no longer firing
in the console.  we're alternating between shouldComponentUpdate() and render().

* Add Components folder to src & create Message.js

* Build Message component

import React from 'react';

class Message extends React.Component {
    render() {
        return (
            <p>Hi Calcifer!</p>
        )
    }
}

export default Message;

* build out componentWillUnmount()

componentWillUnmount(){
  console.log('[Message.js] inside componentWillUnmount()')
}

* import Message into App.js

* create JSX expression to toggle between showing/hiding message -right- under the render
const messageToggle = this.state.name === 'Calcifer' ? <Message /> : null

* below the button, add messageToggle to the return
{ messageToggle }

Hit the button to show the Message component disappearing and to see the componentWillUnmount() fire
*/

// * GitBook Chapter 8, especially the NYT app + Any other Apps