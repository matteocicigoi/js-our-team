'use strict';

// array contenente le persone
const persone = [
    // prima persona
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        foto : 'wayne-barnett-founder-ceo.jpg'
    },
    // seconda persona
    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        foto : 'angela-caroll-chief-editor.jpg'
    },
    // terza persona
    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        foto : 'walter-gordon-office-manager.jpg'
    },
    // quarta persona
    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        foto : 'angela-lopez-social-media-manager.jpg'
    },
    // quinta persona
    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        foto : 'scott-estrada-developer.jpg'
    },
    // sesta persona
    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        foto : 'barbara-ramos-graphic-designer.jpg'
    }
];
// elemento contenitore
const main = document.querySelector('main');
// recupera le persone dall'array
for(let i = 0; i < persone.length; i++){
    const persona = persone[i];

    // contenitori
    const box = document.createElement('div');
    const content = document.createElement('div');
    box.className = 'box';
    content.className = 'content';

    // nome ruolo foto
    const nome = document.createElement('h2');
    const ruolo = document.createElement('span');
    const foto = document.createElement('img');

    // inserisce i valori
    foto.src = 'img/' + persona.foto;
    nome.innerHTML = persona.nome;
    ruolo.innerHTML = persona.ruolo;

    // nel dom
    content.append(foto, nome, ruolo);
    box.append(content);
    main.append(box);

    // output nella console
    console.log(persona.nome);
    console.log(persona.ruolo);
    console.log(persona.foto);
}