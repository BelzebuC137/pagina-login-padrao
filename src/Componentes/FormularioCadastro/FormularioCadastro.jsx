import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro({ aoEnviar, validaCpf }) {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promotes, setPromotes] = useState(true);
    const [Novices, setNovices] = useState(true);
    const [erro, setErro] = useState({ cpf: { valido: true, texto: '' } });

    return (

        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, Novices, promotes })

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
                label="Promotes"
                control={<Switch name="promotes"
                    checked={promotes}
                    onChange={(event) => {
                        setPromotes(event.target.checked);
                    }}
                    defaultChecked={promotes} />}
            />

            <FormControlLabel
                label="Novices"
                control={<Switch name="Novices"
                    checked={Novices}
                    onChange={(event) => {
                        setNovices(event.target.checked);
                    }}
                    defaultChecked={Novices} />}
            />

            <Button type="submit" variant="contained" >
                Cadaster
            </Button>
        </form>
    );
}

export default FormularioCadastro;



