import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;

class SearchDropdown extends Component {
    render() {
        return (
            <div>
                <Select
                    showSearch
                    style={this.props.style}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={(value, name) => {
                        console.log('onChange', name.props.children);
                        this.props.userSelected(value, name.props.children)
                    }
                    }
                    onFocus={() => console.log('e.target.value')}
                    onBlur={() => console.log('e.target.value')}
                    onSearch={(e) => console.log(e)}
                    filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {                        
                        typeof this.props.users !== 'undefined' ?
                        this.props.users.map((usr) => {
                           return( 
                           <Option value={usr.id} name={usr.name}>{usr.name}</Option> 
                           )
                        }) : ''
                    }
                </Select>
            </div>
        );
    }
}

export default SearchDropdown;