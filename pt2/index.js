/**
 */
function solveSingleAttackQueens() {
}

// Interface en ligne de commande (si exécuté directement)
if (require.main === module) {
  const solutions = solveSingleAttackQueens();
  console.log(`Found ${solutions.length} configurations for a 4x4 board.`);
  solutions.forEach((config, index) => {
    console.log(`Configuration ${index + 1}:`);
    config.forEach(line => console.log(line));
    console.log("");
  });
}

module.exports = solveSingleAttackQueens;
