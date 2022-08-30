import React from 'react'
import fbLogo from '../assets/social/facebook-white.svg'
import twitLogo from '../assets/social/twitter-white.svg'
import instaLogo from '../assets/social/instagram-white.svg'
import apple from '../assets/store/app-store.svg'
import google from '../assets/store/play-store.svg'
import micros from '../assets/store/windows-store.svg'

const style = {
    backgroundColor: "black",
    color: 'white',
    textAlign: "start",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0px",
    height: "200px",
    width: "100%",
    zIndex: 99,
}

const sign = {
    color: 'white',
    width: "100%",
    zIndex: 99,
    left: "0",
    bottom: "0px",
    textAlign: "start",
}

const fb = {
    width: '18px',
    height: '18px'
}
const twit = {
    width: '18px',
    height: '18px'
}
const insta = {
    width: '18px',
    height: '18px'
}

const appleStore = {
    width: '180px',
    height: '30px'
}
const goggleStore = {
    width: '180px',
    height: '30px'
}
const Microsoft = {
    width: '180px',
    height: '30px'
}
const box = {
    display: 'table',
    tableLayout: 'fixed',
    borderSpacing: '10px'
}
const itemBox = {
    display: 'table-cell',
}
const Row = {
    left: "0",
    display: 'table',
    tableLayout: 'fixed',
    borderSpacing: '10px'
}
const Col = {
    display: 'table-cell',
}
const RowApp = {
    display: 'table',
    tableLayout: 'fixed',
    borderSpacing: '10px'
}
const ColApp = {
    display: 'table-cell',
}
const Footer = () => {
    return (
        <div className='container'>
            <div style={style}>
                <p>
                    Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account
                </p>
                <p>Copyright 2016 DEMO Streaming All Rights Reserved</p>

                <div style={box}>
                    <div style={itemBox}>
                        <div style={Row}>
                            <div style={Col}>
                                <img style={fb} src={fbLogo} />
                            </div>
                            <div style={Col}>
                                <img style={insta} src={instaLogo} />
                            </div>
                            <div style={Col}>
                                <img style={twit} src={twitLogo} />
                            </div>
                        </div>
                    </div>
                    <div style={itemBox}>
                        <div style={RowApp}>
                            <div style={ColApp}>
                                <img style={appleStore} src={apple} />
                            </div>
                            <div style={ColApp}>
                                <img style={goggleStore} src={google} />
                            </div>
                            <div style={ColApp}>
                                <img style={Microsoft} src={micros} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={sign}>
                    <h6>Prueba tecnica: Valentina Maraio</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;