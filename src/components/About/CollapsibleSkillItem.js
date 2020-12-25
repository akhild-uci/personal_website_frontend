import React, { Component } from 'react';
import PropType from 'prop-types';
import Subskills from './Subskills';

class CollapsibleSkillItem extends Component {
    state = {
        display: false,
    }

    getPanelStyle = () => {
        return {
            padding: "0 18px",
            backgroundColor: "white",
            overflow: "hidden",
            maxHeight: (this.state.display) ? "124px" : "0",
            transition: "max-height 0.2s ease-out"
        }
    }


    handleClick = (e) => {
        e.preventDefault();
        this.setState({ display: !this.state.display })
    }

    render() {
        const { name, subskills } = this.props.skill;
        return (
            <div>
                <button 
                    className={(this.state.display) ? "collapsible-skill active" : "collapsible-skill"}
                    onClick={this.handleClick}
                >
                    {name}
                </button>
                <div style={this.getPanelStyle()}>
                    <Subskills subskills={subskills}/>
                </div>
            </div>
        )
    }
}


// PropTypes
CollapsibleSkillItem.Proptype = {
    skill: PropType.object.isRequired,
}

export default CollapsibleSkillItem;