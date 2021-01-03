import React, { Component } from 'react';
import PropType from 'prop-types';
import Subskills from './Subskills';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';


class CollapsibleSkillItem extends Component {
    state = {
        isExpanded: false
    }

    handleClick = () => {
        this.setState({isExpanded : !this.state.isExpanded})
    }
    render() {
        const { name, subskills } = this.props.skill;
        return (
            <Card className="collapsible">
                <Accordion.Toggle as={Card.Header} eventKey={name} onClick={this.handleClick}>
                    {name}
                    <Badge variant="secondary" style={badgeStyle}>
                        {this.state.isExpanded ? "-" : "+"}
                    </Badge>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={name}>
                    <Subskills subskills={subskills}/>
                </Accordion.Collapse>
            </Card>
        )
    }
}

const badgeStyle = { float: "right"}



// PropTypes
CollapsibleSkillItem.Proptype = {
    skill: PropType.object.isRequired,
}

export default CollapsibleSkillItem;