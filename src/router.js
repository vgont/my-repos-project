import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Repository from './pages/Repository';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Main}/>
                <Route path='/repository/:repository' Component={Repository}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Rotas;
