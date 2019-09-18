import React, { Component } from 'react';
import GridCard from './ant-fields/GridCard';
import Breadcrumbs from './ant-fields/Breadcrumbs';
import { withRouter } from 'react-router-dom';
import BasicInput from './ant-fields/BasicInput';

class AlbumList extends Component {
    render() {
        console.log("ALBUM LIST HIT")

        return (
            <div style={{margin: '20px'}}>
                <Breadcrumbs album={true}/>
                {
                    this.props.authenticate ?
                    <GridCard usrAlbums={this.props.usrAlbums} usrName={this.props.usrName} getAlbumPhotos={this.props.getAlbumPhotos}/> :
                    <div>
                    <p>Authenticate to see the list of albums :</p>
                    <BasicInput validateEmail={this.props.validateEmail}/>
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(AlbumList);