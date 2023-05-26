import styled from "styled-components";
import useForm from "../hooks/useForm.js";
import { useSignIn } from "../services/auth.js";

export default function SignInPage() {
  const { form, handleForm } = useForm({
    email: "",
    password: "",
  });
  const signIn = useSignIn();
  
  function submitForm(e) {
    e.preventDefault();
    signIn(form);
  }

  return (
    <Form onSubmit={submitForm}>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleForm}
        placeholder="E-mail"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleForm}
        placeholder="Senha"
      />

      <button>Entrar</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;