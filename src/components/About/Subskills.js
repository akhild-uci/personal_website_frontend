import React, { Component } from 'react'
import PropType from 'prop-types';

class Subskills extends Component {
    render() {
        return this.props.subskills.map((subskill) => (<div id={subskill.id}>{subskill.name}</div>))
    }
}

// PropTypes
Subskills.propType = {
    subskills: PropType.array.isRequired,
}

export default Subskills;
