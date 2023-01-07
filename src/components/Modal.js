import React, { useState,useRef } from 'react';
import '../assets/css/modal.css'


function Modal() {
    const [modalVisible, setModalVisible] = useState(true); // Cambiar a true para mostrar la modal al inicio
    const audioEl = useRef(null);

    const toggleModal = () => {
      setModalVisible(!modalVisible);
      audioEl.current.volume = 0.05;
      audioEl.current.play();
    };

    
  
    return (
      <div>
        <audio src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"  ref={audioEl}  loop/>

        {modalVisible && (
          <div className="my-modal">
            <div className="my-modal-content">
              
              <div className="my-modal-header">
                <h2 style={{display:"flex",justifyContent:"center"}}>Aviso legal de compra</h2>
              </div>
              <div className="imagen-ad">
              <img  src="https://cdn.pixabay.com/photo/2013/07/13/13/15/traffic-sign-160659_960_720.png"/>
              </div>
              <div className="my-modal-body">
                <p>Este producto solo está disponible para mayores de 18 años.</p>
                <p className="red-text">Al hacer clic en "Comprar", confirma que tiene 18 años o más.</p>
              </div>
              <div className="my-modal-footer">
                <button className="boton boton-cancel" onClick={toggleModal}>Cancelar</button>
                <button className="boton boton-confirm" onClick={toggleModal}>Comprar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  

export default Modal;