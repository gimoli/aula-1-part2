class Calendario {
  constructor() {
    this.meses = [
      { nome: 'Janeiro', dias: 31 },
      { nome: 'Fevereiro', dias: (ano) => this.ehBissexto(ano) ? 29 : 28 },
      { nome: 'Março', dias: 31 },
      { nome: 'Abril', dias: 30 },
      { nome: 'Maio', dias: 31 },
      { nome: 'Junho', dias: 30 },
      { nome: 'Julho', dias: 31 },
      { nome: 'Agosto', dias: 31 },
      { nome: 'Setembro', dias: 30 },
      { nome: 'Outubro', dias: 31 },
      { nome: 'Novembro', dias: 30 },
      { nome: 'Dezembro', dias: 31 }
    ];
  }

  // Verifica se um ano é bissexto
  ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  }

  // Retorna o número de dias em um mês específico
  diasNoMes(mes, ano) {
    if (mes < 1 || mes > 12) return 0;
    
    const mesInfo = this.meses[mes - 1];
    return typeof mesInfo.dias === 'function' ? mesInfo.dias(ano) : mesInfo.dias;
  }

  // Gera o calendário para um ano específico
  gerarCalendarioAno(ano) {
    if (ano < 1925 || ano > 2025) {
      console.log('Ano fora do intervalo permitido (1925-2025)');
      return;
    }

    console.log(`\n=== Calendário de ${ano} ===`);
    this.meses.forEach((mes, index) => {
      const dias = this.diasNoMes(index + 1, ano);
      console.log(`${mes.nome}: ${dias} dias`);
    });

    console.log(`Fevereiro tem ${this.diasNoMes(2, ano)} dias (${this.ehBissexto(ano) ? 'bissexto' : 'não bissexto'})`);
  }

  // Mostra todos os anos bissextos no intervalo
  listarAnosBissextos() {
    console.log('\nAnos bissextos entre 1925 e 2025:');
    for (let ano = 1925; ano <= 2025; ano++) {
      if (this.ehBissexto(ano)) {
        console.log(ano);
      }
    }
  }

  // Retorna informações completas sobre um mês específico
  infoMes(mes, ano) {
    if (mes < 1 || mes > 12) return 'Mês inválido';
    
    const mesInfo = this.meses[mes - 1];
    const dias = this.diasNoMes(mes, ano);
    
    return {
      nome: mesInfo.nome,
      ano: ano,
      dias: dias,
      bissexto: mes === 2 ? this.ehBissexto(ano) : null
    };
  }
}

// ==============================================
// Exemplos de uso do calendário
// ==============================================

const calendario = new Calendario();

// 1. Gerar calendário completo para um ano
console.log('----------------------------------------');
console.log('EXEMPLO 1: Calendário completo de 2024');
console.log('----------------------------------------');
calendario.gerarCalendarioAno(2024);

// 2. Verificar dias em um mês específico
console.log('\n----------------------------------------');
console.log('EXEMPLO 2: Dias em Fevereiro de 2000');
console.log('----------------------------------------');
console.log(`Dias: ${calendario.diasNoMes(2, 2000)}`);

// 3. Listar todos os anos bissextos
console.log('\n----------------------------------------');
console.log('EXEMPLO 3: Todos os anos bissextos');
console.log('----------------------------------------');
calendario.listarAnosBissextos();

// 4. Obter informações detalhadas sobre um mês
console.log('\n----------------------------------------');
console.log('EXEMPLO 4: Informações sobre Abril de 1999');
console.log('----------------------------------------');
console.log(calendario.infoMes(4, 1999));

// 5. Testar com um ano fora do intervalo
console.log('\n----------------------------------------');
console.log('EXEMPLO 5: Ano fora do intervalo (2100)');
console.log('----------------------------------------');
calendario.gerarCalendarioAno(2100);