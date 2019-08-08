import React from "react";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import ReactCountryFlag from "react-country-flag";

import '../App.scss'

export default function UserDetails(props){

const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    });

const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
    event.preventDefault();
    };

 return <div className="">
    <Card>
    <CardContent>
    <Avatar alt={props.firstname} src={props.pic} className='big-avatar' />
    <Typography color="textSecondary" className="sub-text">
          Profile Info
    </Typography>
    <TextField
        className = 'text-field'
        id="standard-read-only-input"
        label="Name"
        value={props.username}
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
      />
    <TextField
        className = 'text-field'
        id="standard-read-only-input"
        label="Gender"
        value={props.email}
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className = 'text-field'
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        label="Password"
        value={props.password}
        onChange={handleChange('password')}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />


    <Typography color="textSecondary" className="sub-text">
    Personal Info
    </Typography>    
    <TextField
        className = 'text-field'
        id="standard-read-only-input"
        label="Name"
        value={props.firstname + ' '  +props.lastname}
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
      />
    <TextField
        className = 'text-field'
        id="standard-read-only-input"
        label="Gender"
        value={props.gender}
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
      />
        <TextField
        className = 'text-field'
        id="standard-read-only-input"
        label="Age"
        value={props.age}
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
      />
  <Typography color="textSecondary" className="sub-text">
Location
    </Typography> 
       <TextField
        className = 'text-field'
        id="standard-read-only-input"
        label="City"
        value={props.city}
        margin="dense"
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">
                <ReactCountryFlag code={props.nat} svg styleProps={{width: '20px',height: '20px'}}/>
            </InputAdornment>
          ),
        }}
      />
       <TextField
        className = 'text-field'
        id="standard-read-only-input"
        label="State"
        value={props.state}
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
      />
          <TextField
        className = 'text-field'
        id="standard-read-only-input"
        label="Street"
        value={props.street}
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
      />

<Typography color="textSecondary" className="sub-text">
Contact
    </Typography> 
     <TextField
        className = 'text-field'
        id="standard-read-only-input"
        label="Phone"
        value={props.phone}
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
      />
       <TextField
        className = 'text-field'
        id="standard-read-only-input"
        label="Cell"
        value={props.cell}
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
      />
    </CardContent>
    </Card>
</div>
}