import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface IInvitado {
    nombre: string;
    apellidos: string;
    telefono: string;
    acompanantes: IAcompanante[];
    qr_invitacion: string;
    pases: number;
}

interface IAcompanante {
    nombre: string;
    apellidos: string;
}

function Guest() {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("inv")
    console.log("🚀 ~ Guess ~ id:", id)
    const [invitado, setInvitado] = useState<IInvitado>({nombre: '', apellidos: '', telefono: '', acompanantes: [], qr_invitacion: '', pases: 0});

    useEffect(() => {
        axios.post('https://app-fernandayernesto-api-8d26bea62337.herokuapp.com/v1/invitacion', {
            inv: id,
        },)
        .then(res => console.log('response api',setInvitado(res.data)))
        .catch(err => console.error(err));
    }, [])
    
    return ( 
        <>
            <div className="w-full flex flex-col justify-center items-center px-4 mt-4 text-base/7">
				<div className="mt-2">
					{/* <Title text={'Pedro Garcia Garcia'} /> */}
                    {/* <h2 className="font-greatVibes text-4xl font-semibold">{text}</h2> */}
                    <p className="text-center font-cinzelDecorative ">INVITACIÓN PARA:</p>
                    {/* <p className="text-center font-greatVibes text-5xl mt-4">Pedro Garcia Garcia</p> */}
                    <p className="text-center font-cinzelDecorative text-3xl mt-4">{invitado.nombre} {invitado.apellidos}</p>
				</div>
				<p className="text-center font-cinzelDecorative text-xl mt-4">{invitado.pases} {invitado.pases == 1 ? 'pase' : 'pases'}  {invitado.pases == 1 ? 'DISPONIBLE' : 'DISPONIBLES'}</p>
                {
                <img src={invitado.qr_invitacion} alt="" />
                }
                
                {
                    (invitado.acompanantes.length > 0) && <h2 className='text-center font-cinzelDecorative text-xl mt-4 '>Acompañantes:</h2>
                }

                {
                    invitado.acompanantes.map((acompanante, index) => (
                        <div key={index} className="mt-1">
                            <p className="text-center font-cinzelDecorative text-xl font-semibold">{acompanante.nombre} {acompanante.apellidos}</p>
                        </div>
                    ))
                }

			</div>
        </>
     );
}

export default Guest;