import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Clock from './Clock';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const cityTimeZones = {
    'pékin': 'Asia/Shanghai',   // Pékin, Chine
    'paris': 'Europe/Paris',    // Paris, France
    'washington': 'America/New_York',  // Washington D.C., États-Unis
    'moscou': 'Europe/Moscow',  // Moscou, Russie
    'sydney': 'Australia/Sydney',   // Sydney, Australie
    'tokyo': 'Asia/Tokyo',     // Tokyo, Japon
    'londres': 'Europe/London',   // Londres, Royaume-Uni
    'mexico': 'America/Mexico_City', // Mexico City, Mexique
};

export default function Level4() {
    const [city, setCity]                       = useState('');
    const [hiddenCities, setHiddenCities]       = useState([]);
    const [backgroundClass, setBackgroundClass] = useState('hide-button');
    const [formOpacity, setFormOpacity]         = useState(1);
    const handleCitySubmit = (event) => {
        event.preventDefault();
        const inputCity = city.toLowerCase();

        if (cityTimeZones.hasOwnProperty(inputCity) && !hiddenCities.includes(inputCity)) {
            setHiddenCities(prevHiddenCities => [...prevHiddenCities, inputCity]);
        }

        setCity('');
    };

    useEffect(() => {
        // Vérifier si toutes les villes ont été trouvées
        if (hiddenCities.length === Object.keys(cityTimeZones).length) {
            // Afficher le bouton et faire passer l'opacité du formulaire à 0
            setTimeout(() => {
                setFormOpacity(0);
            }, 1500);
            setTimeout(() => {
                setBackgroundClass('show-button');
            }, 4000);
        } else {
            setBackgroundClass('hide-button');
            setFormOpacity(1);
        }
    }, [hiddenCities]);

    return (
        <main className="level4" style={{ width: '100%' }}>
            <Grid container spacing={1} justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                {/* Rendu des premiers quatre grids des villes */}
                {Object.entries(cityTimeZones).slice(0, 4).map(([cityName, timeZone], index) => (
                    <Grid item xs={4} sm={4} md={4} key={index} style={{ opacity: hiddenCities.includes(cityName) ? 0 : 1, transition: 'opacity 0.5s ease' }}>
                        <Item>
                            <Typography variant="h3" className='big-time'>
                                <Clock timeZone={timeZone} />
                            </Typography>
                        </Item>
                    </Grid>
                ))}

                {/* Grid contenant le formulaire */}
                <Grid item xs={4} sm={4} md={4} style={{ opacity: formOpacity, transition: 'opacity 0.5s ease' }}>
                    <Item>
                        <div className='flex-vertical-center' style={{ height: '100%' }}>
                            <FormControl>
                                <FormLabel>Chaque horaire correspond à la capitale d'un pays</FormLabel>
                                <br />
                                <br />
                                <br />
                                <Input
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder='Rentre une capitale'
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleCitySubmit(e);
                                        }
                                    }}
                                />
                            </FormControl>
                            <br />
                            <br />
                            <br />
                            <Button
                                variant="soft"
                                color="neutral"
                                sx={{ mt: 1 }}
                                type="submit"
                                onClick={handleCitySubmit}
                            >
                                Valider
                            </Button>
                            <br />
                            <br />
                        </div>
                    </Item>
                </Grid>

                {/* Rendu des quatre derniers grids des villes */}
                {Object.entries(cityTimeZones).slice(4).map(([cityName, timeZone], index) => (
                    <Grid item xs={4} sm={4} md={4} key={index + 4} style={{ opacity: hiddenCities.includes(cityName) ? 0 : 1, transition: 'opacity 0.5s ease' }}>
                        <Item>
                            <Typography variant="h3" className='big-time'>
                                <Clock timeZone={timeZone} />
                            </Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>

            <Link
                to="/intothedark"
                className={`custom-link-blue ${backgroundClass}`}
                style={{ zIndex: 1, position: 'absolute', top: '50%', left: '50%', visibility: backgroundClass === 'show-button' ? 'visible' : 'hidden', transition: 'visibility 0.5s ease' }}
            >
                Niveau 4
            </Link>
        </main>
    );
}
