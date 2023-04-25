const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const reportDir = 'cypress/relatório';

fs.readdir(reportDir, (err, files) => {
  if (err) {
    console.error('Erro ao ler o diretório de relatórios:', err);
    return;
  }

  const htmlFiles = files.filter(file => file.endsWith('.html')).sort();
  const latestReport = htmlFiles[htmlFiles.length - 1];

  if (!latestReport) {
    console.error('Nenhum arquivo de relatório encontrado.');
    return;
  }

  const reportPath = path.join(reportDir, latestReport);
  console.log('Abrindo relatório:', reportPath);

  exec(`start "" "${reportPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao abrir o relatório: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erro ao abrir o relatório: ${stderr}`);
      return;
    }
  });
});
