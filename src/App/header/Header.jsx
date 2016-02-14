import {Row, Col} from 'react-flexbox-grid/lib';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import {Link} from 'react-router'
import React from 'react';
import style from './style';
import Content from '../content/Content';
import Styles from './style';

export default (props) => {

    const actions = [
        {label: 'Company', raised: true, icon: 'access_alarm'},
        {label: 'App', raised: true, accent: true, icon: 'room'}
    ];

    return (

        <Row>
            <Col md={12}>
                <AppBar className={style.appbar} flat>
                    <Navigation type='horizontal' actions={actions}>
                        <Link to="/app">App</Link>
                        <Link to="/company">Company</Link>
                    </Navigation>
                </AppBar>

                <div className={style.content}>
                    <Content>
                        { props.children }
                    </Content>
                </div>
            </Col>
        </Row>


    );

}