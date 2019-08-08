import React from 'react';
import UserList from './Components/UserList'
import UserDetail from './Components/UserDetail'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';

import './App.scss'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary:{ main: '#d5333e' }
  },
});

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {selectedUser: [] , isSelected: false, drawerOpen: false};
}
  openDrawer = () =>{
    this.setState({
      drawerOpen: true
    });
  }

  closeDrawer = () =>{
    this.setState({
      drawerOpen: false
    });
  }

  onSelectUser = (user) => {
    this.setState({
      selectedUser: user, isSelected: true, drawerOpen: false
    });
    console.log(this.state.selectedUser);
  }

  onHomeClick = () =>{
    this.setState({
      isSelected: false
    })
  }


render(){

  const {
    selectedUser, isSelected
  } = this.state;

  if(isSelected){
      return (
        <ThemeProvider theme={theme}>
        <div className="App">
            <AppBar position="fixed">
            <Toolbar className={this.state.drawerOpen ? 'appbar open' :'appbar'}>
              <IconButton edge="start" color="inherit">
                <HomeIcon onClick ={this.onHomeClick}/>
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={this.openDrawer}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className="menu-text">
                Random User
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="persistent"
            anchor="left"
            open={this.state.drawerOpen}
          >
          <div className='drawer-header'>
            <IconButton onClick={this.closeDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
           <Divider />
            <UserList onSelectUser={this.onSelectUser}/>
          </Drawer>

            <Paper className={this.state.drawerOpen ? 'paper open' :'paper'}>
              <UserDetail 
                pic = {this.state.selectedUser.picture.large}
                gender= {selectedUser.gender}
                title = {selectedUser.name.title}
                firstname = {this.state.selectedUser.name.first}
                lastname ={selectedUser.name.last}
                state = {selectedUser.location.state}
                city= {selectedUser.location.city}
                street= {selectedUser.location.street}
                email = {selectedUser.email}
                username = {selectedUser.login.username}
                password = {selectedUser.login.password}
                age = {selectedUser.dob.age}
                phone = {selectedUser.phone}
                cell = {selectedUser.cell}
                nat = {selectedUser.nat}
              />
            </Paper>
        </div>
        </ThemeProvider>
      );
    }else{
      return(
        <ThemeProvider theme={theme}>
      <div className="App">
            <AppBar position="fixed">
            <Toolbar className='appbar'>
              <IconButton edge="start" color="inherit">
                <HomeIcon onClick ={this.onHomeClick}/>
              </IconButton>
              <Typography variant="h6" className="menu-text">
                Random User
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="home">
          <Typography variant="h1" gutterBottom>
            Hi! I'm Alberto Rubio
          </Typography>
          <Typography variant="h2" gutterBottom>
            This is a Code Challenge for Intive.<br/>
            Made with React, Material-UI and RandomUserAPI
          </Typography>
          </div>
          <Paper className="paper">
            <UserList onSelectUser={this.onSelectUser}/>
          </Paper>
      </div>
      </ThemeProvider>
      );
    }
}

}

export default App;
