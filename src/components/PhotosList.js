import React, { Component } from 'react';
import CustomCard from './ant-fields/CustomCard';
import Breadcrumbs from './ant-fields/Breadcrumbs';

const style = {
    parent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    child: {
        flex: '1 0 25%',
        maxWidth: 'calc(240px - 40px)',
        margin: '10px 20px'
    }
}

class PhotosList extends Component {
    render() {
        console.log(this.props.usrPhotos)
        return (
            <React.Fragment>
                <Breadcrumbs album={false}/>
                <div style={style.parent}>
                    {
                        this.props.usrPhotos[0] ?
                        this.props.usrPhotos[0].map((photo, key) => 
                            {
                                return (
                            <CustomCard url={photo.thumbnailUrl} title={photo.title} key={key} style={style.child}/>
                                )
                            }
                        ) : ''
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default PhotosList;