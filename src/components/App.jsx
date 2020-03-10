// ROOT COMPONENTS

import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import axios from 'axios';



// Membuat komponen berbasis class

class App extends React.Component {

    state = {
        images: []
    }

    onCari (keyword) {
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID PHgqZ0Sw7bhJTi078VrMDJ7I8KPRo_YoQdz32uU15Rs'
                },

                params: {
                    query: keyword,
                    per_page: 15
                }
            }
            // respon dari request (res) disimpan ke 'state'
        ).then(
            (res) => {
                console.log(res.data.results);
                 // this.setState({ images: res.data.results });
                
            }
        );
    }
   
   
    // functuin yang wajib ada, apa yang ingin kita tampilkan, akan kita 

    render () {
        return (
            <div className="container">
                <h1 className="text-center mt-3"> REACT 101 </h1>
                <SearchBar onCari={this.onCari}/>
                <ImageList/>
            </div>
        );
    }

}

// Karena akan di import di file lain
export default App;
