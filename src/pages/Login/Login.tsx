import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

export { Login };

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <TextField label="E-mail" value={email} onChange={handleEmail} />
      <TextField
        label="Mot de passe"
        type="password"
        value={password}
        onChange={handlePassword}
      />
      <Button />
    </form>
  );

  function handleEmail(event: any) {
    setEmail(event.target.value);
  }

  function handlePassword(event: any) {
    setPassword(event.target.value);
  }
}
