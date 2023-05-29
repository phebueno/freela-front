import styled from "styled-components";
import useForm from "../hooks/useForm.js";
import useKickOut from "../hooks/useKickOut.js";
import { useNewPost } from "../services/post.js";

export default function NewPostPage(){
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

    return(<Form onSubmit={submitForm}>
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
  
        <button>Entrar</button>
      </Form>)
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;