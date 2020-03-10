import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {

    // Tempat penyimpanan untuk data komponen 
    state = {
        images : []
        
    }

    kirimData = (event) => {
        // Agar halaman tidak merefresh / reload
        event.preventDefault();

        // Akses Unsplash API
        // Setelah melakukan request akan meruning function 'then'
        // 'then' menerima function dengan satu parameter 'res'
        // 'res' akan berisi 'respon' dari API
        // Data yang diinginkan akan berada di property 'data' dari object 'res'
        // Data akan ada di 'res.data'

        // request gambar
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID PHgqZ0Sw7bhJTi078VrMDJ7I8KPRo_YoQdz32uU15Rs'
                },

                params: {
                    query: 'Car',
                    per_page: 15
                }
            }
            // respon dari request (res) disimpan ke 'state'
        ).then(
            (res) => {
                this.setState({ images: res.data.results });
            }
        );
        // setState digunakan untuk meng-update 'state'
    }



    render() {
        return(
            <div>
                <form onSubmit={this.kirimData} className="form-group">
                    <input type="text" name="search-bar" className="form-control" id=""/>
                </form>
            </div>
        );
    }
}

export default SearchBar;