import React, { Component } from 'react';
import './App.scss';
import SearchDropdown from './components/ant-fields/SearchDropdown';
import AlbumList from './components/AlbumList';
import PhotosList from './components/PhotosList';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios from 'axios';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      userSelected: null,
      selectedUsrAlbum: [],
      selectedUsrPhotos: [],
      viewAlbumPhoto: false,
      authenticate: false
    }

    this.userSelected = this.userSelected.bind(this);
    this.getAlbumPhotos = this.getAlbumPhotos.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      this.setState({
        users: res.data
      })
    })
    .catch((e) => {
      console.log('Error Fetching Data:' , e)
    })
  }

  userSelected(id, name) {
    console.log("userSelected Hit", id, name, this.state.userSelected, history.location.pathname)
    this.setState({
      userSelected: id,
      selectedUserName: name
    }, () => this.getUserAlbums(this.state.userSelected))
  }

  getUserAlbums(id) {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then((res) => {
      this.setState({
        selectedUsrAlbum : res.data
      })
    })
    .catch((e) => {
      console.log("Error is fetching album details:", e)
    })
  }

  getAlbumPhotos(id) {
    console.log("getAlbumPhotos HIT")
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then((res) => {
      this.setState({
        selectedUsrPhotos : [...this.state.selectedUsrPhotos ,res.data],
        viewAlbumPhoto : !this.state.viewAlbumPhoto
      })
    })
    .catch((e) => {
      console.log("Error is fetching album details:", e)
    })
  }

  validateEmail(e) {
    console.log(e.target.value, this.state.users)
    this.state.users.map((usr) => {
      if(usr.email === e.target.value) {
        this.setState({
          authenticate: true
        })
      }
    })
  }
  
  render() {
    const users = this.state.users ? this.state.users : null;
    return (
      <div>
        <p style={{textAlign: 'center', fontSize: '30px'}}>Select User To View Albums</p>
        {
          history.location.pathname === "/photos" ? 
          '' :
          <SearchDropdown users={users} userSelected={this.userSelected} style={{textAlign: 'center', width: '100%', padding: '40px'}}/>
        }
        <Router>
          <Switch>
            <Route exact 
              path='/' 
              render={() => 
              this.state.userSelected ? 
              <Redirect to="/albums" /> :
              ''}
            />

            <Route exact path="/albums" render={() => 
              this.state.viewAlbumPhoto ?
              <Redirect to="/photos" /> :
              <AlbumList 
                usrAlbums={this.state.selectedUsrAlbum}
                usrName={this.state.selectedUserName}
                getAlbumPhotos={this.getAlbumPhotos}
                authenticate={this.state.authenticate}
                validateEmail={this.validateEmail}
              /> } />

            <Route exact path="/photos" render={() => <PhotosList usrPhotos={this.state.selectedUsrPhotos}/> } />
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
