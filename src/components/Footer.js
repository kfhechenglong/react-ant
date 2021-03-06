import React, { Component }  from 'react';
import FilterLink from './containers/FilterLink'
class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            <p>
                Show:<FilterLink filter="SHOW_ALL">All</FilterLink>
                {','}
                <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
                {','}
                <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </p>
        );
    }
}
export default Footer;
