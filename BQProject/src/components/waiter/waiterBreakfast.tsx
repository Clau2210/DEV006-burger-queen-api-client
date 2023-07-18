/* eslint-disable @typescript-eslint/ban-types */
// export default function WaiterBreakfast(){
//     return <h1>Waiter</h1>;
// }

import React from 'react';

// Definimos el tipo de props que nuestro componente va a aceptar. En este caso, no tiene ninguna prop, así que es un objeto vacío.
type BreakfastLunchButtonsProps = {};

// Creamos el componente usando una función de flecha. Nota el uso de FC (Funcional Component) de React.
const BreakfastLunchButtons: React.FC<BreakfastLunchButtonsProps> = () => {
  // Estos son los handlers para los eventos de clic en los botones
  const handleBreakfastClick = () => {
    console.log('Desayuno');
  };

  const handleLunchClick = () => {
    console.log('Lunch');
  };

  // Aquí es donde renderizamos los botones usando JSX
  return (
    <div>
      <button className='buttonBreakfast' onClick={handleBreakfastClick}>Desayuno</button>
      <button className='buttonLunch' onClick={handleLunchClick}>Almuerzo y Cena</button>
    </div>
  );
};

export default BreakfastLunchButtons;

// const buttonBreakfast: HTMLButtonElement = document.createElement('button');
// buttonBreakfast.textContent = 'Desayuno';
// buttonBreakfast.className = 'buttonBreakfast';

// const buttonLunch: HTMLButtonElement = document.createElement('button');
// buttonLunch.textContent = 'Almuerzo y Cena';
// buttonLunch.className = 'buttonLunch';

// document.body.appendChild(buttonBreakfast);
// document.body.appendChild(buttonLunch); 

// buttonBreakfast.addEventListener('click', () =>{
//     console.log('Desayuno');
// });

// buttonLunch.addEventListener('click', () =>{
//     console.log('Lunch');
// });