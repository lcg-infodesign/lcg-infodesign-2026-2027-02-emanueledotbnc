function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 20, 40);

  let numeroGlifi = 30;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = ceil(numeroGlifi / numeroColonne);
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for (let g = 0; g < numeroGlifi; g++) {
    // Selezione casuale tra i tipi di sushi (0: Nigiri, 1: Hosomaki, 2: Onigiri)
    let tipoScelto = floor(random(0, 3)); //floor è il comando opposto di ceil, quindi arrotonda per difetto il numero generato da random
    mioSushi(xCorrente + dimColonna / 2, yCorrente + dimRiga / 2, dimRiga * 0.8, tipoScelto);
    xCorrente = xCorrente + dimColonna;

    if (xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}

// FUNZIONE PRINCIPALE GLIFO
function mioSushi(_x, _y, _size, _tipo) {
  push();
  translate(_x, _y);

  if (_tipo === 0) {
    // Tipo 0 = nigiri
    push();
    noStroke();

    // Riso
    fill(245);
    rectMode(CENTER);
    rect(0, _size * 0.08, _size * 0.6, _size * 0.3, _size * 0.1);

    // Pesce (attuo la seleziopne del colore in modo randomico tramite funzione if/else if)
    let indiceColore = floor(random(0, 4));
    let coloreScelto;
    
    if (indiceColore === 0) {
      coloreScelto = color(245, 110, 80);  // Salmone
    } else if (indiceColore === 1) {
      coloreScelto = color(200, 40, 60);  // Tonno
    } else if (indiceColore === 2) {
      coloreScelto = color(120, 170, 70);  // Avocado
    } else if (indiceColore === 3) {
      coloreScelto = color(240, 150, 150);  // Scampo
    }

    fill(coloreScelto);
    rect(0, 0, _size * 0.7, _size * 0.2, _size * 0.1);

    // Venature del pesce (disegno 3 linee corte e ben inclinate gestite tramite ciclo for)
    stroke(255, 255, 255, 130);
    strokeWeight(_size * 0.02);

    let versoInclinazione = floor(random(0, 2)); // Genera 0 o 1 per determinare il verso dell'inclinazione (pari/dispari)

    for (let i = 0; i < 3; i++) {
      let inclinazione = _size * 0.1; // Inclinazione venatura (positiva per default)
      if (versoInclinazione % 2 !== 0) {
        inclinazione = -_size * 0.1; // Inverte il verso se dispari 
      }

      let xBase = -_size * 0.15 + (i * _size * 0.15);
      line(xBase, -_size * 0.05, xBase + inclinazione, _size * 0.05);
    }

    pop();

  } else if (_tipo === 1) {
    // Tipo 1 = hosomaki
    push();
    noStroke();

    // Rotazione (casuale dei tutto il corpo dell' Hosomaki)
    let passaggiRotazione = floor(random(1, 4));
    for (let r = 0; r < passaggiRotazione; r++) {
      rotate(random(TWO_PI));
    }

    // Alga Nori
    fill(20, 45, 30);
    ellipse(0, 0, _size * 0.7, _size * 0.7);

    // Riso
    fill(245);
    ellipse(0, 0, _size * 0.55, _size * 0.55);

    // Chicchi di riso
    fill(180);
    ellipse(-_size * 0.14, -_size * 0.14, _size * 0.06, _size * 0.035);
    ellipse(_size * 0.14, -_size * 0.14, _size * 0.035, _size * 0.06);
    ellipse(-_size * 0.14, _size * 0.14, _size * 0.035, _size * 0.06);
    ellipse(_size * 0.14, _size * 0.14, _size * 0.06, _size * 0.035);

    // Pesce (uso lo stesso metodo di selezione casuale del colore come nel nigiri)
    let indiceColore = floor(random(0, 4));
    let coloreScelto;

    if (indiceColore === 0) {
      coloreScelto = color(245, 110, 80);  // Salmone
    } else if (indiceColore === 1) {
      coloreScelto = color(200, 40, 60);  // Tonno
    } else if (indiceColore === 2) {
      coloreScelto = color(120, 170, 70);  // Avocado
    } else if (indiceColore === 3) {
      coloreScelto = color(240, 150, 150);  // Scampo
    }

    fill(coloreScelto);
    ellipse(0, 0, _size * 0.225, _size * 0.225);

    pop();

  } else if (_tipo === 2) {
    // Tipo 2 = onigiri
    push();
    noStroke();
    rectMode(CENTER);

    // Riso
    fill(245);
    rect(0, 0, _size * 0.5, _size * 0.5, _size * 0.1);

    // Chicchi di riso
    fill(180);
    ellipse(-_size * 0.12, -_size * 0.12, _size * 0.05, _size * 0.03);
    ellipse(_size * 0.12, -_size * 0.12, _size * 0.03, _size * 0.05);
    ellipse(-_size * 0.12, _size * 0.12, _size * 0.03, _size * 0.05);
    ellipse(_size * 0.12, _size * 0.12, _size * 0.05, _size * 0.03);

    // Alga Nori
    fill(20, 40, 30);
    let dimAlga = _size * 0.15;

    let alga = floor(random(1, 3));
    for (let i = 0; i < alga; i++) {
      if (i % 2 === 0) {
        dimAlga = _size * 0.2;
      } else {
        dimAlga = _size * 0.25;
      }
    }

    rect(0, _size * 0.25 - dimAlga / 2, dimAlga, dimAlga, _size * 0.04);

    pop();
  }

  pop();
}