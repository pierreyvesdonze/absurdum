import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, FormControl, FormLabel, Input, Slide, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Level2 = () => {
    const navigate                = useNavigate();
    const [formData, setFormData] = useState('');
    const [items, setItems]       = useState([
        { id: 1, password: 'la', visible: true, errorMessage: '' },
        { id: 2, password: 'mort', visible: true, errorMessage: '' },
        { id: 3, password: 'est', visible: true, errorMessage: '' },
        { id: 4, password: 'absurde', visible: true, errorMessage: '' },
    ]);

    const formLabels = [
        'Do, ré, mi, fa, sol...',
        "L'inverse de vivant",
        "L'opposé de Ouest",
        "Synonyme d'insensé",
    ];

    const [formVisibilities, setFormVisibilities] = useState(items.map((item, index) => index === 0));

    const setFocusOnInput = (index) => {
        if (inputRefs.current && inputRefs.current.length > 0 && inputRefs.current[index]) {
            const inputElement = inputRefs.current[index].querySelector('input[type="text"]');
            if (inputElement) {
                inputElement.focus();

            } else {
                console.log('pas input')
            }

        }
    };

    const inputRefs = useRef([]);
    for (let i = 0; i < items.length; i++) {
        inputRefs.current.push(React.createRef());
    }

    const handleInputChange = (event) => {
        setFormData(event.target.value.toLowerCase());
    };

    const [backgroundClass, setBackgroundClass] = useState('');

    useEffect(() => {
        setFocusOnInput(formVisibilities.findIndex(visible => visible));

        // Check if all items have 'visible' property set to false
        const allItemsSlidOut = items.every(item => !item.visible);

        // Update background class if all items have slid out
        if (allItemsSlidOut) {
            setBackgroundClass('level2-bg-visible');
            setTimeout(() => {
                navigate('/answertoeverything');
            }, 2500);
        } else {
            setBackgroundClass('');
        }
    }, [items, formVisibilities]);

    const handleFormSubmit = (event, id, index) => {
        event.preventDefault();
        const currentItem = items.find(item => item.id === id);

        if (formData === currentItem.password) {
            // Update items array to hide the submitted form
            setItems(items.map(item =>
                item.id === currentItem.id ? { ...item, visible: false } : item
            ));

            // Update formVisibilities to hide all previous forms
            setFormVisibilities(prevState => {
                const newState = [...prevState];
                for (let i = 0; i < index; i++) {
                    newState[i] = false;
                }
                return newState;
            });

            // Update formVisibilities to show the next form
            setFormVisibilities(prevState => {
                const newState = [...prevState];
                newState[index + 1] = true; // Show the next form
                return newState;
            });
        } else {
            // Update items array to show an error message for the submitted form
            setItems(items.map(item =>
                item.id === currentItem.id ? { ...item, errorMessage: 'Non!' } : item
            ));
        }
    };

    return (
        <main className={`level2 ${backgroundClass}`}>
            <Typography
                variant='h3'
                className={`level2-title ${backgroundClass ? 'show-title' : 'hide-title'}`}
                sx={{ color: 'white', visibility: backgroundClass ? 'visible' : 'hidden' }}
            >
                La mort est absurde
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0.6}>
                    {items.map((item, index) => (
                        <Slide key={item.id} direction={index % 2 === 0 ? 'right' : 'left'} in={item.visible}>
                            <Grid item xs={6} md={6} sx={{ zIndex: 3 }}>
                                <Item sx={{ height: '50vh' }}>
                                    <LockIcon sx={{ fontSize: 30 }} />
                                    <form style={{ display: formVisibilities[index] ? 'block' : 'none' }} onSubmit={(event) => handleFormSubmit(event, item.id, index)}>
                                        <div className="flex-vertical-center" style={{ height: '40vh' }}>
                                            <FormControl>
                                                <FormLabel>{formLabels[index]}</FormLabel>
                                                <Input
                                                    ref={(el) => (inputRefs.current[index] = el)}
                                                    type="text"
                                                    name="password"
                                                    onChange={handleInputChange}
                                                    autoComplete='off'
                                                />
                                            </FormControl>
                                            <br />
                                            <br />
                                            <Button type="submit">Valider</Button>
                                            {item.errorMessage && <h3 className="error">{item.errorMessage}</h3>}
                                        </div>
                                    </form>
                                </Item>
                            </Grid>
                        </Slide>
                    ))}
                </Grid>
            </Box>
        </main>
    );
};

export default Level2;
