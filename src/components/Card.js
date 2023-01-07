import React from 'react'
import '../assets/css/card.css'
import ModalProducts from './ModalProducts'
import { useState, } from 'react';

export default function Card({key,url}) {
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad de la modal
  const [product, setProduct] = useState({}); // Estado para almacenar la información del producto

  const handleClick = (product) => {
    setProduct(product); // Establecer la información del producto en el estado
    setModalVisible(true); // Mostrar la modal
  };
  return (
    <>
<div class="cardrgb rgb" onClick={handleClick}>
    <img src={url} onClick={handleClick} className="cardrgb-image" alt="..." />

    <div class="cardrgb-text">
        <span class="date">1 week ago</span>
        <h2>Post Two</h2>
        <p>Adipisicing elit. Ducimus, repudiandae corrupti tialeno des ameto temporibus omnis provident illum maxime quod. Lorem ipsum dolor</p>
    </div>
</div>
 {modalVisible && (
  <ModalProducts  modalVisible={modalVisible} setModalVisible={setModalVisible}>
    <h2>hfdjsh</h2>
    <p>swerqS</p>
  </ModalProducts>
  )}
  </>
  )
}
