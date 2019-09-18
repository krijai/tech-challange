import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

class CustomCard extends Component {
    render() {
        return (
                <Card
                    hoverable
                    style={this.props.style}
                    cover={<img alt="example" src={this.props.url} 
                    key={this.props.key}/>}
                >
                    <Meta title={this.props.title}/>
                </Card>
        );
    }
}

export default CustomCard;