function calcularNivelRankeadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas
    let nivel
  
    if (vitorias < 10) {
      nivel = 'Ferro'
    } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = 'Bronze'
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = 'Prata'
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = 'Ouro'
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = 'Diamante'
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = 'Lendário'
    } else {
      nivel = 'Imortal'
    }
  
    console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`)
  }
  
  const vitorias = 60
  const derrotas = 20
  calcularNivelRankeadas(vitorias, derrotas)