// ROOT COMPONENTS

import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



// Membuat komponen berbasis class

class App extends React.Component {

    // functuin yang wajib ada, apa yang ingin kita tampilkan, akan kita 

    render () {
        return (
            <div className="container">
                <h1 className="text-center mt-3"> REACT 101 </h1>
                <SearchBar/>
                <ImageList/>
            </div>
        );
    }

}

// Karena akan di import di file lain
export default App;
