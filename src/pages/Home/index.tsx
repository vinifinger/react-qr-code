import React, { useState, useEffect } from  'react';

import api from '../../service/api';

// CSS
import { Container, Title, Img, FormGroup, Input, Label } from './styles';

function Home() {
    const [qrCode, setQrCode] = useState('');
    const [handleChange, setHandleChange] = useState('');

    useEffect(() => {
        api.get('/qrcode', {params: { url: handleChange}, responseType: 'blob'}).then(res => {
            // const {  } = res.data;

            setQrCode(URL.createObjectURL(res.data));
            console.log(res.data);
        });
    }, [handleChange]);

    return (
        <Container>
            <title>PÁGINA REACT</title>
            <Title> Qr Code Generate</Title>
            <Img src={qrCode} />
            <FormGroup>
                <Input type='input' placeholder='Ex.: github.com/vinifinger' name='name' id='name' onChange={(event) => setHandleChange(event.target.value)} required />
                <Label>Texto</Label>
            </FormGroup>
        </Container>
    )
}

export default Home;