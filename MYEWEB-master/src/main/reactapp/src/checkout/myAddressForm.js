import React from 'react'
import AddressForm from './AddressForm';
import { connect } from 'react-redux';
import {registeredMerchantAction} from '../Actions/registerMerchantActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import withStyles from '@material-ui/core/styles/withStyles';





class myAddressForm extends React.Component {


     constructor(props)
     {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state={
          firstName:'',
          lastName:'',
          address1:'', 
          addiress2:'',
          city : '',
          state:'',
          zip : '',
          country : ''


        }
     }

   handleChange(event) {
        // print the form values to the console
        console.log("inside submit button")
        console.log(event.target);
        this.setState(
          {
            [event.target.name] : event.target.value
        });


       // this.props.registeredMerchantAction(values);
        //return false;
    }


    handleClick()
    {
      this.props.registeredMerchantAction(this.state);
    }

    render() {
      return ( <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Merchant details
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            value={this.state.address1}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="addiress2"
            name="addiress2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
            value={this.state.address2}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth value={this.state.state}
            onChange={this.handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            value={this.state.zip}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
            value={this.state.country}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={10}>
        <Button  type="button" variant="outlined" size="small" name="submit" onClick={this.handleClick}>Submit</Button>
        </Grid>
       
      </Grid>
    </React.Fragment>
      );
    }

    
  }

  const mapStateToProps = function(state) {
    return {
      profile: state.registerMerchants.merchantRegistered
    }
    }

export default connect(mapStateToProps,{
  registeredMerchantAction
})(myAddressForm)
