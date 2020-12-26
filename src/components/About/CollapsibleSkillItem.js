import React, { Component } from 'react';
import PropType from 'prop-types';
import Subskills from './Subskills';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';


class CollapsibleSkillItem extends Component {
    render() {
        const { name, subskills } = this.props.skill;
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={name}>
                    {name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={name}>
                    <Subskills subskills={subskills}/>
                </Accordion.Collapse>
            </Card>
        )
    }
}


// PropTypes
CollapsibleSkillItem.Proptype = {
    skill: PropType.object.isRequired,
}

export default CollapsibleSkillItem;