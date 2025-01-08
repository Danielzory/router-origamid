import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 3000);

        // Limpa o timeout caso o componente seja desmontado antes do tempo
        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <div>
            <h1>Página não encontrada... erro 404</h1>
            <p>Você será redirecionado para a página inicial em breve.</p>
        </div>
    );
};

export default NotFound;