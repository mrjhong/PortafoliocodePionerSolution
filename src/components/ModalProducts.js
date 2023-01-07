import React, { useState } from 'react';
import '../assets/css/modalproducts.css'


function ModalProducts({ children, modalVisible, setModalVisible }) {

  return (
    <>
      {modalVisible && (
        <div className="modal-product">
          <div className="modal-product-content">
            <div className='row'>
                <div className='col-md-6'>
                <img src="https://www.wradio.com.co/resizer/6-W3jNnHfhr54QTkYR9972_eaBk=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/SPMB5NRHV5EA5LYXKOXXV3PWZM.jpg"  class="img-fluid" alt="..."/>
                </div>
                <div className='col-md-6'>
                 <h1>Titulo del Producto</h1>

                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quasi, quisquam</p>
                 </div>

            </div>
            {children}
            <button onClick={() => setModalVisible(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalProducts;