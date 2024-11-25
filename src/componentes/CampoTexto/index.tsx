import './CampoTexto.css'

import React from 'react';
import './CampoTexto.css';

interface CampoTextoProps {
    obrigatorio?: boolean;
    label: string;
    placeholder: string;
    valor: string;
    aoAlterado: (valor: string) => void;
}

const CampoTexto = ({ obrigatorio, label, placeholder, valor, aoAlterado }: CampoTextoProps) => {
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
                required={obrigatorio}
            />
        </div>
    );
}

export default CampoTexto;