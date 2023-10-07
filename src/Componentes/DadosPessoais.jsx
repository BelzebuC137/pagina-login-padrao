import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";
import ValidacoesCadastro from "../contexts/validacoesCadastro";
import useErros from "../hooks/useErros";
function DadosPessoais({ aoEnviar, validaCpf }) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [Promocoes, setPromocoes] = useState(true);
  const [Novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
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
        name="nome"
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
        name="sobrenome"
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

        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name="cpf"
        label="CPF"
        variant="filled"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={Promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"

          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={Novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"

          />
        }
      />



      <Button type="submit" variant="contained" >
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;



