import React from "react"
import axios from 'axios'
import '../App.scss'

//material-ui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import ReactCountryFlag from "react-country-flag";


class TodoList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {userList: [], perPage: 50, page: 1, totalPages: null, isLoading: true};
    }

    componentDidMount() {
        this.loadUsers();
        this.setState({
            randomSeed: this.props.randomSeed
        })
    }

    loadUsers = () => {
        const {userList, page, perPage, randomSeed} = this.state;
        const url = `https://randomuser.me/api/?page=${page}&results=${perPage}&seed=abc`
        axios.get(url)
        .then(response => {
            this.setState({ 
                userList: [...userList, ...response.data.results], isLoading:false
            });
        });
    }

    loadMore = () =>{
        this.setState(prevState => ({
            page: prevState.page + 1,
            isLoading: true
        }), this.loadUsers)
    }

    handleClick = (user) =>{
        this.props.onSelectUser(user);
    }

    render(){
        return(
            <List className= 'list'>
            {this.state.userList.map(user => 
            <ListItem button onClick={() => this.handleClick(user)} key={user.login.uuid} >
                <ListItemAvatar>
                    <Avatar alt={user.name.first} src={user.picture.thumbnail}/>
                </ListItemAvatar>
                <ListItemText primary={user.name.first +' '+ user.name.last } secondary={user.location.city} />
                <ReactCountryFlag code={user.nat} svg  />
            </ListItem>
            )}
            {this.state.isLoading ? 
            <div className="lds-dual-ring"></div> : 
            <Button variant="outlined" color="primary" onClick={this.loadMore} className="load-more">
            Load more
             </Button>
            }
            </List>
        )
    }
}


export default TodoList;