import React, { Component } from 'react';
import styled from 'styled-components';

const FriendList = styled.ul `
    max-width: 300px;
    min-height: 300px;
    box-sizing: border-box;
    display: flex;
    background-color: #DC143C;
    flex-direction: column;
    padding-right: 15px;
    border: 1px solid grey;
`

const Friend = styled.h5 `
    text-decoration: none;
`

const FriendImg = styled.img `
    max-width: 20px;
    max-height: 20px;
    padding-right: 10px;
`

class FriendsList extends Component {
    render() {
        return (
            <FriendList>
                <h2>Followers</h2>
                {this.props.followers.map((follower, index) => {
                return <Friend key={index}>
                    <FriendImg src={follower.avatar_url} />
                    {follower.login}
                </Friend>
                })}
            </FriendList>
        );
    }
}

export default FriendsList; 