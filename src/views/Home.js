import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import {Font, LoginForm, Input, Button, TextLink} from './styles';





class Home extends Component {
    
    

    componentDidMount = () =>{
        $("#loginFormID").submit(function(event){
            event.preventDefault();
            $.ajax({
                url : $(this).attr("action"),
                type: $(this).attr("method"),
                data : $(this).serialize()
            }).done(function(response){
                if(response['error'])
                {
                    alert(response.error);
                }  
                else
                {
                    //console.log(response);
                    alert('Login com sucesso!');
                    localStorage.setItem('jwt', response.token);
                    console.log(localStorage.getItem('jwt'));
                    window.location.href = '/page2';
                }
            });
        }
        )
    }

    render() {
    return (
        <Font>
        <LoginForm>    
        <div>
            
            <form  action = "http://localhost:3001/auth/authenticate" method="post" id="loginFormID" className = "formulario">
                    
            <label>Email</label>
                
                <div >
                    <Input type="email"  placeholder = "__________________________________________________________________________________________" required="required" name="email" id="email"></Input>
                </div>
                
                <label>Password</label>
            
                <div >
                    <Input type="password" placeholder = "______________________________________________________________________________________________________" required="required" name="password" id="password"></Input>
                </div>
                
                <div >
                        <Link to='/page1'> <TextLink>Not Register? Signup</TextLink> </Link>
                        <Button type="submit" >Sign in</Button>
                </div>
                    
            </form>
            
        
		</div>
        </LoginForm>    
        </Font>
        );
    }
}

export default Home;