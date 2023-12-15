import { useState } from 'react'
import apprestaurante from "./assets/apprestaurante.png";
import CRUD from "./assets/CRUD.png";
import landing from "./assets/landing.png";
import './App.css'
import { proyecto } from './assets/utils/proyecto';
import  Button  from '@mui/material/Button';
import Card from '@mui/material/Card'
import { Modal, Typography } from '@mui/material';
import Modal from "@react-modal"

const imagenesProyectos = {
  "apprestaurante": apprestaurante,
  "CRUD": CRUD,
  "landing": landing
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement("#root");

function App() {
  
  const [modal, setModal] = useState(false);

  const [objModal, setObjModal] = useState({
    nombre: "",
    descripcion: "",
    url: "",
  });

  const handleClick = (e) => {
    console.log(e.target.id)
    setObjModal({
      nombre: proyecto[e.target.id].nombre,
      descripcion: proyerctos [e.target.id].descripcion,
      dir: proyecto[e.target.id].dir
    });
    setModal(true);
  };

  const closeModal= () => {
    setModal(false);
    console.log
  }

  return (
    <>
     <h1>PROYECTOS</h1>
     {proyecto && proyecto.map((proyecto, index)=>{
      const imagen = imagenesProyectos [proyecto.nombre]
      return(
        <div className='card-container' key={index}>
        <Card className='card-container'>
        <Typography id={index} onClick={(e)handleClick(e)} variant='h5'component="div">{proyecto.nombre}</Typography>
        <h2>{proyecto.descripcion}</h2>
        <h2>{proyecto.herramientas}</h2>
        <img src={imagen} alt={proyecto.nombre} href={proyecto.url} />
        <Button variant="contained">visitar el sitio</Button>
        <hr/>
        </Card>
        </div>) 
     })}

     <Modal
      isOpen={modal}
      style={customStyles}
      contentLabel="Example Modal"
      onRequestClose={closeModal}
      closeTimeoutMS={100}
      overlay="modal-fondo"
      ShouldCloseOnOverlayClick={true}
          >
            <div className='modal' >
            <button onclick={closeModal}>close</button>
            <h2>{objModal.nombre}</h2>
            <p>
              <span>proyecto:</span>
            </p>
            <a href={objModal.url} target="_blank" rel="noopener noreferrer">
              <Button>ir al sitio</Button>
            </a>


            </div>
     </Modal>

    </>
  )
}

export default App
