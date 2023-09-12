import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import DicodingLogo from './dicoding-logo.png';

console.log('Testing Boss');

function ComponentJS() {
  const heading = React.createElement('h1', null, 'Biodata Perusahaan');

  const listItem1 = React.createElement('li', null, 'Nama: USA');
  const listItem2 = React.createElement('li', null, 'Bidang: Militer');
  const listItem3 = React.createElement('li', null, 'Tagline: Decode Freedom, Discover OIL');
  const listItem4 = React.createElement('strong', { className: 'red-paragraph' }, 'Test React!');

  const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3, listItem4]);

  return (
    <div>
      {heading}
      {unorderedList}
      <img src={DicodingLogo} alt="Dicoding Logo" />
    </div>
  );
}
export default ComponentJS;
