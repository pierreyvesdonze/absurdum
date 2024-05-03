import React from 'react';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const Intro = () => {

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'black'
            }}>
            <h3 className='level8-intro-title'>Pluie</h3>
            <WaterDropIcon sx={{ color: '#fff', cursor: 'pointer', fontSize: '40px' }} />
        </div>
    )
}

export default Intro;