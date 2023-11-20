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

for(let i = 0; i < persone.length; i++){
    const persona = persone[i];
    console.log(persona.nome);
    console.log(persona.ruolo);
    console.log(persona.foto);
}