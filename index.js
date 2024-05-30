let quantidadeDeVitorias = 30;
let quantidadeDeDerrotas = 10;
let saldoVitorias = saldoVitoria(quantidadeDeVitorias, quantidadeDeDerrotas);
let nivel = rankearNivel(saldoVitorias);

function contarPartidas(quantidadeDeVitorias, quantidadeDeDerrotas) {
    // Esta função pode ser usada para incrementar o número de vitórias e derrotas
    // Aqui, vamos apenas retornar a soma das partidas
    return quantidadeDeVitorias + quantidadeDeDerrotas;
}

function saldoVitoria(vitorias, derrotas) {
    return vitorias - derrotas;
}

function rankearNivel(saldoVitorias) {
    if (saldoVitorias < 10) {
        return "ferro";
    } else if (saldoVitorias <= 20) {
        return "bronze";
    } else if (saldoVitorias <= 50) {
        return "prata";
    } else if (saldoVitorias <= 80) {
        return "ouro";
    } else if (saldoVitorias <= 90) {
        return "diamante";
    } else if (saldoVitorias <= 100) {
        return "lendário";
    } else {
        return "imortal";
    }
}

// Exemplo de como atualizar as vitórias e derrotas
quantidadeDeVitorias = 25;
quantidadeDeDerrotas = 10;
saldoVitorias = saldoVitoria(quantidadeDeVitorias, quantidadeDeDerrotas);
nivel = rankearNivel(saldoVitorias);

console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);


