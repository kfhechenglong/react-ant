import React, { Component }  from 'react';
import PropType from 'prop-types'
class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {onClick,completed,text} = this.props;
        return (
            <li onClick={onClick} style={{textDecoration:completed ? 'line-through' : 'none'}}>
                {text}
            </li>
        );
    }
}
TodoItem.propTypes = {
    onClick:PropType.func.isRequired,
    completed:PropType.bool.isRequired,
    text:PropType.string.isRequired
}  
export default TodoItem;
