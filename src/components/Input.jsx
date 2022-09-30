import React, { useState } from 'react';
import TextField from '@mui/material/Input';
import { Button } from '@mui/material';
import { Divider } from '@mui/material'
import ZodiacoCard from './Card'
import Typography from '@mui/material/Typography';


const Input = () => {
    const [zodiacoActual, establecerZodiaco] = useState(undefined);

    const handleOnClick = () => {
        let fechaSeleccionada = document.getElementById("fecha");
        let fecha = fechaSeleccionada.value;
        let fechaFormato = new Date(fecha).toISOString().split('T')[0];
        let zodiaco = seleccionarZodiaco(fechaFormato);

        if (zodiaco == undefined) {
            establecerZodiaco(undefined)
            return;
        }

        establecerZodiaco(zodiaco)
    }

    function seleccionarZodiaco(fechaSeleccionada) {
        let fechaSeparada = fechaSeleccionada.split('-')
        let dia = fechaSeparada[2]
        let mes = fechaSeparada[1]

        if ((mes == 8 && dia >= 10) || (mes == 9 && dia <= 15)) {
            return {
                signo: 'Leo',
                fechas: '10 de agosto - 15 de septiembre',
                zodiaco: 'Quieres vivir al máximo este fin de semana, disfrutando los placeres de la vida. Sintiendo verdadero entusiasmo por lo que haces y construyes para ti, quieres enamorarte de la vida que te regalas.',
                image: 'https://rsc.lavanguardia.com/img/horoscopo/horoscopo-leo.jpg'
            };
        }

        if ((mes == 5 && dia >= 14) || (mes == 6 && dia <= 19)) {
            return {
                signo: 'Tauro',
                fechas: '14 de mayo - 19 de junio',
                zodiaco: 'Aprovecha el fin de semana para atender los pendientes logísticos que tienes por revisar junto con tu pareja. Hoy puedes obtener una ganancia o éxito a través de otros, pero también puedes devolver el favor o saldar cualquier tipo de deuda.',
                image: 'https://los40es00.epimg.net/los40/imagenes/2021/11/25/bigbang/1637861589_991145_1637861673_noticia_normal_amp.jpg'
            };
        }

        if ((mes == 2 && dia >= 16) || (mes == 3 && dia <= 11)) {
            return {
                signo: 'Acuario',
                fechas: '16 de febrero - 11 de marzo',
                zodiaco: 'El final de mes puede traer el final de una amistad, red o grupo con el que te habías estado asociando. Atenta a lo que se dice en tu chat de grupo, en tus redes sociales o en cualquier conversación social.',
                image: 'https://rsc.lavanguardia.com/img/horoscopo/horoscopo-acuario.jpg'
            };
        }

        return undefined;
    }


    return (
        <>
            <TextField id="fecha" label="Filled" variant="filled" type='date' />
            <br />
            <br />
            <Button variant="contained" onClick={handleOnClick}>Consultar horóscopo</Button>
            <Divider />
            <br />
            {
                zodiacoActual == undefined ?
                    <div>
                        <Typography variant="h5" gutterBottom>
                            No se ha seleccionado ningún zodico.
                        </Typography>
                        <br />
                        <Typography variant="subtitle1" gutterBottom>
                            - Intentar con las fechas: 10 de agosto - 15 de septiembre para Leo
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            - Intentar con las fechas:14 de mayo - 19 de junio para Leo
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            - Intentar con las fechas: 16 de febrero - 11 de marzo para Acuario
                        </Typography>

                    </div> :
                    <ZodiacoCard signo={zodiacoActual.signo}
                        fechas={zodiacoActual.fechas}
                        image={zodiacoActual.image}
                        zodiaco={zodiacoActual.zodiaco} />
            }
        </>
    )
}

export default Input