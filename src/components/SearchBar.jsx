import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {

    // Tempat penyimpanan untuk data komponen 
    state = {
        images : []
        
    }

    kirimData = (event) => {
        // Agar halaman tidak merefresh
        event.preventDefault();
        // console.log(event);

        // Akses Unsplash API
        // Setelah melakukan request akan meruning function 'then'
        // 'then' menerima function dengan satu parameter 'res'
        // 'res' akan berisi 'respon' dari API
        // Data yang diinginkan akan berada di property 'data' dari object 'res'
        // Data akan ada di 'res.data'

        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID PHgqZ0Sw7bhJTi078VrMDJ7I8KPRo_YoQdz32uU15Rs'
                },

                params: {
                    query: 'car',
                    per_page: 15
                }
            }
        ).then(
            (res) => {this.setState({ images: res.data })}
        );
        // setState digunakan untuk meng-update 'state'
    }



    render() {
        return(
            <div>
                <form onSubmit={this.kirimData} className="form-group">
                    <input type="text" name="" className="form-control" id=""/>
                </form>
            </div>
        );
    }
}

export default SearchBar;