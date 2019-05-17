import React, { Component }  from 'react';
import PropType from 'prop-types'
class Link extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {active,onClick,children} = this.props;
        if(active) {
            return (
                <span>{children}</span>
            )
        }
        return (
            <a href='' onClick={e=>{
                e.preventDefault();
                onClick()
            }}>
                {children}
            </a>
        );
    }
}
Link.propTypes = {
    active:PropType.bool.isRequired,
    children:PropType.node.isRequired,
    onClick:PropType.func.isRequired
}  
export default Link;
