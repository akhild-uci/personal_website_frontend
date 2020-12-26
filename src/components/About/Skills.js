import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CollapsibleSkillItem from './CollapsibleSkillItem';
import StaticSkillItem from './StaticSkillItem';

class Skills extends Component {
    state = {
        skills : [
            {
                id: "1",
                name: "Python",
                isContainer: true,
                subskills: [
                    {
                        id: "11",
                        name: "Selenium"
                    },
                    {
                        id: "12",
                        name: "Beautiful Soup"
                    },
                    {
                        id: "13",
                        name: "Flask"
                    },
                    {
                        id: "14",
                        name: "Pygame"
                    }
                ]
            },
            {
                id: "2",
                name: "C/C++",
                isContainer: true,
                subskills: [
                    {
                        id: "21",
                        name: "Valgrind memcheck"
                    },
                    {
                        id: "22",
                        name: "Google Tests (gtest)"
                    },
                ]
            },
            {
                id: "3",
                name: "SQL",
                isContainer: true,
                subskills: [
                    {
                        id: "31",
                        name: "Oracle Database"
                    },
                    {
                        id: "32",
                        name: "MySQL"
                    },
                ]
            },
            {
                id: "4",
                name: "JavaScript",
                isContainer: true,
                subskills: [
                    {
                        id: "41",
                        name: "Node.js"
                    },
                    {
                        id: "42",
                        name: "Express.js"
                    },
                    {
                        id: "43",
                        name: "Socket.io"
                    },
                    {
                        id: "44",
                        name: "React.js"
                    },
                    {
                        id: "45",
                        name: "jQuery"
                    },
                ]
            },
            {
                id: "5",
                name: "HTML/CSS",
                isContainer: false,
            }
        ]
    }

    produceSkills = () => {
        return this.state.skills.map((skill) => {
            if (skill.isContainer) {
                return (<CollapsibleSkillItem key={skill.id} skill={skill}/>)
            } else {
                return (<StaticSkillItem key={skill.id} skill={skill.name}/>)
            }
        })
    }

    render() {
        return (
            <Accordion>
                {this.produceSkills()}
            </Accordion>
        )
    }
}

export default Skills;

