import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from '../App.module.css';
import logo from '../img/Kava-logo.svg'



function Landing(props) {
    console.log("Landing props", props)

    return (
        <div>
            {props.showData ?
                null :
                <div className="col-sm-10 col-md-6 mx-auto mt-5">
                    <Card className={styles.info}>
                        <Card.Body>
                            <h1 className={styles.heading}><img src={logo} alt="logo" /></h1>
                            <Button className={styles.button} onClick={props.displayData}>Render Data</Button>
                        </Card.Body>
                    </Card>
                </div>
            }
        </div>
    )
}

export default Landing