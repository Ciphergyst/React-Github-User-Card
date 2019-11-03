import React, { Component } from 'react';
import styled from 'styled-components';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = styled.div `
    box-sizing: border-box;
    background-color: #DC143C;
    max-width: 300px;
    max-height: 500px;
    border: 7px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
`

class UserCard extends Component {
    render() {
        return (
            <Card>
                <CardHeader image={this.props.avatar_url} username={this.props.login} />
                <CardBody followers={this.props.followers} image={this.props.avatar_url}  />
            </Card>
        );
    }
}

export default UserCard; 