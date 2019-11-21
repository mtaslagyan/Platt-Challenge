import React, { Component } from 'react'
import SearchIcon from '../images/ic/black/ic_search.png'

export class SearchBar extends Component {
    state = {
        auto : [],
        list : [],
        isLoaded : false
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded : true,
                    list : data
                })
            });
    }

    onInputChange = (e) => {
        const {list} = this.state;
        var value = e.target.value;
        let auto = [];
        console.log(auto);
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i')
            auto = list.sort().filter(item => regex.test(item.name));
        }
        this.setState(() => ({auto}))
        console.log({list})
    }

    renderAuto() {
        const {auto} = this.state;
        if(auto.length === 0){
            return null
        }else{
            return(
                <div className="country-dropdown wrapper">
                    <ul>
                        {auto.map(item => <li className="country-list-items" key={item.callingCodes[0]}><img src={item.flag}/>{item.name}</li>)}
                    </ul>
                </div>
            )
        }
    }
    

    render() {

        var {isLoaded} = this.state;
        if(!isLoaded){
            return <div className="dummySearchBar wrapper"></div>
        }else{
           return (
            <div>
                <div className="header-searchBar wrapper">
                    <input onChange={this.onInputChange} id="header-searchBar__input" type="text" name="header-searchBar__input" placeholder="What are you looking for?" />
                    <button><img src={SearchIcon}/></button>
                </div>
                {this.renderAuto()}
            </div>
            ) 
        }

        
    }
}

export default SearchBar
