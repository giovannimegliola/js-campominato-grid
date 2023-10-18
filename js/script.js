// funzione per disegnare le celle nella griglia 10x10

function drawCell(){
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', function(){
    cell.classList.add('active');
  });
  return cell;
}