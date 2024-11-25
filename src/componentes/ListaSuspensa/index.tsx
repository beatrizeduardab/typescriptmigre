import React from 'react';
import './ListaSuspensa.css';

interface ListaSuspensaProps {
    obrigatorio?: boolean;
    label: string;
    itens: string[];
    valor: string;
    aoAlterado: (valor: string) => void;
}

const ListaSuspensa = ({ obrigatorio, label, itens, valor, aoAlterado }: ListaSuspensaProps) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                onChange={evento => aoAlterado(evento.target.value)}
                required={obrigatorio}
                value={valor}
            >
                <option value=""></option>
                {itens.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default ListaSuspensa;