import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import {Font, LoginForm, Input, Button} from './styles';

class Page1 extends Component {
 

  componentDidMount = () =>{
      $("#loginFormID").submit(function(event){
          event.preventDefault();
          $.ajax({
              url : $(this).attr("action"),
              type: $(this).attr("method"),
              data : $(this).serialize()
          }).done(function(response){
              if(response['error'])
                  alert(response.error);
              else
                  alert('Usuário criado com sucessso!');
          });
      }
      )
  }

  render() {
    return (
      <Font>
        <LoginForm>
      <div>
        
        <form action = "http://localhost:3001/auth/register" method="post" id="loginFormID">
            <label>Name</label>
            <div >
              <Input type="text"  placeholder = "__________________________________________________________________________________________" required="required" name="name" id="name"></Input>
            </div>
            <label>Email</label>
            <div >
              <Input type="email"  placeholder = "__________________________________________________________________________________________" required="required" name="email" id="email"></Input>
            </div>
            
            <label>Password</label>
            
                <div >
                  <Input type="password" placeholder = "______________________________________________________________________________________________________" required="required" name="password" id="password"></Input>
                </div>

                <div className="form-group">
                  <Link to='/'> Sign in  </Link>
                  <Button type="submit" >Sign up</Button>
                </div>
        </form>
      </div>
      </LoginForm>
      </Font>
    );
  }
}

export default Page1;