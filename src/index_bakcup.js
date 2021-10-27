import React from 'react'
import ReactDOM from 'react-dom'

import Web3Js from 'web3'

import { Buffer } from 'buffer';
import './index.css'
import ipfs from './ipfs'

class Main extends React.Component {
    constructor() {
        super();


        this.onImageChange = this.onImageChange.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);

        this.state = {
            ipfsHash: 'Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu',
            buffer: null,
            loadedimage: null,
            content: [{
                author:
                    '0x211824098yf7320417812j1002341342342341234',
                message: 'This is a test',
                hashtags: ['test', 'dapp', 'blockchain'],
                time: new Date().toLocaleDateString(),
                image: 'https://ipfs.io/ipfs/QmeXs3naKK2Y4GCANLNSmpfbhMcurRXzqkMomXxvs7qNJH'
            }, {
                author:
                    '0x211824098yf7320417812j1002341342342341234',
                message: 'This is another test',
                hashtags: ['sample', 'dapp', 'Ethereum'],
                time: new Date().toLocaleDateString(),
                image: 'https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu'
            }],
            topHashtags: ['dapp', 'Ethereum', 'blockchain',
                'technology', 'design'],
            followedHashtags: ['electronics', 'design', 'robots',
                'futurology', 'manufacturing'],
            displaySubscribe: false,
            displaySubscribeId: '',
        }

        this.setup();
    }


    async setup() {
        window.web3js = new Web3Js(ethereum)
        try {
            await ethereum.enable();
        } catch (error) {
            alert('You must approve this dApp to interact with it, reload it to approve it')
        }

        const user = (await web3js.eth.getAccounts())[0]
        window.contract = new web3js.eth.Contract(ABI.abi, ABI.networks['3'].address, {
        from: user
        })
        await this.setState({contract, user});


    }



    onClickSubmit(event) {
        event.preventDefault();
        console.log('ifpsHash 2', this.state.ipfsHash);
        ipfs.add(this.state.buffer, (error, result) => {
            if (error) {
                console.error(error);
                return;
            };
        }).then((result) => { console.log('result ', result); this.setState({ ipfsHash: result.path }) });
    }


    onImageChange(event) {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new window.FileReader();
        const readerbuf = new window.FileReader();
        readerbuf.readAsArrayBuffer(file);
        reader.readAsBinaryString(file);
        reader.onloadend = () => {
            this.setState({ buffer: Buffer(readerbuf.result) });
            this.setState({ loadedimage: btoa(Buffer(reader.result)) });
            console.log('buffer', this.state.buffer);
            console.log('loadedimag', this.state.loadedimage);
        }
    }

    generateHashtags(hashtag, index) {
        let timeout
        return (
            <span onMouseEnter={() => {
                clearTimeout(timeout)
                this.setState({
                    displaySubscribe: true,
                    displaySubscribeId: `subscribe-${hashtag}-
        ${index}`,
                })
            }} onMouseLeave={() => {
                timeout = setTimeout(() => {
                    this.setState({
                        displaySubscribe: false,
                        displaySubscribeId: '',
                    })
                }, 2e3)
            }}>
                <a className="hashtag" href="#">#{hashtag}</a>
                <span className="spacer"></span>
                <button ref={`subscribe-${hashtag}-${index}`}
                    className={this.state.displaySubscribe &&
                        this.state.displaySubscribeId == `subscribe-${hashtag}-${index}` ?
                        '' : 'hidden'} type="button">Subscribe</button>
                <span className="spacer"></span>
            </span>
        )
    }

    render() {

        let contentBlock = this.state.content.map((element, index) => (
            <div key={index} className="content">
                <div className="content-address">{element.author}</div>
                <div className="contentmessage">{
                    element.message}</div>
                <div className="contenthashtags">{
                    element.hashtags.map((hashtag, i) => (
                        <span key={i}>
                            {this.generateHashtags(hashtag, index)}
                        </span>
                    ))}
                </div>
                <div className="content-time">{element.time}</div>
                <img className="post-image" src={element.image} />
            </div>
        ))
        let hashtagBlock = this.state.topHashtags.map((hashtag, index) => (
            <div key={index}>
                {this.generateHashtags(hashtag, index)}
            </div>
        ))
        let followedHashtags = this.state.followedHashtags.map((hashtag,
            index) => (
            <div key={index}>
                {this.generateHashtags(hashtag, index)}
            </div>
        ))



        return (
            <div className="main-container">
                <div className="hashtag-block">
                    <h3>Top hashtags</h3>
                    <div className="hashtagcontainer">{
                        hashtagBlock}</div>
                    <h3>Followed hashtags</h3>
                    <div className="hashtagcontainer">{
                        followedHashtags}</div>
                </div>
                <div className="content-block">
                    <div className="input-container">
                        <textarea placeholder="Publish
            content..."></textarea>
                        <div className="imageframe">
                            <img className="imageipfs" src={`data:image/jpeg;base64,${this.state.loadedimage}`} alt="ipfsimage" />

                            <input className="buttonipfs" type='file' onChange={this.onImageChange} />
                        </div>
                        <input type="text" placeholder="Hashtags
            separated by commas..."/>
                        <button type="button" onClick={this.onClickSubmit}>Publish</button>
                    </div>
                    <div className="content-container">
                        {contentBlock}
                    </div>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<Main />, document.querySelector('#root'))
