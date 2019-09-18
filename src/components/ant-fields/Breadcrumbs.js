import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class Breadcrumbs extends Component {
    render() {
        console.log('this.props.history', this.props.handleBack)
        return (
            <div>
                {
                    this.props.album ? 
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Albums</Breadcrumb.Item>
                    </Breadcrumb> :
                    
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/albums'>Albums</Breadcrumb.Item>
                        <Breadcrumb.Item>Photos</Breadcrumb.Item>
                    </Breadcrumb>
                }
            </div>
        );
    }
}

export default Breadcrumbs;