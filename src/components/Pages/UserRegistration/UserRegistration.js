import { useNavigate } from 'react-router-dom';
import './style.css';
import blueIcon from '../../../assets/blueIcon.png';

const UserRegistration = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div id='Logo'>
        <img src={blueIcon} alt="logo"/>
      </div>
        <div className='Registration'>
          <div className="camp">
          <h2 className='Title'>Cadastro de usuário</h2>
          <div id='heh'>
            <label id='input-description'>Nome completo: </label>
            <input id='hehe' type="text" placeholder="Digite o Nome Completo"/>
          </div>
          <div id='heh'>
            <label id='input-description' >CPF: </label>
            <input id='cpf' type="number" placeholder="Digite o CPF"/>
            </div>
          <div id='heh'>
            <label id='input-description'>Data de nascimento: </label>
            <input id='birthday' type="date" placeholder="Data de nascimento"/>
            </div>
          <div id='heh'>
            <label id='input-description'>Email: </label>
            <input id='hehe' type="text" placeholder="Digite o email"/>
          </div>
          <div id='heh'>
            <label id='input-description'>Senha: </label>
            <input id='hehe' type="password" placeholder="Digite a Senha"/>
            </div>
            <div id='heh'>
            <label id='input-description'>Foto: </label>
            <input id='hehe' type="file" />
            </div>
            <div id='Buttons'>
            <button id='Voltar' onClick={()=>{navigate("/opcao/registrar")}}>Voltar</button>
            <button id='Confirmar' type="submit">Confirmar</button>
            </div>
          </div>
        </div>
    </div>  
  );
}

export default UserRegistration;
