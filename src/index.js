// React, digunakan untuk memproses kode menjadi sebuah komponen
import React from 'react';

// Digunakan untuk memanipulasi komponen atau menghubungkan app.js ke index.html
import ReactDOM from 'react-dom';

// extension .js tidak wajib ditulis
import App from './components/App';


// Menghubungkan App ke index.html di folder public
ReactDOM.render(<App/>, document.getElementById('root'));