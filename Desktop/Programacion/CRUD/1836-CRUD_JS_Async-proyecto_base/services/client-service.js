
const listaClientes = () => 
    fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json());


const createClients = (nombre, email) => {
    return fetch('http://localhost:3000/perfil',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({nombre,email,id:uuid.v4()})
        
    } )
    
}

const deleteClient = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: 'DELETE',
    }
)};

 const detailClient = (id) => {   
    return fetch(`http://localhost:3000/perfil/${id}`).then((response => 
    response.json()));}

const updateClient = (nombre, email , id) => {  
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({nombre,email,id})
    }).then((response) => response).catch((err) => console.log(err));
    
}




export const clientServices = {
    listaClientes,
    createClients,
    deleteClient,
    detailClient,
    updateClient,
};


