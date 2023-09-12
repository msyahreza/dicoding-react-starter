import React from 'react';
import { createRoot } from 'react-dom/client';
import NewElements from './index';

const element = (
  <div>
    <NewElements />
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: USA</li>
      <li>Bidang: Militer</li>
      <li>Tagline: Decode Freedom, Discover Oil's</li>
      <img src="download.png" alt="Freedom" />
    </ul>
  </div>
);

const elements = createRoot(document.getElementById('element'));
elements.render(element);
