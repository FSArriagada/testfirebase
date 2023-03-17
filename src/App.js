import React,{useState, useEffect} from "react";
import { createUserForm, getAllClients} from "./firebaseconfig";

function App() {
 
    const [newName, setNewName] = useState("");
    const [newDNI, setNewDNI] = useState("");
    const [clients,setClients] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    
    useEffect(() => { /*Obtener del firebase los datos de los productos */
    getAllClients().then(respuestaPromise => {
      setClients(respuestaPromise)})
    });

    const nameHandler = (event) => {
        setNewName(event.target.value)
    }
    const dniHandler = (event) => {
        setNewDNI(event.target.value)
    }
    
    function onAdd () {
      const cliente = {
        name: newName,
        DNI: newDNI,
      }
      createUserForm(cliente)
    }

    

    const handleChange = e => {
      setBusqueda(e.target.value)
      filtrar(e.target.value)
    }
  
    const filtrar=(terminoBusqueda)=>{
      let resultadosBusqueda = clients.filter((element) => {
        if(element.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return element;
        }
      });
      setClients(resultadosBusqueda);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Formulario de Clientes</h2>
          <form className="form-group">
            <input value={newName} onChange={nameHandler} type="text" placeholder="Nombre" className="form-control"></input>
            <input value={newDNI} onChange={dniHandler} type="text" placeholder="DNI" className="form-control mt-2"></input>
            <button type="button" className="btn btn-dark btn-block" onClick={onAdd}>Agregar</button>
          </form>
        </div>
        <div className="col">
          <input className="form-control" placeholder="Busqueda" value={busqueda} onChange={handleChange}></input>
          <button className="btn btn-success">Buscar</button>
          <h2>Lista de Clientes</h2>
          <>
          {clients.map (clientes => {
            return (
              <div key={clientes.id}>
                <p>{clientes.name}</p>
                <p>{clientes.DNI}</p>
              </div>
            )
          })}
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
