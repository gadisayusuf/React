import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';
import emojipedia from "./components/emojipidia";

import './index.css';

createRoot(document.getElementById('root')).render(
  <App   />
);