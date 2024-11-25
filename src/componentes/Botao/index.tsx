import React from 'react';
import './Botao.css';

interface BotaoProps {
    children: React.ReactNode;
}

const Botao = ({ children }: BotaoProps) => {
    return (
        <button className="botao">
            {children}
        </button>
    );
}

export default Botao;