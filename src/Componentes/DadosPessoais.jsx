import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function DadosPessoais({ aoEnviar, validaCpf }) {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [Promocoes, setPromocoes] = useState(true);
    const [Novidades, setNovidades] = useState(true);
    const [erro, setErro] = useState({ cpf: { valido: true, texto: '' } });

    return (

        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, Novices: Novidades, promotes: Promocoes })

            }}>

            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}

                id="nome"
                label="Nome"
                variant="filled"
                margin="normal"
                fullWidth
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}

                id="sobrenome"
                label="Sobrenome"
                variant="filled"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}

                onBlur={(event) => {
                    const ehValido = validaCpf(cpf);
                    setErro({ cpf: ehValido })
                }}
                error={!erro.cpf.valido}
                helperText={erro.cpf.texto}
                id="CPF"
                label="CPF"
                variant="filled"
                margin="normal"
                fullWidth
            />



            <FormControlLabel
                label="Promoções"
                control={<Switch name="promocoes"
                    checked={Promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked);
                    }}
                    defaultChecked={Promocoes} />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch name="Novidades"
                    checked={Novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked);
                    }}
                    defaultChecked={Novidades} />}
            />

            <Button type="submit" variant="contained" >
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosPessoais;



