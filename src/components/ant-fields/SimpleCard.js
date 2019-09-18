import React, { Component } from 'react';
import { Card } from 'antd';

class SimpleCard extends Component {
    render() {
        return (
            <div>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        );
    }
}

export default SimpleCard;