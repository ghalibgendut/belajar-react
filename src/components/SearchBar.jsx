import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {

    kirimData = (event) => {
        // Agar halaman tidak merefresh
        event.preventDefault();
        // console.log(event);

        // Akses Unsplash API
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
            (res) => {
                console.log(res.data);
            }
        );
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