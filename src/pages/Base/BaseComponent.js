import React, { Component } from 'react';



export default class BaseComponent extends Component {
    
    constructor(props) {
        super(props);
        this.curentUrl='';
        window.addEventListener('hashchange',function(event){
            console.log(event.newUrl);
            this.curentUrl = event.newUrl;
        });
    }

    _getCurrentUrl() {
        
    }

    render() {
        return null;
    }
}