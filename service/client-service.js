//abrir http (método,url)

//CRUD - métodos, create/POST , read/ GET,update / PATCH, PUT, delete/DELETE .

const listaClientes = () =>
    fetch("http://localhost:3000/perfil").then((respuesta) =>
        respuesta.json()
    );

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
};
const eliminarCliente=(id) =>{
console.log("eliminar a "+ id)
return fetch(`http://localhost:3000/perfil/${id}`,{
    method: "DELETE",
});
}


const detalleCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json()
        );
}

const actualizarCliente =(nombre,email,id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,
    {method:"PUT",
 headers: {"Content-Type": "application/json"},
 body: JSON.stringify({nombre, email})
}).then (respuesta => console.log(respuesta)).catch((error) => alert("Ocurrió un error"));
}


export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
};