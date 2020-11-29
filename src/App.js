import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home/Home';
import News from './news/News';
import About from './about/About';
import Registration from './registration/Registration';
import SearchMusic from './searchMisuc/SearchMusic';
import BestMucis from './bestMusic/bestMusic';

function App(){
return(
    <>
   <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/searchMusic" component={SearchMusic} />
            <Route exact path="/news" component={News} />
            <Route exact path="/about" component={About} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/bestMusic" component={BestMucis} />
        </Switch>
    </Router>
    </>
)
}

export default App;