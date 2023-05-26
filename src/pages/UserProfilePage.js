import { useParams } from "react-router-dom";

export default function UserProfilePage(){
    const {id} = useParams();
    if(id) return(<div>Perfil do usuário de id {id}</div>)
    else return(<div>Perfil do usuário logado</div>)
}