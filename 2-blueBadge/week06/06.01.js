// * Connect Pie API and Client

/*
  * build token handler method in App.js
    
  storeSessionToken = (token) => {
    this.setState({
        sessionToken : token
    })
  }

  * connect signup & login in Auth.js
    handleSubmit = (event) => {
        event.preventDefault();

        let url = this.state.login ? 'http://localhost:3005/auth/signin' : 'http://localhost:3005/auth/signup';

        fetch(url, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.props.tokenHandler(data.sessionToken)
        })
        .catch(err => console.log(err));
    }

  complete pie fetch & replace mock data
  * add contructor to Pies.js and add empty array called 'pies'


    * First new additions

    constructor() {
        super();

        this.state = {
            pies : []
        }
    }

    componentDidMount = () => {
        this.fetchPies();
    }

    fetchPies = () => {

    }

    * flesh out fetchPies
    fetchPies = () => {
        let url = 'http://localhost:3005/pies';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    pies: data
                })
            })
            .catch(err => console.log(err));
    }

    * adjust pieRows to .map() over this.state.pies

    * Tear out testData

 */
/*



/*******************
DAY ONE REACT CHALLENGE
*******************/

/*

ANCHOR https://github.com/AlecxMoritz/react-challenges-starter


BRONZE LEVEL:
Inside the DayOne component, initialize three state values ( using useState() ), platform, generation, and maker, as well as the methods to update them. Give them a default value of 'Playstation', 3, and 'Sony' respectively. 
Add a button to the return of this component. When this button is clicked, it should fire off a function to print all three values to the console.
SILVER LEVEL:
Add onto the Bronze Level challenge.
Do all of the above, but make a new functional component called
'PropDisplay' (careful with folder structure!).  Call this component
three times inside the 'DayOne' return.  Each 'PropDisplay'
component call should be passed a prop, the first is passed 'console',
the second 'version', and the third 'maker'.  Each PropDisplay should 
display the prop it gets passed.  Good luck!
GOLD LEVEL:
Reset the initial values of the calls to useState() with empty strings, so platform, generation, and maker are all empty when the component is created.
Add three inputs, use data binding to allow the values of platform, generation, and maker to change when a user types into those inputs.
* Bronze
const DayOne = () => {
    const [ platform, setPlatform  ] = useState('Playstation');
    const [ generation, setGeneration ] = useState(3);
    const [ maker, setMaker ] = useState('Sony');
    const logState = () => {
        console.log(`Platform : ${platform} - Generation : ${ generation } - Maker : ${ maker }`);
    };
    return (
        <Container>
            <h1>Day One Challenge</h1>
            <Badge color="primary">Props</Badge>
            <Badge color="secondary">useState()</Badge>
            <hr />
            <Button onClick={ logState }>Log State</Button>
        </Container>
    )
}
* Silver
const PropDisplay = (props) => {
    return (
        <h4>{ props.string }</h4>
    )
}
const DayOne = () => {
    const [ platform, setPlatform  ] = useState('Playstation');
    const [ generation, setGeneration ] = useState(3);
    const [ maker, setMaker ] = useState('Sony');
    const logState = () => {
        console.log(`Platform : ${platform} - Generation : ${ generation } - Maker : ${ maker }`);
    };
    return (
        <Container>
            <h1>Day One Challenge</h1>
            <Badge color="primary">Props</Badge>
            <Badge color="secondary">useState()</Badge>
            <hr />
            <PropDisplay string={ platform } />
            <PropDisplay string={ generation } />
            <PropDisplay string={ maker } />
            <Button onClick={ logState }>Log State</Button>
        </Container>
    )
}
* Gold
const DayOne = () => {
    const [ platform, setPlatform  ] = useState('Playstation');
    const [ generation, setGeneration ] = useState(3);
    const [ maker, setMaker ] = useState('Sony');
    const logState = () => {
        console.log(`Platform : ${platform} - Generation : ${ generation } - Maker : ${ maker }`);
    };
    return (
        <Container>
            <h1>Day One Challenge</h1>
            <Badge color="primary">Props</Badge>
            <Badge color="secondary">useState()</Badge>
            <hr />
            <Button onClick={ logState }>Log State</Button>
            <PropDisplay string={ platform } />
            <PropDisplay string={ generation } />
            <PropDisplay string={ maker } />
            <hr />
            <Label>Platform</Label>
            <Input value={ platform } onChange={(e) => setPlatform(e.target.value)} />
            <Label>Generation</Label>
            <Input value={ generation } onChange={(e) => setGeneration(e.target.value)} />
            <Label>Maker</Label>
            <Input value={ maker } onChange={(e) => setMaker(e.target.value)} />
        </Container>
    )
}



/ * Blue Badge Planning First Planning Meeting - Discussing Options

/*  Students at this point should have a selection of idea to consider

* Considerations 
  - How many CRUD tables would be needed to accomplish their goals

  - Any 3rd Party APIS a project might need

  - Identify what 1.0 would look like for these project ideas
 
  - Any stretch goals for project ideas.

  ! Students should choose idea to one for tomorrow's Planning Meeting
 */