import styled from "styled-components";
import { mainColor, secondaryColor } from "../constants/colors.js";
import useForm from "../hooks/useForm.js";
import useKickIn from "../hooks/useKickIn.js";
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

  useKickIn();

  return (
    <FormContainer>
      <Form onSubmit={submitForm}>
        <span>SIGN IN</span>
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleForm}
            placeholder="E-mail"
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
        </div>

        <button>ENTRAR</button>
      </Form>
    </FormContainer>
  );
}

const Form = styled.form`
  width: 400px;
  display:flex;
  flex-direction: column;
  align-items:center;
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
  div{
    width:100%;
    display:flex;
    flex-direction: column;
    gap: 10px;
    input{
      width: 100%;
    }
  }
  button{
    background-color:${secondaryColor};
    margin-top: 30px;
  }`;
