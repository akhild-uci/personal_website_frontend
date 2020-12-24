import React, { Component } from 'react';
import PropType from 'prop-types';

class StaticSkillItem extends Component {
    render() {
        const { name } = this.props.skill;
        return ( <div className="static-skill">{name}</div> )
    }
}


// PropTypes
StaticSkillItem.propType = {
    skill: PropType.object.isRequired,
}

export default StaticSkillItem;
