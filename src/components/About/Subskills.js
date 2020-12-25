import React, { Component } from 'react'
import PropType from 'prop-types';

class Subskills extends Component {
    render() {
        return this.props.subskills.map((subskill) => (
        <div key={subskill.id} style={subskillStyle}>{subskill.name}</div>
        ))
    }
}

// PropTypes
Subskills.propType = {
    subskills: PropType.array.isRequired,
}

const subskillStyle = {
    padding: '5px'
}

export default Subskills;
