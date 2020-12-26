import React, { Component } from 'react';
import PropType from 'prop-types';
import Card from 'react-bootstrap/Card';

class StaticSkillItem extends Component {
    render() {
        return ( 
            <Card>
                <Card.Header>{this.props.skill}</Card.Header>
            </Card>
        )
    }
}


// PropTypes
StaticSkillItem.propType = {
    skill: PropType.string.isRequired,
}

export default StaticSkillItem;
