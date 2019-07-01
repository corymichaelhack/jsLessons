// This demo is show how Material-UI works

// starter repo --> https://github.com/AlecxMoritz/material-ui-starter

// Have students create-react-app in their react-fundamentals parent folder

// Create a Components folder, and add two files Navbar.js, and Auth.js - We are creating a ver simple splash screen

// * 1. in the new project's root directory, run an 

//     npm install @material-ui/core @material-ui/icons

// * 2. While the installation is running, make a few modifications to index.css

// body, html {
//   margin: 0;
//   padding : 0;
//   background-color: #282c34;
//   min-height : 100%;

// Make sure you are targeting the HTML, and add these rules

// * 3. Now tear our the boiler plate in App.js, and clear out App.css - now you're ready for Material UI

// -------------------- Material UI stuff


// * 1.  Building the Navbar

// Add a few imports

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';

// then build the component

const Navbar = () => {
    return (
        <AppBar position="static" color="primary">
          <Toolbar>
          </Toolbar>
        </AppBar>
    );
};

// Add this to App.js

function App() {
    return (
      <div className="main">
        <Navbar />
      </div>
    );
  }

// Now let's flesh it out a bit more -- add some more imports

// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// Then update the return

return (
    <AppBar position="static" color="primary">
      <Toolbar>
       {/* * add the Icon Button * MenuIcon */}
      <IconButton>
          <MenuIcon className={ classes.icon }/>
      </IconButton>
       {/* * add the Typography - explain the variant attribute - we can customize parts of our components, thanks to this little attribute from Material UI - you can find different variant options in Material UI's docs */}
        <Typography variant="h6">
          Material-UI Demo
        </Typography>
      </Toolbar>
    </AppBar>
);

// * Now we do have a navbar, but it doesn't look totally right yet, let grab Material-UI's makeStyles hook

// add the import
// import { makeStyles } from '@material-ui/core/styles';

// now write your own -custom- useStyles hook
const useStyles = makeStyles(() => ({
    icon : {
        color : 'white'
    },
  
    title : {
        marginLeft : '1em'
    }
}));

// ! don't forget the parens around makeStyles() - this is important for parsing the style object

// Now we should have a nice navbar, both our icon and text should be white, and we'll have a tiny bit of space between the icon and the title

// * 2. Building the Auth card

// Add imports - we're adding everything at once
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// * Now build a shell of the component

const Auth = () => {
    return (
        <Paper>
            <Typography variant="h4">
                Sign In
            </Typography>
            <form >
                <TextField 
                    variant="outlined"
                    label="Username"
                    type="text"
                />
                <TextField 
                    variant="outlined"
                    label="Password"
                    type="password"
                />
                <Button variant="contained" color="primary">Submit</Button>
            </form>
        </Paper>
    );
};

export default Auth;

// Go check it out - draw attention to the variant attributes again - we can get completely different looking components w/ various animations just by using a different variant - let students poke around docs for a little bit and try out different variants for inputs and buttons - see if anyone found a really cool one they want to share

// * It looks a little rough so far, lets create some new styles

const useStyles = makeStyles(() => ({
    card : {
        padding : '1em',
        width : '30vw',
        margin : '10em auto'
    },

    form : {
        margin : '2em auto',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },

    button : {
        marginTop : '2em',
        width : '80%',
    },

    input : {
        marginTop : 10,
        width : '80%',
    }
}));

// Now add the styles in

const Auth = () => {
    // * add this
    const classes = useStyles();

    return (
        // * classes.card
        <Paper className={ classes.card }>
            <Typography variant="h4">
                Sign In
            </Typography>
            // * classes.form
            <form className={ classes.form }>
                <TextField 
                    variant="outlined"
                    // * classes.input
                    className={ classes.input }
                    name="username"
                    label="Username"
                    type="text"
                />
                <TextField 
                    variant="outlined"
                    // * classes.input
                    className={ classes.input }
                    name="password"
                    label="Password"
                    type="password"
                />
                {/* // * classes.button */}
                <Button className={ classes.button } variant="contained" color="primary">Submit</Button>
            </form>
        </Paper>
    );
};

export default Auth;

// Awesome! That fixed - now we have a nice looking auth card, and navbar

// Explain that Mat UI also comes with premade theme, and we can change the color of some components by setting their color attribute to either primary, secondary, or accent - try it out on the button 

// Want to easily overwrite some colors? Easy-peasy

// * 3. Custom Navbar color

// pop back over to Navbar.js 

// create a new object in the makeStyles() hook

navbar : {
    backgroundImage : 'linear-gradient(to bottom right, #ff44ad, #f715f7)'
},

// then modify the call to AppBar
<AppBar position="static" className={ classes.navbar } />

// Let's try changing the Button's color too

// If we copy and paste the CSS, we can very easily overwrite the button's CSS

// Awesome! Now we know we can easily overwrite Mat UI's default styling and theme with our own CSS in JS - awesome!

// and that's it - Mat UI intro done !