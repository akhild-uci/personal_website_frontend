import React, { Component } from 'react';
import PropType from 'prop-types';

class StaticSkillItem extends Component {
    render() {
        const { name } = this.props.skill;
        return ( 
            <div>
                <div className="static-skill">{name}</div>
            </div>
        )
    }
}


// PropTypes
StaticSkillItem.propType = {
    skill: PropType.object.isRequired,
}

export default StaticSkillItem;
