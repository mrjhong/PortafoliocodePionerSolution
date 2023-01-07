import React, { useEffect ,useState} from 'react'
import '../assets/css/style.css'
import Navbar from './Navbar'
import WhatsAppButton from './ButtonWhatsapp'
import { gsap } from 'gsap';
import Card from './Card';
import Products from './Products';
import Modal from './Modal';


const Page = () => {

    useEffect(() => {





        const Titulo = document.querySelector('.titulo')
        gsap.from(Titulo, {
            duration: 2.5,
            ease: "elastic.out(4, 0.2)",
            y: 10
        });


    }, []);
   

    return (
        <div>
            
            <Navbar />

            <Modal/>

            <img src='https://cdn.pixabay.com/photo/2021/03/01/07/27/abstract-6058986_960_720.jpg' alt='portada' className='portada ' />
          <div className='PortadaInfo'>
                <h2 className='titulo'>Bienvenidos A mi Portafolio</h2>
                <p className='typing'> Bienvenidos a mi portafolio. Soy John Guevara, un Desarrollador web.
                            Con amplios Conocimientos y experiencia en E-commerce y plataformas web
                            si estas buscando hacer llevar tu negocio al siguiente nivel estas en el lugar correcto.
                            Mi objetivo es siempre proporcionar resultados sobresalientes y ayudar a mis clientes a alcanzar sus objetivos.
                            ¡Echa un vistazo a mi portafolio y no dudes en ponerte en contacto conmigo si estás interesado en trabajar juntos!
                            </p>
            </div>

            <div className='container-sm'>
                <div className='Wrapper'>

                    <div className='Info'>

                        <p className='container-xl'>
                            Bienvenidos a mi portafolio. Soy John Guevara, un Desarrollador web.
                            Con amplios Conocimientos y experiencia en E-commerce y plataformas web
                            si estas buscando hacer llevar tu negocio al siguiente nivel estas en el lugar correcto.
                            Mi objetivo es siempre proporcionar resultados sobresalientes y ayudar a mis clientes a alcanzar sus objetivos.
                            ¡Echa un vistazo a mi portafolio y no dudes en ponerte en contacto conmigo si estás interesado en trabajar juntos!

                        </p>
                        <button className='btn btn-primary' href='/contact'>Conoce Mas</button>

                    </div>

                </div>
            </div>
            <div style={
                {
                    backgroundImage: "url(https://media2.giphy.com/media/ftfVpeWsm95QgGfOZ8/giphy.gif?cid=790b76113e0f574854e815e03e826c1aae7b5c247ac4a1c4&amp;rid=giphy.gif&amp;ct=g)"
                    , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }

            }>
                <div className='container-sm options'>

                    <h1>Nuestros Productos</h1>
                   

                        <Products/>


                </div>


                <div className='container-sm'>
                    <div className="container Contact" >
                        <h1>Contactanos</h1>


                        <form>
                            <div className='row'>
                                <div className="form-group col-md-6">

                                    <label htmlFor="nameInput">Nombre</label>
                                    <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
                                </div>
                                <div className="form-group  col-md-6">
                                    <label htmlFor="emailInput">Email</label>
                                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                            </div>
                            <div className="form-group" >
                                <label htmlFor="subjectInput">Asunto</label>
                                <input type="text" className="form-control" id="subjectInput" placeholder="Enter subject" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="messageInput">Mensaje</label>
                                <textarea className="form-control" id="messageInput" rows="3" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>



                    </div>
                </div>
            </div>
            <WhatsAppButton />
        </div>
    )
}

export default Page