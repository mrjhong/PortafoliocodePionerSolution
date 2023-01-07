import React, { useState } from 'react';
import Card from './Card';


const ProductList = ({ products, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedProducts = products.slice(startIndex, endIndex);

  return (
    <div>
    <div className="container-card" >
        
      {paginatedProducts.map((product) => (
        <Card key={product.id} url={product.image} />
     
      ))}
      </div >
      <div style={{display:"flex",justifyContent:" space-around"}}>
      <button className='boton-psicodelico' onClick={() =>
          currentPage > 0 ? setCurrentPage(currentPage - 1) : undefined
        }>Anterior</button>
      <button  className='boton-psicodelico'  onClick={() =>
          currentPage < Math.ceil(products.length / pageSize) - 1
            ? setCurrentPage(currentPage + 1)
            : undefined
        }>Siguiente</button>
        </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      price: '$100',
      image: 'https://www.wradio.com.co/resizer/6-W3jNnHfhr54QTkYR9972_eaBk=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/SPMB5NRHV5EA5LYXKOXXV3PWZM.jpg',
    },
    {
      id: 2,
      name: 'Producto 2',
      price: '$200',
      image: 'https://305specialblend.com/wp-content/uploads/2021/04/H12558e2d6c2f4e059549b598f4d5d73eT-scaled.jpg',
    },
    {
      id: 3,
      name: 'Producto 3',
      price: '$300',
      image: 'https://http2.mlstatic.com/D_NQ_NP_834102-MCO43613865018_092020-V.jpg',
    },
    {
      id: 4,
      name: 'Producto 4',
      price: '$400',
      image: 'https://www.wradio.com.co/resizer/6-W3jNnHfhr54QTkYR9972_eaBk=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/SPMB5NRHV5EA5LYXKOXXV3PWZM.jpg',
    },
    {
      id: 5,
      name: 'Producto 5',
      price: '$500',
      image: 'https://www.wradio.com.co/resizer/6-W3jNnHfhr54QTkYR9972_eaBk=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/SPMB5NRHV5EA5LYXKOXXV3PWZM.jpg',
    },
    {
      id: 6,
      name: 'Producto 6',
      price: '$600',
      image: 'https://www.wradio.com.co/resizer/6-W3jNnHfhr54QTkYR9972_eaBk=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/SPMB5NRHV5EA5LYXKOXXV3PWZM.jpg',
    },
    {
      id: 7,
      name: 'Producto 7',
      price: '$700',
      image: 'https://www.wradio.com.co/resizer/6-W3jNnHfhr54QTkYR9972_eaBk=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/SPMB5NRHV5EA5LYXKOXXV3PWZM.jpg',
    },
    {
      id: 8,
      name: 'Producto 8',
      price: '$800',
      image: 'https://www.wradio.com.co/resizer/6-W3jNnHfhr54QTkYR9972_eaBk=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/SPMB5NRHV5EA5LYXKOXXV3PWZM.jpg',
    }
    

    

  ];

  return <ProductList products={products} pageSize={6} />;
};

export default Products;