import './App.css';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Player from './Player.js'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function App() {
  return (
    <Box display="flex" justifyContent="center" width="75%" m={6}>
      <Router>
        <Box display="flex" flexDirection="column" justifyContent="center" width="35%">
          <List component="nav" aria-label="secondary mailbox folders">
            <Link to="/team">
              <ListItem button>
                <ListItemText primary="Team" />
              </ListItem>
            </Link>
            <Link to="/player">
              <ListItem button>
                <ListItemText primary="Player" />
              </ListItem>
            </Link>
            <Link to="/venue">
              <ListItem button>
                <ListItemText primary="Venue" />
              </ListItem>
            </Link>
            <Link to="/pointstable">
              <ListItem button>
                <ListItemText primary="Ponits Table" />
              </ListItem>
            </Link>
            <Link to="/matches">
              <ListItem button>
                <ListItemText primary="Matches" />
              </ListItem> 
            </Link> 
          </List>
        </Box>
        <Box display="flex" justifyContent="center" width="65%">
          <Switch>
            <Route path="/team">
              <h1>Teams</h1>
            </Route>
            <Route path="/player">
              <Player/>
            </Route>
            <Route path="/pointstable">
              <h1>Points Table</h1>
            </Route>
            <Route path="/venue">
              <h1>Venue</h1>
            </Route>
            <Route path="/matches">
              <h1>Matches</h1>
            </Route>
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}

export default App;
