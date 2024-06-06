function adicionarAluno() {
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    
    if (isNaN(nota1) || isNaN(nota2)) {
      alert('Insira valores válidos para as notas.');
      return;
    }
    
    const media = (nota1 + nota2) / 2;
    const status = media >= 5 ? 'Aprovado' : 'Reprovado';
  
    const tabela = document.getElementById('tabelaAlunos');
    const novaLinha = tabela.insertRow();
  
    const celulaNome = novaLinha.insertCell(0);
    const celulaMatricula = novaLinha.insertCell(1);
    const celulaNota1 = novaLinha.insertCell(2);
    const celulaNota2 = novaLinha.insertCell(3);
    const celulaMedia = novaLinha.insertCell(4);
    const celulaStatus = novaLinha.insertCell(5);
  
    celulaNome.innerHTML = nome;
    celulaMatricula.innerHTML = matricula;
    celulaNota1.innerHTML = nota1.toFixed(2);
    celulaNota2.innerHTML = nota2.toFixed(2);
    celulaMedia.innerHTML = media.toFixed(2);
    celulaStatus.innerHTML = status;
  
    document.getElementById('formAluno').reset();
  }
  
  function limparTabela() {
    const tabela = document.getElementById('tabelaAlunos');
    tabela.innerHTML = '';
  }
  