import React, { Component } from 'react';

//Access Key:2d9767df00dff9fa67a00ee6981ddf01bd54564be05b73798ca988deff41fcf8
//Secret key:8f256ced287651881cff91c893d10ebaa185ca4aca1433958c8e684ba69e09b0

class SearchBar extends Component {
    state = {
        term: ''
    }

    //Khi submit lay du lieu tu input(term) roi truyen du lieu tu ben SearchBar sang App
    onSumitForm = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.onSumitForm} >
                <div className="ui segment">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;