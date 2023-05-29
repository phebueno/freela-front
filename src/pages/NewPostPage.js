import styled from "styled-components";
import { mainColor, secondaryColor } from "../constants/colors.js";
import useForm from "../hooks/useForm.js";
import useKickOut from "../hooks/useKickOut.js";
import { useNewPost } from "../services/post.js";

export default function NewPostPage() {
  const { form, handleForm } = useForm({
    imgPost: "",
    bodyPost: "",
  });

  useKickOut();
  const newPost = useNewPost();

  function submitForm(e) {
    e.preventDefault();
    newPost(form);
  }

  return (
    <FormContainer>
      <Form onSubmit={submitForm}>
        <span>NOVO POST</span>
        <div>
          <input
            type="text"
            name="imgPost"
            value={form.imgPost}
            onChange={handleForm}
            placeholder="Insira o link da sua imagem"
            required
          />
          <textarea
            name="bodyPost"
            value={form.bodyPost}
            onChange={handleForm}
            placeholder="Descrição da imagem"
            maxLength={200}
            minLength={3}
            required
          />
        </div>
        <button>POSTAR</button>
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

