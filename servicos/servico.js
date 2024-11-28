import colecaoUf from '../dados/dados.js';

export const buscarufs = () => {
    return colecaoUf;
}

export const buscarufPornome = (nomeUF) => {
    return colecaoUf.filter(uf => uf.nome.toLocaleLowerCase().includes(nomeUF.toLocaleLowerCase()));
};

export const buscarufPornomeId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}