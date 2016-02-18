import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import React from 'react';
import Styles from './styles';


export default (props) => {

    return (
        <div>
            <header className={Styles.header}>
                <Link href='http://' label='Inbox' icon='inbox'/>
            </header>

            <aside className={Styles.aside}>
                <Link className={Styles.link} href='http://' label='Page One' />
                <Link className={Styles.link} href='http://' label='Page Two' />
            </aside>
        </div>
    );

}