import React from 'react'
import ReactDOM from 'react-dom'
import Web3Js from 'web3'
import { Buffer } from 'buffer';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import './index.css'
import ipfs from './ipfs'
import ABI from './ABI'

class Hashtag extends React.Component {
    constructor(props) {
        super()
        this.state = {
            displaySubscribe: false,
            displayUnsubscribe: false,
            hasSubscription: false,
        }
    }


    componentDidMount() {
        this.checkExistingSubscription()
    }

    bytes32(name) {
        let nameHex = web3js.utils.toHex(name)
        for (let i = nameHex.length; i < 66; i++) {
            nameHex = nameHex + '0'
        }
        return nameHex
    }

    async checkExistingSubscription() {
        const hasSubscription = await
            this.props.contract.methods.hasSubscription(this.bytes32(this.props.hashtag)).call()
        this.setState({ hasSubscription })
    }

    render() {
        return (
            <span onMouseEnter={async () => {
                await this.checkExistingSubscription()
                if (!this.state.hasSubscription) {
                    this.setState({
                        displaySubscribe: true,
                        displayUnsubscribe: false,
                    })
                } else {
                    this.setState({
                        displaySubscribe: false,
                        displayUnsubscribe: true,
                    })
                }
            }
            } onMouseLeave={() => {
                this.setState({
                    displaySubscribe: false,
                    displayUnsubscribe: false,
                })
            }}>

                <a className="hashtag" href="#">#{this.props.hashtag}</a>
                <span className="spacer"></span>
                <button onClick={() => {
                    this.props.subscribe(this.props.hashtag)
                }} className={this.state.displaySubscribe ? '' :
                    'hidden'} type="button">Subscribe</button>
                <button onClick={() => {
                    this.props.unsubscribe(this.props.hashtag)
                }} className={this.state.displayUnsubscribe ? '' :
                    'hidden'} type="button">Unsubscribe</button>
                <span className="spacer"></span>
            </span>
        )
    }
}


class Main extends React.Component {
    constructor() {
        super();

        this.onImageChange = this.onImageChange.bind(this);
        this.onContentVote = this.onContentVote.bind(this);

        this.state = {
            ipfsHash: null,
            buffer: null,
            loadedimage: null,
            contentsBlock: [],
            topHashtags: [],
            followedHashtags: []
        }

        this.content = React.createRef();
        this.hashtags = React.createRef();

        this.setup();
    }

    async setup() {
        window.web3js = new Web3Js(ethereum)
        try {
            ethereum.request({ method: 'eth_requestAccounts' })
        } catch (error) {
            alert('You must approve this dApp to interact with it, reload it to approve it')
        }

        const user = (await web3js.eth.getAccounts())[0]
        window.contract = new web3js.eth.Contract(ABI.abi, ABI.networks["5777"].address, {
            from: user
        })


        await this.setState({ contract, user });


        await this.getHashtags()
        await this.getContent()
    }


    bytes32(name) {
        let nameHex = web3js.utils.toHex(name)
        for (let i = nameHex.length; i < 66; i++) {
            nameHex = nameHex + '0'
        }
        return nameHex
    }

    //smart-contract method calls:
    async publishContent(message, hashtags) {
        if (message.length == 0) alert('You must write a message')
        hashtags = hashtags.trim().replace(/#*/g, '').replace(/,+/g, ',').split(',').map(element => this.bytes32(element.trim()))
        message = this.bytes32(message)

        if (this.state.buffer.length > 0) {

            await ipfs.add(this.state.buffer, (error, result) => {
                if (error) {
                    console.error(error);
                    return;
                };

            }).then((result) => {
                this.setState({ ipfsHash: result.path })

                try {
                    this.state.contract.methods.addContent(message, this.bytes32(this.state.ipfsHash),
                        hashtags).send({
                            from: this.state.user
                        })
                } catch (e) { console.log('Error', e) }
            });
        }
        else
            try {
                await this.state.contract.methods.addContent(message, this.bytes32(this.state.ipfsHash),
                    hashtags).send({
                        from: this.state.user
                    })
            } catch (e) { console.log('Error', e) }
        await this.getHashtags()
        await this.getContent()
    }

    async subscribe(hashtag) {
        try {
            await
                this.state.contract.methods.subscribeToHashtag(this.bytes32(hashtag)).send({ from: this.state.user })
        } catch (e) { console.log(e) }
        await this.getHashtags()
        await this.getContent()
    }

    async unsubscribe(hashtag) {
        try {
            await
                this.state.contract.methods.unsubscribeToHashtag(this.bytes32(hashtag)).send({ from: this.state.user })
        } catch (e) { console.log(e) }
        await this.getHashtags()
        await this.getContent()
    }


    onImageChange(event) {
        event.preventDefault()

        const file = event.target.files[0]
        const reader = new window.FileReader()
        const readerbuf = new window.FileReader()
        readerbuf.readAsArrayBuffer(file)
        reader.readAsBinaryString(file)
        reader.onloadend = () => {
            this.setState({ loadedimage: Buffer(reader.result, 'binary').toString('base64') })
        }
        readerbuf.onloadend = () => {
            this.setState({ buffer: Buffer(readerbuf.result) })
        }

    }

    async onContentVote(event, id) {

        if (event.target.checked) {
            try {
                const nbVotesU = (await this.state.contract.methods.voteContent(id).send({ from: this.state.user }))
            } catch (e) { console.log(e) }
        }
        else {
            try {
                const nbVotesD = (await this.state.contract.methods.unvoteContent(id).send({ from: this.state.user }))
            } catch (e) { console.log(e) }
        }
        await this.getHashtags()
        await this.getContent()
    }

    async getHashtags() {
        let topHashtagBlock
        let followedHashtagsBlock
        const amount = 10
        const topHashtags = (await
            contract.methods.getTopHashtags(amount).call()).map(element =>
                web3js.utils.toUtf8(element))
        const followedHashtags = (await
            this.state.contract.methods.getFollowedHashtags().call()).map(element => web3js.utils.toUtf8(element))
        if (topHashtags.length == 0) {
            topHashtagBlock = 'There are no hashtags yet, come back later!'
        } else {
            topHashtagBlock = topHashtags.map((hashtag, index) => (
                <div key={index}>
                    <Hashtag
                        hashtag={hashtag}
                        contract={this.state.contract}
                        subscribe={hashtag => this.subscribe(hashtag)}
                        unsubscribe={hashtag =>
                            this.unsubscribe(hashtag)}
                    />
                </div>
            ))
        }
        if (followedHashtags.length == 0) {
            followedHashtagsBlock = "You're not following any hashtags yet"
        } else {
            followedHashtagsBlock = followedHashtags.map((hashtag,
                index) => (
                <div key={index}>
                    <Hashtag
                        hashtag={hashtag}
                        contract={this.state.contract}
                        subscribe={hashtag => this.subscribe(hashtag)}
                        unsubscribe={hashtag =>
                            this.unsubscribe(hashtag)}
                    />
                </div>
            ))
        }
        this.setState({
            topHashtagBlock, followedHashtagsBlock,
            followedHashtags
        })
    }


    async getContent() {
        const latestContentId = await
            this.state.contract.methods.latestContentId().call()

        const nbPosts = 10
        const nbPostPerHashtag = 2
        let contents = []
        let counter = nbPosts
        // If we have subscriptions, get content for those subscriptions 3 pieces per hashtag
        if (this.state.followedHashtags.length > 0) {

            for (let i = 0; i < this.state.followedHashtags.length; i++) {
                // Get 3 contents per hashtag
                let contentIds = await
                    this.state.contract.methods.getContentIdsByHashtag(this.bytes32(this.state.followedHashtags[i]), nbPostPerHashtag).call()
 
                let counterTwo = nbPostPerHashtag
                if (contentIds.length < nbPostPerHashtag)
                    counterTwo = contentIds.length
                for (let a = counterTwo - 1; a >= 0; a--) {
                    let content = await
                        this.state.contract.methods.getContentById(contentIds[a]).call()
                    content = {
                        id: content[0],
                        author: content[1],
                        time: new Date(parseInt(content[2] +
                            '000')).toLocaleDateString(),
                        message: content[3],
                        ipfsurl: content[4],
                        votes: content[5],
                        voted: content[6],
                        hashtags: content[7]
                    }


                    content.message =
                        web3js.utils.toUtf8(content.message)
                    content.hashtags = content.hashtags.map(hashtag =>
                        web3js.utils.toUtf8(hashtag))
                    content.ipfsurl = web3js.utils.toUtf8(content.ipfsurl)
                    contents.push(content)

                }
            }
        }
        // If we don't have enough content yet, show whats in there
        if (latestContentId < nbPosts) counter = latestContentId
        for (let i = counter - 1; i >= 0; i--) {
            let content = await
                this.state.contract.methods.getContentById(i).call()
            content = {
                id: content[0],
                author: content[1],
                time: new Date(parseInt(content[2] +
                    '000')).toLocaleDateString(),
                message: content[3],
                ipfsurl: content[4],
                votes: content[5],
                voted: content[6],
                hashtags: content[7]
            }
            content.message = web3js.utils.toUtf8(content.message)
            content.hashtags = content.hashtags.map(hashtag =>
                web3js.utils.toUtf8(hashtag))
            content.ipfsurl = web3js.utils.toUtf8(content.ipfsurl)
            contents.push(content)
        }
        let contentsBlock = await Promise.all(contents.map(async (element, index) => (
            <div key={index} className="content">
                <div className="content-address">{element.author}</div>
                <div className="contentmessage">{
                    element.message}</div>
                <div className="contenthashtags">{
                    element.hashtags.map((hashtag, i) => (
                        <span key={i}>
                            <Hashtag
                                hashtag={hashtag}
                                contract={this.state.contract}
                                subscribe={hashtag =>
                                    this.subscribe(hashtag)}
                                unsubscribe={hashtag =>
                                    this.unsubscribe(hashtag)}
                            />
                        </span>
                    ))}
                </div>
                <div className="content-time">{element.time}</div>
                <img className="post-image" src={`https://ipfs.io/ipfs/${element.ipfsurl}`} />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />} name="checkedH" />}
                    label={`${element.votes} votes`}
                    onChange={e => this.onContentVote(e, element.id)}
                />

            </div>







        )))
        this.setState({ contentsBlock })
    }


    render() {



        return (
            <div className="main-container">
                <div className="hashtag-block">
                    <h3>Top hashtags</h3>
                    <div className="hashtagcontainer">{
                        this.state.topHashtagBlock}</div>
                    <h3>Followed hashtags</h3>
                    <div className="hashtagcontainer">{
                        this.state.followedHashtagsBlock}</div>
                </div>
                <div className="content-block">
                    <div className="input-container">
                        <input className="buttonipfs" type='file' onChange={this.onImageChange} accept="image/*" />

                        <div className="imageipfs">
                            <img class="post-image" src={this.state.loadedimage ? `data:image/jpeg;base64,${this.state.loadedimage}` : `https://ipfs.io/ipfs/QmXn15kxjGgFofJ1LpjoU7y9osCCBWQPb141qycseX3k9F`} />
                        </div>



                        <textarea ref={this.content} placeholder="add description ..."></textarea>

                        <input ref={this.hashtags} type="text" placeholder="Hashtags separated by commas..." />

                        <button type="button" onClick={() => {
                            this.publishContent(this.content.current.value,
                                this.hashtags.current.value)
                        }} >Publish</button>
                    </div>
                    <div className="content-container">
                        {this.state.contentsBlock}
                    </div>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<Main />, document.querySelector('#root'))
