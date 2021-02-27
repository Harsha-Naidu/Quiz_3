import './App.css';
import { Component } from 'react';
import AuctionShowPage from './components/AuctionShowPage';
import AuctionIndexPage from './components/AuctionIndexPage';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { Session } from './requests';
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import AuthRoute from './components/AuthRoute';
import NewAuctionForm from './components/NewAuctionForm';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clocksCount: [1],
      user:null
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.destroySession=this.destroySession.bind(this)
    this.handleSignUp=this.handleSignUp.bind(this)
  }

  componentDidMount() {
    
  Session.currentUser()
  .then(user=>{
    console.log('user', user);
    this.setState((state)=>{
      return {user:user}
    })
  })
}

  handleSubmit(params){
    
    Session.create(params).then(()=>{
      return Session.currentUser()}
      ).then(user=>{
        console.log('user', user);
        this.setState(state => {
          return {
            user:user
          }
        })
      })

  }

  destroySession(){
    Session.destroy()
    .then(res=>{
      this.setState(
          (
          state=>{return {user:null}}
          )
        )
      })
  }

  
  handleSignUp(){
    Session.currentUser().then(user=>{
      this.setState((state)=>{
        return {user:user}
      })
    })
  
  }
  render() {
    return (
      <div className="App">
        {
  
      <BrowserRouter>
       <Navbar currentUser={this.state.user} destroySession={this.destroySession} />
        <Switch>
          <Route path='/welcomepage' exact render={() => <div><h1>Going twice. Going once.</h1><h1>Sold to Biddr!</h1></div> } />
    
          <AuthRoute exact path='/auctions/new' isAuth={this.state.user} component={NewAuctionForm}/>
          
          <Route path='/auctions/:id' component={AuctionShowPage} />
          <Route path='/auctions' component={AuctionIndexPage} />
          
          <Route path='/sign_in' render={(routeProps)=><SigninPage handleSubmit={this.handleSubmit} {...routeProps}/>} />
          <Route path='/sign_up' render={(routeProps)=><SignUpPage handleSignUp={this.handleSignUp} {...routeProps}/>}/> 

        </Switch>
      </BrowserRouter>
        }
      </div>
    );
  }
}

  

export default App;

