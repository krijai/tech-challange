import React, { Component } from 'react';
import { Card } from 'antd';
import './GridCard.scss';

var randomColor = require('randomcolor');

class GridCard extends Component {
    render() {
        const usrName = this.props.usrName ? this.props.usrName : ''
        return (
            <div className="gridCardWrapper">
                <Card title={`${usrName} Albums`}>
                   { this.props.usrAlbums.map((album) => {
                       return (
                            <Card.Grid className="gridCard"
                            style={{
                                backgroundColor: randomColor({
                                    format: 'rgba',
                                    alpha: 0.7
                                })
                                }}
                            onClick={() => 
                                {
                                    return this.props.getAlbumPhotos(album.id);
                                }
                            }
                            loading={true}
                            >
                                {album.title}
                            </Card.Grid>
                       )
                   })
                }
                </Card>
            </div>
        );
    }
}

export default GridCard;