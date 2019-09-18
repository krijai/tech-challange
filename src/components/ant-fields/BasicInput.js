import React, { Component } from 'react';
import { Input } from 'antd';

class BasicInput extends Component {
    render() {
        return <Input placeholder="Enter Your Email Address" onPressEnter={(e) => this.props.validateEmail(e)}/>
    }
}

export default BasicInput;