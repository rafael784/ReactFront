import React, { Component } from 'react';
import $ from 'jquery';
import {Font, MainForm,Input, IconButton} from './styles';
import { FaChevronRight } from 'react-icons/fa';
import { GoX } from "react-icons/go";
class MyButton extends Component {

    render() {
      return (
        <IconButton 
        onClick = {()=>{
        
        var teste = $.ajax({
            async: false,
            url: 'http://localhost:3001/projects/deleteInfo',
            headers:{
            'Authorization': 'Bearer '+ localStorage.getItem('jwt')  
            },
            data : {_id:this.props.hadleClick},
            method: 'POST',
            success: function(data){
                return data;
            }
        })

        if(JSON.parse(teste.responseText).ok === undefined)
            alert('Um erro aconteceu');
        else
            alert('Renderize a página, o comentário foi apagado');
            window.location.href = '/page2';

        }}
        ><GoX/></IconButton>
      );
    }

    componentDidMount()
    {
        
    }


}

class Page2 extends Component {

    constructor (props){
        super(props);

        this.state = {
            data: []
          }
    }

    componentDidMount()
    {
        $("#commentFormID").submit(function(event){
            event.preventDefault();
            $.ajax({
                url : $(this).attr("action"),
                type: $(this).attr("method"),
                data : $(this).serialize(),
                headers:{'Authorization': 'Bearer '+ localStorage.getItem('jwt')  },
            }).done(function(response){
                if(response['error'])
                    alert(response.error);
                else
                    alert('Comentário postado com sucessso!');
                    window.location.href = '/page2';
            });
        }
        )
    }

    render() {
        var teste = $.ajax({
            async: false,
            url: 'http://localhost:3001/projects/listInfo',
            headers:{
            'Authorization': 'Bearer '+ localStorage.getItem('jwt')  
            },
            method: 'GET',
            success: function(data){
                return data;
            }
        });
        
        //console.log(JSON.parse(teste.responseText));
        
        let rows = [];

        JSON.parse(teste.responseText).infos.forEach(function(value){
            if(value['content']){
                rows.push(
                    <div key = {value._id}>
                    <br/>
                    <label> {value.content}</label> 
                     
                    <div>
                    
                    <MyButton  hadleClick = {value._id}/>
                                  
                    __________________________________________

                    </div>
                    </div>
                );
            }
        })

        return (<div>
                <Font>
                <MainForm>
                <form action = "http://localhost:3001/projects/createInfo" method="post" id="commentFormID">
                <label>What do you have todo?</label>
                    
                            {/* <input type="text" className="form-control" placeholder="____________________" required="required" name="content" id="content"/> */}
                      <div>
                    <IconButton>     
                        <button type = "submit" id = "sabe" > 
                        
                        <FaChevronRight />
                        
                        </button>
                      </IconButton>
                    <Input type="text"  placeholder = "_______________________________________________________________________________" required="required" name="content" id="content"></Input>
                    </div>

                </form>
                <br/>
                {rows}
                </MainForm>
                </Font>
            </div>
        );
    }
}

export default Page2;