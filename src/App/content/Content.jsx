import {Row, Col} from 'react-flexbox-grid/lib';
import React from 'react';
import style from './style';

export default (props) => {

    return (
        <Row>
            <div className={style.container}>
                <Col md={8}>
                    { props.children }
                </Col>
            </div>
        </Row>
    );

}

