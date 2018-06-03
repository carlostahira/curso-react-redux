/* 
para rodar o spread operator (...) é necessario um plugin do babel chamado transform-object-rest-spread

*/

const produto = {
    nome: 'caneta',
    preco: 1.5,
    desc: 0.5,
    show: () => {
        const meunome = this.nome;
        return `produto ${meunome} com preco`;
    }
}

function clone(obj) {
    return { ...obj };
}

console.log(produto);

const lapis = clone(produto);
console.log(lapis);

lapis.nome = 'lapis';
console.log(lapis);

