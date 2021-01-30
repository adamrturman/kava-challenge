import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './Landing.module.css';
import logo from '../../img/Kava-logo.svg'

function Landing(props) {
    
    const { display } = props;

    return (
        <div className="col-sm-10 col-md-6 mx-auto mt-5">
            <Card className={styles.info}>
                <Card.Body>
                    <h1 className={styles.heading}><img src={logo} alt="logo" /></h1>
                    <Button className={styles.button} onClick={display}>Render Data</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Landing;
