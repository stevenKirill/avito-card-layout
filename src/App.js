import React from 'react';
import AvitoCard  from './Components/AvitoCard/AvitoCard';

const props = {
  phone: '123-456-789',
  description: 'Скажите продавцу, что увидели это объявление на Avito',
  name: 'Аделаида Алексеевна',
  registrationDate: new Date(),
  status: "Частное лицо",
  adress: 'город Москва, улица Дмитрия Донского'
}
function App() {
  return (
    <AvitoCard {...props}/>
  );
}

export default App;
