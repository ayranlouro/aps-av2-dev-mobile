import React from 'react';

import firebaseApp from './services/firebase';

import { UsuarioProvider } from './contexts/user'; 

import Routes from './routes'

export default function App() {
  return (
    <UsuarioProvider>
        <Routes/>
    </UsuarioProvider>
  );
}


