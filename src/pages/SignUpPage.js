import styled from "styled-components";
import useForm from "../hooks/useForm.js";
import { useSignUp } from "../services/auth.js";

export default function SignUpPage() {
  const { form, handleForm } = useForm({
    username: "",
    email: "",
    imgProfile: "",
    bio: "",
    password: "",
    confirmPassword: "",
  });
  const signUp = useSignUp();

  function submitForm(e) {
    e.preventDefault();
    if (form.confirmPassword !== form.password)
      return alert("As senhas diferem. Tente novamente.");
    const { confirmPassword: _, ...cleanForm } = form;
    signUp(cleanForm);
    console.log(cleanForm);
  }

  return (
    <Form onSubmit={submitForm}>
      <input
        type="text"
        name="username"
        value={form.name}
        onChange={handleForm}
        placeholder="Nome"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleForm}
        placeholder="E-mail"
      />
      <input
        type="text"
        name="imgProfile"
        value={form.imgProfile}
        onChange={handleForm}
        placeholder="Foto de perfil"
      />
      <textarea
        name="bio"
        value={form.bio}
        onChange={handleForm}
        placeholder="Biografia"
        maxLength={200}
        minLength={3} 
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleForm}
        placeholder="Senha"
      />
      <input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleForm}
        placeholder="Confirmar senha"
      />

      <button>Criar conta</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
