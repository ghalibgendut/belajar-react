import React from 'react';

class SearchBar extends React.Component {

    kirimData = (event) => {
        event.preventDefault();
        console.log(event);
        
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