import React, { useState, useCallback } from 'react';
import Title from '../../components/Title';
import Form from '../../components/Form';
import Container from '../../components/Container';
import SubmitButton from '../../components/SubmitButton';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

export default function Main() {

  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    async function submit() {
      try {
        const response = await api.get(`repos/${newRepo}`);
        
        const data = {
          name: response.data.full_name,
        }

        setRepositories([...repositories, data.name]);
        setNewRepo('');
        
      } catch (error) {
          console.log(error);        
      } finally{
        setLoading(false);
      }
    }

    submit();

    setLoading(true);

  }, [newRepo, repositories])


  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }


  return (
    <Container>

      <Title icon={<FaGithub size={25} className='mr-3' />} title={'My Repositories'} />

      <Form action={handleSubmit}>
        <input className='flex-1 border border-slate-300 py-3 px-4'
          type="text"
          placeholder='Add Repository'
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton type={'submit'} loading={loading? 1:0}>
          {loading? (
            <FaSpinner color='#FFF' size={14}/>
          ):(
            <FaPlus color='#fff' size={14} />
          )}
        </SubmitButton>

      </Form>

    </Container>
  )
}