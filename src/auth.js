import $ from 'jquery'; 

export const isAuthenticated = ()=>{
    
    
    
    var teste = $.ajax({
        async: false,
        url: 'http://localhost:3001/projects',
        headers:{
        'Authorization': 'Bearer '+ localStorage.getItem('jwt')  
        },
        method: 'GET',
        success: function(data){
            return data;
        }
    })

    if(JSON.parse(teste.responseText).ok === undefined)
        return false;
    else
        return true;
}