import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function ZodiacoCard({ signo, fechas, zodiaco, image }) {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h3" gutterBottom>
                        {signo}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" gutterBottom>
                        Fechas: {fechas}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" gutterBottom>
                        Zodiaco: {zodiaco}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <div className='height:200px'>
                        <img src={image} alt={signo} width={450} height={250}/>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
