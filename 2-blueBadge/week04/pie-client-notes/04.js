/********************
FINISHING PIE CLIENT
********************/
/*
//finally, let's update App.js to look like the following:
//add Pies import to top of file:
import Pies from './components/Pies/Pies';
//fill in inside of App component:
  state = {
    sessionToken: undefined
  }
  viewConductor(){
    return this.state.sessionToken !== undefined ? <Pies/> : <Auth tokenHandler={this.storeSessionToken}/>
  }
  render(){
    return(
      <div className="App">
        <Navbar logout={this.removeSessionToken}/>
        {this.viewConductor()}
      </div>
    )
  }

//take some time to discuss the flow of the app overall--keep things topical
*/

/*********************
COMPONENT LIFECYCLE DEMO
*********************/
/*
//create-react-app lifecycle-demo in the following location:
javaScriptLibrary
  4-ReactFundamentals
    pieclient
    react-gitbook
    lifecycle-demo

//let's go ahead and take out App.js code
//let's make our render() method look like the following:
render() {
    console.log('[App.js] inside render()')
    return (
      <div className="App">
      </div>
    );
  }
//reiterate the job of render

//let's make our constructor look like the following:
constructor(props){
  console.log('[App.js] inside constructor()')
  super(props);
  this.state = {
    name: 'Alecx Moritz',
    swapiPeople: {}
  }
}

//reiterate the role of the constructor, discuss how we now have 2 lifecycle methods we're using

//run npm start on the app, discuss the console.logs we see

//let's next add a componentDidMount() lifecycle method:
componentDidMount(){
  console.log('[App.js] inside componentDidMount()');
  fetch('https://swapi.co/api/people')
    .then(res => res.json())
    .then(json => this.setState({swapiPeople: json.results}, () => console.log(this.state)))
    .catch(err => console.log(err));
}

//discuss the purpose of fetch, how we handle the results.  touch on promises
//mention again that setState allows us to update a single value inside our state object,
//we don't have to update everything.
//tell them about how setState allows a callback function, ask them to find the callback function
//break the swapi url we use to connect so they can see .catch in action

//let's finish by adding the below inside our componentDidMount():
setInterval(() => console.log('this output is from our interval'), 10000)
//discuss how this is created on the window object, and is thus not monitored by react
//that means that if the App component is no longer mounted, the timer continues to run
//we need to account for this to avoid memory leaks!

//let's add the following inside our render:
<button onClick={this.changeName}>Name Changer</button>

//let's build out a changeName method:
changeName = () => {
  let currentName = this.state.name;
  currentName = this.state.name === 'Alecx Moritz' ? 'David Whitt' : 'Alecx Moritz';
  this.setState({name: currentName}, () => console.log(this.state))
}
//discuss how this method works
//have them pay attention to the fact that render() fires every time the changeName method works
//why is that?

//finally, have them build out shouldComponentUpdate():
shouldComponentUpdate(){
  console.log('[App.js] inside shouldComponentUpdate()');
  return true;
}

//have them pay attention to the fact that constructor() and componentDidMount() are no longer firing
//in the console.  we're alternating between shouldComponentUpdate() and render().
//build out componentWillUnmount() to clear intervals:

componentWillUnmount(){
  console.log('[App.js] inside componentWillUnmount()')
  clearInterval();
}

/****************
GITBOOK ASSIGNMENT: CH 8 (especially the NYT app)
****************/

/* standups after lunch */

