import styled from "styled-components";
import { mainColor, secondaryColor } from "../constants/colors.js";
import useForm from "../hooks/useForm.js";
import useKickIn from "../hooks/useKickIn.js";
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

  useKickIn();

  return (
    <FormContainer>
      <Form onSubmit={submitForm}>
        <span>SIGN UP</span>
        <div>
          <input
            type="text"
            name="username"
            value={form.name}
            onChange={handleForm}
            placeholder="Nome"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleForm}
            placeholder="E-mail"
            required
          />
          <input
            type="text"
            name="imgProfile"
            value={form.imgProfile}
            onChange={handleForm}
            placeholder="Foto de perfil"
            required
          />
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleForm}
            placeholder="Biografia"
            maxLength={200}
            minLength={3}
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleForm}
            placeholder="Senha"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleForm}
            placeholder="Confirmar senha"
            required
          />
        </div>

        <button>CRIAR CONTA</button>
      </Form>
    </FormContainer>
  );
}

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    width: 100%;
    background-color: ${mainColor};
    text-align: center;
    color: ${secondaryColor};
    padding: 20px 0;
    font-weight: 600;
    border-radius: 12px;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      width: 100%;
    }
  }
  button {
    background-color: ${secondaryColor};
    margin-top: 30px;
  }
`;
