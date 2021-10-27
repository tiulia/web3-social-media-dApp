const ABI = {
    "contractName": "IpfsPublisher",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "author",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "date",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "ipfsurl",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "bytes32[]",
            "name": "hashtags",
            "type": "bytes32[]"
          }
        ],
        "name": "ContentAdded",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "contentById",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "author",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "date",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "ipfsurl",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "votes",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "contentIdsByHashtag",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "h1",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "h2",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "h3",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "hashtagExist",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "hashtagScore",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "hashtags",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "latestContentId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "subscribedHashtags",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "userExist",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "userVoted",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "users",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "sortHashtags",
        "outputs": [
          {
            "internalType": "bytes32[]",
            "name": "",
            "type": "bytes32[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_hashtag",
            "type": "bytes32"
          }
        ],
        "name": "hasSubscription",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_content",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_ipfsurl",
            "type": "string"
          },
          {
            "internalType": "bytes32[]",
            "name": "_hashtags",
            "type": "bytes32[]"
          }
        ],
        "name": "addContent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_hashtag",
            "type": "bytes32"
          }
        ],
        "name": "subscribeToHashtag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_hashtag",
            "type": "bytes32"
          }
        ],
        "name": "unsubscribeToHashtag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "voteContent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "getTopHashtags",
        "outputs": [
          {
            "internalType": "bytes32[]",
            "name": "",
            "type": "bytes32[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "getFollowedHashtags",
        "outputs": [
          {
            "internalType": "bytes32[]",
            "name": "",
            "type": "bytes32[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_hashtag",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "getContentIdsByHashtag",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "getContentById",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "bytes32[]",
            "name": "",
            "type": "bytes32[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"author\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"date\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"ipfsurl\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes32[]\",\"name\":\"hashtags\",\"type\":\"bytes32[]\"}],\"name\":\"ContentAdded\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_content\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_ipfsurl\",\"type\":\"string\"},{\"internalType\":\"bytes32[]\",\"name\":\"_hashtags\",\"type\":\"bytes32[]\"}],\"name\":\"addContent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"contentById\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"author\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"date\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"ipfsurl\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"votes\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"contentIdsByHashtag\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getContentById\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_hashtag\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"getContentIdsByHashtag\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getFollowedHashtags\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"getTopHashtags\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"h1\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"h2\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"h3\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_hashtag\",\"type\":\"bytes32\"}],\"name\":\"hasSubscription\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"hashtagExist\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"hashtagScore\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"hashtags\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestContentId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"sortHashtags\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_hashtag\",\"type\":\"bytes32\"}],\"name\":\"subscribeToHashtag\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"subscribedHashtags\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_hashtag\",\"type\":\"bytes32\"}],\"name\":\"unsubscribeToHashtag\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userExist\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"userVoted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"users\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"voteContent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"All function calls are currently implemented without side effects\",\"kind\":\"dev\",\"methods\":{\"addContent(string,string,bytes32[])\":{\"params\":{\"_content\":\"the string of content\",\"_hashtags\":\"the hashtags associated to the content\",\"_ipfsurl\":\"the url of the ipfs content\"}},\"getContentById(uint256)\":{\"params\":{\"_id\":\"The id of the content\"},\"returns\":{\"_0\":\"Returns the id, author, date, content, ipfsurl and hashtags for that piece of content\"}},\"getContentIdsByHashtag(bytes32,uint256)\":{\"params\":{\"_amount\":\"number of posts to be returned\",\"_hashtag\":\"hashtag from which get content\"},\"returns\":{\"_0\":\"uint256[] the ids of the contents, new request needed for texts and ipfsurls of the posts\"}},\"getFollowedHashtags()\":{\"returns\":{\"_0\":\"bytes32[] The hashtags followed by this user\"}},\"getTopHashtags(uint256)\":{\"params\":{\"_amount\":\"How many top hashtags to get in order, for instance the top 20 hashtags\"},\"returns\":{\"_0\":\"bytes32[] Returns the names of the hashtags\"}},\"hasSubscription(bytes32)\":{\"params\":{\"_hashtag\":\"to check for subscription\"},\"returns\":{\"_0\":\"bool true if the user is subscribed to hashtag\"}},\"sortHashtags()\":{\"details\":\"selection sort is implemented,  call this function whenever the hastaglist is change  or when the scores are modified \"},\"subscribeToHashtag(bytes32)\":{\"params\":{\"_hashtag\":\"hashtag name\"}},\"unsubscribeToHashtag(bytes32)\":{\"params\":{\"_hashtag\":\"hashtag name\"}},\"voteContent(uint256)\":{\"params\":{\"_id\":\"contentId\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"getContentById(uint256)\":{\"notice\":\"returns the data for a particular content id\"},\"getContentIdsByHashtag(bytes32,uint256)\":{\"notice\":\"get the contents ids for a particular hashtag.  we can't return arrays of structs.\"},\"getFollowedHashtags()\":{\"notice\":\"get the followed hashtag names for this msg.sender\"},\"getTopHashtags(uint256)\":{\"notice\":\"get the top hashtags\"},\"h1()\":{\"notice\":\"added for parm examples\"},\"hasSubscription(bytes32)\":{\"notice\":\"check if the user is subscribed to a hashtag\"},\"subscribeToHashtag(bytes32)\":{\"notice\":\"subscribe to a hashtag if the suscription  doesn't exists\"},\"unsubscribeToHashtag(bytes32)\":{\"notice\":\"unsubscribe to a hashtag if the suscription  does exists\"},\"voteContent(uint256)\":{\"notice\":\"vote content, each user is allowed to vote only once for each content\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/IpfsPublisher.sol\":\"IpfsPublisher\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/IpfsPublisher.sol\":{\"keccak256\":\"0x1bde7c244f0334c683381ddbbad69446579e1f33914f739798e0215c40152228\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://0c6de7054a730ad5fc67b22f140a4a5b485dcdebeec85a76815dce33af29a4dc\",\"dweb:/ipfs/Qmcdsrprdas27Poi7WKrSR9weXM17fqhDxSfp8s6taNGCn\"]}},\"version\":1}",
    "bytecode": "0x60806040527f68310000000000000000000000000000000000000000000000000000000000006000557f68320000000000000000000000000000000000000000000000000000000000006001557f683300000000000000000000000000000000000000000000000000000000000060025534801561007c57600080fd5b506122568061008c6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063725ac19a116100c3578063b9ccf2191161007c578063b9ccf21914610877578063c389ef5e14610895578063c9a9aed5146108f4578063e2a53d4214610912578063f4fe51a814610971578063f90e46ab146109bd5761014d565b8063725ac19a146105ad578063748ddeb0146106f2578063938430d514610720578063ab2b0141146107ad578063ab7e7cf6146107db578063b3c11db6146108355761014d565b80633c9a1a6e116101155780633c9a1a6e1461041c57806340d65a861461049f57806341428f9d14610501578063426cfd681461052f5780635092f2ec1461054d57806370f01a281461056b5761014d565b806312b468b21461015257806320bf0924146102d8578063365b98b21461031c57806336878efc146103745780633c43e6ec146103d8575b600080fd5b61017e6004803603602081101561016857600080fd5b8101908080359060200190929190505050610ba3565b604051808781526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156101ee5780820151818401526020810190506101d3565b50505050905090810190601f16801561021b5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015610254578082015181840152602081019050610239565b50505050905090810190601f1680156102815780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019060200280838360005b838110156102bd5780820151818401526020810190506102a2565b50505050905001995050505050505050505060405180910390f35b610304600480360360208110156102ee57600080fd5b8101908080359060200190929190505050610e19565b60405180821515815260200191505060405180910390f35b6103486004803603602081101561033257600080fd5b8101908080359060200190929190505050610e39565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103c06004803603604081101561038a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e75565b60405180821515815260200191505060405180910390f35b610404600480360360208110156103ee57600080fd5b8101908080359060200190929190505050610ea4565b60405180821515815260200191505060405180910390f35b6104486004803603602081101561043257600080fd5b8101908080359060200190929190505050610f74565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561048b578082015181840152602081019050610470565b505050509050019250505060405180910390f35b6104eb600480360360408110156104b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611033565b6040518082815260200191505060405180910390f35b61052d6004803603602081101561051757600080fd5b8101908080359060200190929190505050611061565b005b610537611119565b6040518082815260200191505060405180910390f35b61055561111f565b6040518082815260200191505060405180910390f35b6105976004803603602081101561058157600080fd5b8101908080359060200190929190505050611125565b6040518082815260200191505060405180910390f35b6105d9600480360360208110156105c357600080fd5b8101908080359060200190929190505050611146565b604051808781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561064b578082015181840152602081019050610630565b50505050905090810190601f1680156106785780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156106b1578082015181840152602081019050610696565b50505050905090810190601f1680156106de5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b61071e6004803603602081101561070857600080fd5b81019080803590602001909291905050506112d2565b005b6107566004803603604081101561073657600080fd5b81019080803590602001909291908035906020019092919050505061143a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561079957808201518184015260208101905061077e565b505050509050019250505060405180910390f35b6107d9600480360360208110156107c357600080fd5b810190808035906020019092919050505061152d565b005b61081d600480360360208110156107f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611673565b60405180821515815260200191505060405180910390f35b6108616004803603602081101561084b57600080fd5b8101908080359060200190929190505050611693565b6040518082815260200191505060405180910390f35b61087f6116ab565b6040518082815260200191505060405180910390f35b61089d6116b1565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156108e05780820151818401526020810190506108c5565b505050509050019250505060405180910390f35b6108fc611746565b6040518082815260200191505060405180910390f35b61091a61174c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561095d578082015181840152602081019050610942565b505050509050019250505060405180910390f35b6109a76004803603604081101561098757600080fd5b810190808035906020019092919080359060200190929190505050611942565b6040518082815260200191505060405180910390f35b610ba1600480360360608110156109d357600080fd5b81019080803590602001906401000000008111156109f057600080fd5b820183602082011115610a0257600080fd5b80359060200191846001830284011164010000000083111715610a2457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610a8757600080fd5b820183602082011115610a9957600080fd5b80359060200191846001830284011164010000000083111715610abb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b1e57600080fd5b820183602082011115610b3057600080fd5b80359060200191846020830284011164010000000083111715610b5257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050611970565b005b60008060006060806060610bb561209c565b600660008981526020019081526020016000206040518060e0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cd65780601f10610cab57610100808354040283529160200191610cd6565b820191906000526020600020905b815481529060010190602001808311610cb957829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d785780601f10610d4d57610100808354040283529160200191610d78565b820191906000526020600020905b815481529060010190602001808311610d5b57829003601f168201915b505050505081526020016005820154815260200160068201805480602002602001604051908101604052809291908181526020018280548015610dda57602002820191906000526020600020905b815481526020019060010190808311610dc6575b5050505050815250509050806000015181602001518260400151836060015184608001518560c001519650965096509650965096505091939550919395565b60076020528060005260406000206000915054906101000a900460ff1681565b600a8181548110610e4657fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600080600090505b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610f695782600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610f4157fe5b90600052602060002001541415610f5c576001915050610f6f565b8080600101915050610eac565b50600090505b919050565b606080600083600b805490501015610f9357600b805490509050610f97565b8390505b8067ffffffffffffffff81118015610fae57600080fd5b50604051908082528060200260200182016040528015610fdd5781602001602082028036833780820191505090505b50915060005b8181101561102857600b8181548110610ff857fe5b906000526020600020015483828151811061100f57fe5b6020026020010181815250508080600101915050610fe3565b508192505050919050565b6003602052816000526040600020818154811061104c57fe5b90600052602060002001600091509150505481565b61106a81610ea4565b61111657600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020016000909190919091505560046000828152602001908152602001600020600081548092919060010191905055506110ff61174c565b600b90805190602001906111149291906120ef565b505b50565b60005481565b60015481565b600b818154811061113257fe5b906000526020600020016000915090505481565b60066020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112245780601f106111f957610100808354040283529160200191611224565b820191906000526020600020905b81548152906001019060200180831161120757829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112c25780601f10611297576101008083540402835291602001916112c2565b820191906000526020600020905b8154815290600101906020018083116112a557829003601f168201915b5050505050908060050154905086565b6112db81610ea4565b156114375760005b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156114355781600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061137857fe5b9060005260206000200154141561142857600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081815481106113d357fe5b906000526020600020016000905560046000838152602001908152602001600020600081548092919060019003919050555061140d61174c565b600b90805190602001906114229291906120ef565b50611435565b80806001019150506112e3565b505b50565b6060806000836005600087815260200190815260200160002080549050101561147b576005600086815260200190815260200160002080549050905061147f565b8390505b8067ffffffffffffffff8111801561149657600080fd5b506040519080825280602002602001820160405280156114c55781602001602082028036833780820191505090505b50915060005b81811015611521576005600087815260200190815260200160002081815481106114f157fe5b906000526020600020015483828151811061150857fe5b60200260200101818152505080806001019150506114cb565b50819250505092915050565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060009054906101000a900460ff16156115e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806121f7602a913960400191505060405180910390fd5b6001600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff021916908315150217905550600660008281526020019081526020016000206005016000815480929190600101919050555050565b60086020528060005260406000206000915054906101000a900460ff1681565b60046020528060005260406000206000915090505481565b60025481565b6060600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561173c57602002820191906000526020600020905b815481526020019060010190808311611728575b5050505050905090565b600c5481565b606080600b80548060200260200160405190810160405280929190818152602001828054801561179b57602002820191906000526020600020905b815481526020019060010190808311611787575b505050505090506060600b8054905067ffffffffffffffff811180156117c057600080fd5b506040519080825280602002602001820160405280156117ef5781602001602082028036833780820191505090505b5090506000805b835181101561193857600084828151811061180d57fe5b60200260200101519050600082905060006001840190505b8651811015611896576004600088838151811061183e57fe5b6020026020010151815260200190815260200160002054600460008581526020019081526020016000205410156118895786818151811061187b57fe5b602002602001015192508091505b8080600101915050611825565b5060008684815181106118a557fe5b602002602001015190508682815181106118bb57fe5b60200260200101518785815181106118cf57fe5b602002602001018181525050808783815181106118e857fe5b60200260200101818152505086848151811061190057fe5b602002602001015186868151811061191457fe5b602002602001018181525050848060010195505050505080806001019150506117f6565b5081935050505090565b6005602052816000526040600020818154811061195b57fe5b90600052602060002001600091509150505481565b60008351116119e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f54686520636f6e74656e742063616e6e6f7420626520656d707479000000000081525060200191505060405180910390fd5b6119ef61209c565b6040518060e00160405280600c5481526020013373ffffffffffffffffffffffffffffffffffffffff16815260200142815260200185815260200184815260200160008152602001838152509050600082511415611bc357600560007f6d697363656c6c616e656f7573000000000000000000000000000000000000008152602001908152602001600020600c549080600181540180825580915050600190039060005260206000200160009091909190915055600460007f6d697363656c6c616e656f757300000000000000000000000000000000000000815260200190815260200160002060008154809291906001019190505550600760007f6d697363656c6c616e656f757300000000000000000000000000000000000000815260200190815260200160002060009054906101000a900460ff16611bbe57600b80600181540180825580915050600190039060005260206000200160007f6d697363656c6c616e656f7573000000000000000000000000000000000000009091909150556001600760007f6d697363656c6c616e656f757300000000000000000000000000000000000000815260200190815260200160002060006101000a81548160ff0219169083151502179055505b611d17565b60005b8251811015611d155760056000848381518110611bdf57fe5b60200260200101518152602001908152602001600020600c54908060018154018082558091505060019003906000526020600020016000909190919091505560046000848381518110611c2e57fe5b602002602001015181526020019081526020016000206000815480929190600101919050555060076000848381518110611c6457fe5b6020026020010151815260200190815260200160002060009054906101000a900460ff16611d0857600b838281518110611c9a57fe5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190915055600160076000858481518110611cda57fe5b6020026020010151815260200190815260200160002060006101000a81548160ff0219169083151502179055505b8080600101915050611bc6565b505b611d1f61174c565b600b9080519060200190611d349291906120ef565b508060066000600c5481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019080519060200190611dc292919061213c565b506080820151816004019080519060200190611ddf92919061213c565b5060a0820151816005015560c0820151816006019080519060200190611e069291906120ef565b50905050600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611f1757600a339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b423373ffffffffffffffffffffffffffffffffffffffff16600c547f9859a69d13bed466f8d69542807df8c2ba528bdbb3bfb732b4d03c8e49d97d3e87878760405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015611f9e578082015181840152602081019050611f83565b50505050905090810190601f168015611fcb5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015612004578082015181840152602081019050611fe9565b50505050905090810190601f1680156120315780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019060200280838360005b8381101561206d578082015181840152602081019050612052565b50505050905001965050505050505060405180910390a4600c6000815480929190600101919050555050505050565b6040518060e0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001606081526020016060815260200160008152602001606081525090565b82805482825590600052602060002090810192821561212b579160200282015b8281111561212a57825182559160200191906001019061210f565b5b50905061213891906121bc565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061217d57805160ff19168380011785556121ab565b828001600101855582156121ab579182015b828111156121aa57825182559160200191906001019061218f565b5b5090506121b891906121d9565b5090565b5b808211156121d55760008160009055506001016121bd565b5090565b5b808211156121f25760008160009055506001016121da565b509056fe4f6e6c79206f6e6520766f746520697320616c6c6f77656420666f72206561636820636f6e74656e7421a264697066735822122026f4c1ecdab4ce88b0eb6958b227ae253f113d45c2e59ce769017279d67faa5164736f6c63430007000033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061014d5760003560e01c8063725ac19a116100c3578063b9ccf2191161007c578063b9ccf21914610877578063c389ef5e14610895578063c9a9aed5146108f4578063e2a53d4214610912578063f4fe51a814610971578063f90e46ab146109bd5761014d565b8063725ac19a146105ad578063748ddeb0146106f2578063938430d514610720578063ab2b0141146107ad578063ab7e7cf6146107db578063b3c11db6146108355761014d565b80633c9a1a6e116101155780633c9a1a6e1461041c57806340d65a861461049f57806341428f9d14610501578063426cfd681461052f5780635092f2ec1461054d57806370f01a281461056b5761014d565b806312b468b21461015257806320bf0924146102d8578063365b98b21461031c57806336878efc146103745780633c43e6ec146103d8575b600080fd5b61017e6004803603602081101561016857600080fd5b8101908080359060200190929190505050610ba3565b604051808781526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156101ee5780820151818401526020810190506101d3565b50505050905090810190601f16801561021b5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015610254578082015181840152602081019050610239565b50505050905090810190601f1680156102815780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019060200280838360005b838110156102bd5780820151818401526020810190506102a2565b50505050905001995050505050505050505060405180910390f35b610304600480360360208110156102ee57600080fd5b8101908080359060200190929190505050610e19565b60405180821515815260200191505060405180910390f35b6103486004803603602081101561033257600080fd5b8101908080359060200190929190505050610e39565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103c06004803603604081101561038a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e75565b60405180821515815260200191505060405180910390f35b610404600480360360208110156103ee57600080fd5b8101908080359060200190929190505050610ea4565b60405180821515815260200191505060405180910390f35b6104486004803603602081101561043257600080fd5b8101908080359060200190929190505050610f74565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561048b578082015181840152602081019050610470565b505050509050019250505060405180910390f35b6104eb600480360360408110156104b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611033565b6040518082815260200191505060405180910390f35b61052d6004803603602081101561051757600080fd5b8101908080359060200190929190505050611061565b005b610537611119565b6040518082815260200191505060405180910390f35b61055561111f565b6040518082815260200191505060405180910390f35b6105976004803603602081101561058157600080fd5b8101908080359060200190929190505050611125565b6040518082815260200191505060405180910390f35b6105d9600480360360208110156105c357600080fd5b8101908080359060200190929190505050611146565b604051808781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561064b578082015181840152602081019050610630565b50505050905090810190601f1680156106785780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156106b1578082015181840152602081019050610696565b50505050905090810190601f1680156106de5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b61071e6004803603602081101561070857600080fd5b81019080803590602001909291905050506112d2565b005b6107566004803603604081101561073657600080fd5b81019080803590602001909291908035906020019092919050505061143a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561079957808201518184015260208101905061077e565b505050509050019250505060405180910390f35b6107d9600480360360208110156107c357600080fd5b810190808035906020019092919050505061152d565b005b61081d600480360360208110156107f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611673565b60405180821515815260200191505060405180910390f35b6108616004803603602081101561084b57600080fd5b8101908080359060200190929190505050611693565b6040518082815260200191505060405180910390f35b61087f6116ab565b6040518082815260200191505060405180910390f35b61089d6116b1565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156108e05780820151818401526020810190506108c5565b505050509050019250505060405180910390f35b6108fc611746565b6040518082815260200191505060405180910390f35b61091a61174c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561095d578082015181840152602081019050610942565b505050509050019250505060405180910390f35b6109a76004803603604081101561098757600080fd5b810190808035906020019092919080359060200190929190505050611942565b6040518082815260200191505060405180910390f35b610ba1600480360360608110156109d357600080fd5b81019080803590602001906401000000008111156109f057600080fd5b820183602082011115610a0257600080fd5b80359060200191846001830284011164010000000083111715610a2457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610a8757600080fd5b820183602082011115610a9957600080fd5b80359060200191846001830284011164010000000083111715610abb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b1e57600080fd5b820183602082011115610b3057600080fd5b80359060200191846020830284011164010000000083111715610b5257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050611970565b005b60008060006060806060610bb561209c565b600660008981526020019081526020016000206040518060e0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cd65780601f10610cab57610100808354040283529160200191610cd6565b820191906000526020600020905b815481529060010190602001808311610cb957829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d785780601f10610d4d57610100808354040283529160200191610d78565b820191906000526020600020905b815481529060010190602001808311610d5b57829003601f168201915b505050505081526020016005820154815260200160068201805480602002602001604051908101604052809291908181526020018280548015610dda57602002820191906000526020600020905b815481526020019060010190808311610dc6575b5050505050815250509050806000015181602001518260400151836060015184608001518560c001519650965096509650965096505091939550919395565b60076020528060005260406000206000915054906101000a900460ff1681565b600a8181548110610e4657fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600080600090505b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610f695782600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610f4157fe5b90600052602060002001541415610f5c576001915050610f6f565b8080600101915050610eac565b50600090505b919050565b606080600083600b805490501015610f9357600b805490509050610f97565b8390505b8067ffffffffffffffff81118015610fae57600080fd5b50604051908082528060200260200182016040528015610fdd5781602001602082028036833780820191505090505b50915060005b8181101561102857600b8181548110610ff857fe5b906000526020600020015483828151811061100f57fe5b6020026020010181815250508080600101915050610fe3565b508192505050919050565b6003602052816000526040600020818154811061104c57fe5b90600052602060002001600091509150505481565b61106a81610ea4565b61111657600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020016000909190919091505560046000828152602001908152602001600020600081548092919060010191905055506110ff61174c565b600b90805190602001906111149291906120ef565b505b50565b60005481565b60015481565b600b818154811061113257fe5b906000526020600020016000915090505481565b60066020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002015490806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112245780601f106111f957610100808354040283529160200191611224565b820191906000526020600020905b81548152906001019060200180831161120757829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112c25780601f10611297576101008083540402835291602001916112c2565b820191906000526020600020905b8154815290600101906020018083116112a557829003601f168201915b5050505050908060050154905086565b6112db81610ea4565b156114375760005b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156114355781600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061137857fe5b9060005260206000200154141561142857600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081815481106113d357fe5b906000526020600020016000905560046000838152602001908152602001600020600081548092919060019003919050555061140d61174c565b600b90805190602001906114229291906120ef565b50611435565b80806001019150506112e3565b505b50565b6060806000836005600087815260200190815260200160002080549050101561147b576005600086815260200190815260200160002080549050905061147f565b8390505b8067ffffffffffffffff8111801561149657600080fd5b506040519080825280602002602001820160405280156114c55781602001602082028036833780820191505090505b50915060005b81811015611521576005600087815260200190815260200160002081815481106114f157fe5b906000526020600020015483828151811061150857fe5b60200260200101818152505080806001019150506114cb565b50819250505092915050565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060009054906101000a900460ff16156115e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806121f7602a913960400191505060405180910390fd5b6001600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff021916908315150217905550600660008281526020019081526020016000206005016000815480929190600101919050555050565b60086020528060005260406000206000915054906101000a900460ff1681565b60046020528060005260406000206000915090505481565b60025481565b6060600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561173c57602002820191906000526020600020905b815481526020019060010190808311611728575b5050505050905090565b600c5481565b606080600b80548060200260200160405190810160405280929190818152602001828054801561179b57602002820191906000526020600020905b815481526020019060010190808311611787575b505050505090506060600b8054905067ffffffffffffffff811180156117c057600080fd5b506040519080825280602002602001820160405280156117ef5781602001602082028036833780820191505090505b5090506000805b835181101561193857600084828151811061180d57fe5b60200260200101519050600082905060006001840190505b8651811015611896576004600088838151811061183e57fe5b6020026020010151815260200190815260200160002054600460008581526020019081526020016000205410156118895786818151811061187b57fe5b602002602001015192508091505b8080600101915050611825565b5060008684815181106118a557fe5b602002602001015190508682815181106118bb57fe5b60200260200101518785815181106118cf57fe5b602002602001018181525050808783815181106118e857fe5b60200260200101818152505086848151811061190057fe5b602002602001015186868151811061191457fe5b602002602001018181525050848060010195505050505080806001019150506117f6565b5081935050505090565b6005602052816000526040600020818154811061195b57fe5b90600052602060002001600091509150505481565b60008351116119e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f54686520636f6e74656e742063616e6e6f7420626520656d707479000000000081525060200191505060405180910390fd5b6119ef61209c565b6040518060e00160405280600c5481526020013373ffffffffffffffffffffffffffffffffffffffff16815260200142815260200185815260200184815260200160008152602001838152509050600082511415611bc357600560007f6d697363656c6c616e656f7573000000000000000000000000000000000000008152602001908152602001600020600c549080600181540180825580915050600190039060005260206000200160009091909190915055600460007f6d697363656c6c616e656f757300000000000000000000000000000000000000815260200190815260200160002060008154809291906001019190505550600760007f6d697363656c6c616e656f757300000000000000000000000000000000000000815260200190815260200160002060009054906101000a900460ff16611bbe57600b80600181540180825580915050600190039060005260206000200160007f6d697363656c6c616e656f7573000000000000000000000000000000000000009091909150556001600760007f6d697363656c6c616e656f757300000000000000000000000000000000000000815260200190815260200160002060006101000a81548160ff0219169083151502179055505b611d17565b60005b8251811015611d155760056000848381518110611bdf57fe5b60200260200101518152602001908152602001600020600c54908060018154018082558091505060019003906000526020600020016000909190919091505560046000848381518110611c2e57fe5b602002602001015181526020019081526020016000206000815480929190600101919050555060076000848381518110611c6457fe5b6020026020010151815260200190815260200160002060009054906101000a900460ff16611d0857600b838281518110611c9a57fe5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190915055600160076000858481518110611cda57fe5b6020026020010151815260200190815260200160002060006101000a81548160ff0219169083151502179055505b8080600101915050611bc6565b505b611d1f61174c565b600b9080519060200190611d349291906120ef565b508060066000600c5481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019080519060200190611dc292919061213c565b506080820151816004019080519060200190611ddf92919061213c565b5060a0820151816005015560c0820151816006019080519060200190611e069291906120ef565b50905050600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611f1757600a339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b423373ffffffffffffffffffffffffffffffffffffffff16600c547f9859a69d13bed466f8d69542807df8c2ba528bdbb3bfb732b4d03c8e49d97d3e87878760405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015611f9e578082015181840152602081019050611f83565b50505050905090810190601f168015611fcb5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015612004578082015181840152602081019050611fe9565b50505050905090810190601f1680156120315780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019060200280838360005b8381101561206d578082015181840152602081019050612052565b50505050905001965050505050505060405180910390a4600c6000815480929190600101919050555050505050565b6040518060e0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001606081526020016060815260200160008152602001606081525090565b82805482825590600052602060002090810192821561212b579160200282015b8281111561212a57825182559160200191906001019061210f565b5b50905061213891906121bc565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061217d57805160ff19168380011785556121ab565b828001600101855582156121ab579182015b828111156121aa57825182559160200191906001019061218f565b5b5090506121b891906121d9565b5090565b5b808211156121d55760008160009055506001016121bd565b5090565b5b808211156121f25760008160009055506001016121da565b509056fe4f6e6c79206f6e6520766f746520697320616c6c6f77656420666f72206561636820636f6e74656e7421a264697066735822122026f4c1ecdab4ce88b0eb6958b227ae253f113d45c2e59ce769017279d67faa5164736f6c63430007000033",
    "immutableReferences": {},
    "sourceMap": "441:8573:0:-:0;;;710:24;;;741;;;772;;;441:8573;;;;;;;;;;;;;;;;",
    "deployedSourceMap": "441:8573:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8731:262;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1206:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1375:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1305:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2922:295;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;6747:482;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;973:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5252:253;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;710:24;;;:::i;:::-;;;;;;;;;;;;;;;;;;;741;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1404:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1153:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5641:499;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;7863:649;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6281:251;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1257:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1035:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;772:24;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7385:125;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1436:30;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1830:896;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1090:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3560:1561;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8731:262;8788:7;8797;8806;8815:13;8830;8845:16;8874;;:::i;:::-;8893:11;:16;8905:3;8893:16;;;;;;;;;;;8874:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8928:1;:4;;;8934:1;:8;;;8944:1;:6;;;8952:1;:9;;;8963:1;:9;;;8974:1;:10;;;8920:65;;;;;;;;;;;;;8731:262;;;;;;;:::o;1206:44::-;;;;;;;;;;;;;;;;;;;;;;:::o;1375:22::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1305:63::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2922:295::-;2998:4;3019:9;3031:1;3019:13;;3015:172;3038:18;:30;3057:10;3038:30;;;;;;;;;;;;;;;:37;;;;3034:1;:41;3015:172;;;3136:8;3099:18;:30;3118:10;3099:30;;;;;;;;;;;;;;;3130:1;3099:33;;;;;;;;;;;;;;;;:45;3096:79;;;3171:4;3164:11;;;;;3096:79;3076:3;;;;;;;3015:172;;;;3204:5;3197:12;;2922:295;;;;:::o;6747:482::-;6808:16;6837:23;6881:14;6938:7;6920:8;:15;;;;:25;6916:114;;;6970:8;:15;;;;6961:24;;6916:114;;;7023:7;7014:16;;6916:114;7084:6;7070:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7061:30;;7106:9;7102:86;7125:6;7121:1;:10;7102:86;;;7165:8;7174:1;7165:11;;;;;;;;;;;;;;;;7153:6;7160:1;7153:9;;;;;;;;;;;;;:23;;;;;7133:3;;;;;;;7102:86;;;;7215:6;7208:13;;;;6747:482;;;:::o;973:55::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5252:253::-;5320:25;5336:8;5320:15;:25::i;:::-;5316:182;;5362:18;:30;5381:10;5362:30;;;;;;;;;;;;;;;5398:8;5362:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5422:12;:22;5435:8;5422:22;;;;;;;;;;;;:24;;;;;;;;;;;;;5472:14;:12;:14::i;:::-;5461:8;:25;;;;;;;;;;;;:::i;:::-;;5316:182;5252:253;:::o;710:24::-;;;;:::o;741:::-;;;;:::o;1404:25::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1153:46::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5641:499::-;5710:25;5726:8;5710:15;:25::i;:::-;5707:426;;;5756:9;5752:370;5775:18;:30;5794:10;5775:30;;;;;;;;;;;;;;;:37;;;;5771:1;:41;5752:370;;;5891:8;5854:18;:30;5873:10;5854:30;;;;;;;;;;;;;;;5885:1;5854:33;;;;;;;;;;;;;;;;:45;5851:256;;;5931:18;:30;5950:10;5931:30;;;;;;;;;;;;;;;5962:1;5931:33;;;;;;;;;;;;;;;5924:40;;;5987:12;:22;6000:8;5987:22;;;;;;;;;;;;:24;;;;;;;;;;;;;;6045:14;:12;:14::i;:::-;6034:8;:25;;;;;;;;;;;;:::i;:::-;;6082:5;;5851:256;5814:3;;;;;;;5752:370;;;;5707:426;5641:499;:::o;7863:649::-;7950:16;7979:20;8018:14;8198:7;8159:19;:29;8179:8;8159:29;;;;;;;;;;;:36;;;;:46;8155:156;;;8230:19;:29;8250:8;8230:29;;;;;;;;;;;:36;;;;8221:45;;8155:156;;;8304:7;8295:16;;8155:156;8362:6;8348:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8342:27;;8384:9;8380:104;8403:6;8399:1;:10;8380:104;;;8440:19;:29;8460:8;8440:29;;;;;;;;;;;8470:1;8440:32;;;;;;;;;;;;;;;;8431:3;8435:1;8431:6;;;;;;;;;;;;;:41;;;;;8411:3;;;;;;;8380:104;;;;8501:3;8494:10;;;;7863:649;;;;:::o;6281:251::-;6352:9;:21;6362:10;6352:21;;;;;;;;;;;;;;;:26;6374:3;6352:26;;;;;;;;;;;;;;;;;;;;;6351:27;6343:82;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6475:4;6446:9;:21;6456:10;6446:21;;;;;;;;;;;;;;;:26;6468:3;6446:26;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;6490:11;:16;6502:3;6490:16;;;;;;;;;;;:22;;;:24;;;;;;;;;;;;;6281:251;:::o;1257:41::-;;;;;;;;;;;;;;;;;;;;;;:::o;1035:47::-;;;;;;;;;;;;;;;;;:::o;772:24::-;;;;:::o;7385:125::-;7436:16;7472:18;:30;7491:10;7472:30;;;;;;;;;;;;;;;7465:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7385:125;:::o;1436:30::-;;;;:::o;1830:896::-;1874:16;1903:26;1932:8;1903:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1951:31;1999:8;:15;;;;1985:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1951:64;;2026:14;2059:9;2055:632;2078:9;:16;2074:1;:20;2055:632;;;2116:18;2137:9;2147:1;2137:12;;;;;;;;;;;;;;2116:33;;2164:13;2180:1;2164:17;;2200:6;2211:1;2209;:3;2200:12;;2196:237;2218:9;:16;2214:1;:20;2196:237;;;2290:12;:26;2303:9;2313:1;2303:12;;;;;;;;;;;;;;2290:26;;;;;;;;;;;;2263:12;:24;2276:10;2263:24;;;;;;;;;;;;:53;2260:158;;;2354:9;2364:1;2354:12;;;;;;;;;;;;;;2341:25;;2397:1;2389:9;;2260:158;2236:3;;;;;;;2196:237;;;;2447:19;2469:9;2479:1;2469:12;;;;;;;;;;;;;;2447:34;;2511:9;2521:5;2511:16;;;;;;;;;;;;;;2496:9;2506:1;2496:12;;;;;;;;;;;;;:31;;;;;2561:11;2542:9;2552:5;2542:16;;;;;;;;;;;;;:30;;;;;2640:9;2650:1;2640:12;;;;;;;;;;;;;;2615:14;2630:6;2615:22;;;;;;;;;;;;;:37;;;;;2667:8;;;;;;;2055:632;;;2096:3;;;;;;;2055:632;;;;2704:14;2697:21;;;;;1830:896;:::o;1090:56::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3560:1561::-;3722:1;3703:8;3697:22;:26;3689:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3766:25;;:::i;:::-;3794:88;;;;;;;;3802:15;;3794:88;;;;3819:10;3794:88;;;;;;3831:15;3794:88;;;;3848:8;3794:88;;;;3858:8;3794:88;;;;3868:1;3794:88;;;;3872:9;3794:88;;;3766:116;;4064:1;4044:9;:16;:21;4041:719;;;4082:19;:36;;;;;;;;;;;;;4124:15;;4082:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4155:12;:29;;;;;;;;;;;;;;:31;;;;;;;;;;;;;4207:12;:29;;;;;;;;;;;;;;;;;;;;;;;4203:155;;4257:8;:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4338:4;4306:12;:29;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;4203:155;4041:719;;;4394:9;4390:359;4413:9;:16;4409:1;:20;4390:359;;;4455:19;:33;4475:9;4485:1;4475:12;;;;;;;;;;;;;;4455:33;;;;;;;;;;;4494:15;;4455:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4529:12;:26;4542:9;4552:1;4542:12;;;;;;;;;;;;;;4529:26;;;;;;;;;;;;:28;;;;;;;;;;;;;4580:12;:26;4593:9;4603:1;4593:12;;;;;;;;;;;;;;4580:26;;;;;;;;;;;;;;;;;;;;;4576:158;;4631:8;4645:9;4655:1;4645:12;;;;;;;;;;;;;;4631:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4710:4;4681:12;:26;4694:9;4704:1;4694:12;;;;;;;;;;;;;;4681:26;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;4576:158;4431:3;;;;;;;4390:359;;;;4041:719;4783:14;:12;:14::i;:::-;4772:8;:25;;;;;;;;;;;;:::i;:::-;;4839:10;4808:11;:28;4820:15;;4808:28;;;;;;;;;;;:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;4864:9;:21;4874:10;4864:21;;;;;;;;;;;;;;;;;;;;;;;;;4860:119;;4902:5;4913:10;4902:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4963:4;4939:9;:21;4949:10;4939:21;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;4860:119;5038:15;5026:10;4996:89;;5009:15;;4996:89;5055:8;5065;5075:9;4996:89;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5096:15;;:17;;;;;;;;;;;;;3560:1561;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "// SPDX-License-Identifier: GPL-3.0\r\npragma solidity >=0.7.0 <0.9.0;\r\n\r\n\r\n\r\n/// @title IpfsPublisher\r\n/// @author Iulia Banu\r\n/** @notice You can use this contract as a basic example of social media dApp that allows \r\n * posting content with text and urls images stored on ipfs\r\n * each post may have one or more tags, each user may fallow one or more tags */\r\n/// @dev All function calls are currently implemented without side effects\r\n\r\n\r\ncontract IpfsPublisher {\r\n    struct Content {\r\n        uint256 id;\r\n        address author;\r\n        uint256 date;\r\n        string content;\r\n        string ipfsurl;\r\n        uint256 votes;\r\n        bytes32[] hashtags;\r\n    }\r\n    \r\n    ///added for parm examples\r\n    bytes32 public h1 = \"h1\";\r\n    bytes32 public h2 = \"h2\";\r\n    bytes32 public h3 = \"h3\";\r\n    \r\n    event ContentAdded(uint256 indexed id, address indexed author,\r\n        uint256 indexed date, string content, string ipfsurl, bytes32[] hashtags);\r\n    \r\n    \r\n    mapping(address => bytes32[]) public subscribedHashtags;\r\n    mapping(bytes32 => uint256) public hashtagScore; \r\n    mapping(bytes32 => uint256[]) public contentIdsByHashtag;\r\n    mapping(uint256 => Content) public contentById;\r\n    mapping(bytes32 => bool) public hashtagExist;\r\n    mapping(address => bool) public userExist;\r\n    mapping(address => mapping ( uint256 => bool)) public userVoted;\r\n    address[] public users;\r\n    bytes32[] public hashtags;\r\n    uint256 public latestContentId;\r\n    \r\n    \r\n    \r\n    /** @notice sorts the hashtags, score is given by the number of posts using the hashtag \r\n     * plus the numer of subsribers */\r\n    /// @return bytes32[] returns a sorted array of hashtags\r\n    /** @dev selection sort is implemented, \r\n     * call this function whenever the hastaglist is change  or when the scores are modified */\r\n    function sortHashtags() public view returns(bytes32[] memory) {\r\n        bytes32[] memory _hashtags = hashtags;\r\n        bytes32[] memory sortedHashtags = new bytes32[](hashtags.length);\r\n        uint256 lastId = 0;\r\n        for(uint256 i = 0; i < _hashtags.length; i++) {\r\n            bytes32 maxhashtag = _hashtags[i];\r\n            uint256 maxid = i;\r\n            for(uint j = i+1; j < _hashtags.length; j++) {\r\n                if(hashtagScore[maxhashtag] < hashtagScore[_hashtags[j]]) {\r\n                    maxhashtag = _hashtags[j];\r\n                    maxid = j;\r\n                }\r\n            }\r\n            bytes32 temphashtag = _hashtags[i];\r\n            _hashtags[i] = _hashtags[maxid];\r\n            _hashtags[maxid] = temphashtag;\r\n            \r\n            \r\n            sortedHashtags[lastId] = _hashtags[i];\r\n            lastId++;\r\n        }\r\n        return sortedHashtags;\r\n    }\r\n    \r\n    \r\n    /// @notice check if the user is subscribed to a hashtag\r\n    /// @return bool true if the user is subscribed to hashtag\r\n    /// @param  _hashtag to check for subscription\r\n    function hasSubscription(bytes32 _hashtag) public view\r\n            returns(bool) {\r\n        for(uint256 i = 0; i < subscribedHashtags[msg.sender].length;i++) {\r\n            if(subscribedHashtags[msg.sender][i] == _hashtag) \r\n                return true;\r\n        }\r\n        return false;\r\n    }\r\n    \r\n    \r\n    \r\n    /** @notice add new content to the social media dApp. If no hashtags are sent, \r\n     * the content is added to the #miscellaneous hashtag list */\r\n    /// @param _content the string of content\r\n    /// @param _ipfsurl the url of the ipfs content\r\n    /// @param _hashtags the hashtags associated to the content\r\n\r\n    function addContent(string memory _content, string memory _ipfsurl, bytes32[] memory\r\n        _hashtags) public {\r\n    \r\n        require(bytes(_content).length > 0, 'The content cannot be empty');\r\n        Content memory newContent = Content(latestContentId, msg.sender, block.timestamp, _content, _ipfsurl, 0,  _hashtags);\r\n        // If the user didn't specify any hashtags add the content to the #miscellaneous hashtag\r\n        // initially the number of votes is 0.\r\n\r\n        if(_hashtags.length == 0) {\r\n            contentIdsByHashtag['miscellaneous'].push(latestContentId);\r\n            hashtagScore['miscellaneous']++;\r\n\r\n            if(!hashtagExist['miscellaneous']) {\r\n                hashtags.push('miscellaneous');\r\n                hashtagExist['miscellaneous'] = true;\r\n            }\r\n        } else {\r\n            for(uint256 i = 0; i < _hashtags.length; i++) {\r\n                contentIdsByHashtag[_hashtags[i]].push(latestContentId);\r\n                hashtagScore[_hashtags[i]]++;\r\n                if(!hashtagExist[_hashtags[i]]) {\r\n                    hashtags.push(_hashtags[i]);\r\n                    hashtagExist[_hashtags[i]] = true;\r\n                }\r\n            }\r\n        }\r\n\r\n        hashtags = sortHashtags();\r\n        contentById[latestContentId] = newContent;\r\n        if(!userExist[msg.sender]) {\r\n            users.push(msg.sender);\r\n            userExist[msg.sender] = true;\r\n        }\r\n\r\n        emit ContentAdded(latestContentId, msg.sender, block.timestamp, _content, _ipfsurl, _hashtags);\r\n        latestContentId++;\r\n    }\r\n    \r\n    \r\n    /// @notice subscribe to a hashtag if the suscription  doesn't exists\r\n    /// @param _hashtag hashtag name\r\n    function subscribeToHashtag(bytes32 _hashtag) public {\r\n        if(!hasSubscription(_hashtag)) {\r\n            subscribedHashtags[msg.sender].push(_hashtag);\r\n            hashtagScore[_hashtag]++;\r\n            hashtags = sortHashtags();\r\n        }\r\n    }      \r\n    \r\n    \r\n    /// @notice unsubscribe to a hashtag if the suscription  does exists\r\n    /// @param _hashtag hashtag name\r\n    function unsubscribeToHashtag(bytes32 _hashtag) public {\r\n        if(hasSubscription(_hashtag)) {\r\n            for(uint256 i = 0; i < subscribedHashtags[msg.sender].length; i++)\r\n            {\r\n                if(subscribedHashtags[msg.sender][i] == _hashtag) {\r\n                    delete subscribedHashtags[msg.sender][i];\r\n                    hashtagScore[_hashtag]--;\r\n                    hashtags = sortHashtags();\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    \r\n    \r\n    /// @notice vote content, each user is allowed to vote only once for each content\r\n    /// @param _id contentId\r\n    function voteContent(uint256 _id) public {\r\n        \r\n        require(!userVoted[msg.sender][_id], 'Only one vote is allowed for each content!');\r\n        \r\n        userVoted[msg.sender][_id] = true;\r\n        contentById[_id].votes++;\r\n        \r\n    }      \r\n    \r\n\r\n    /// @notice get the top hashtags\r\n    /// @param _amount How many top hashtags to get in order, for instance the top 20 hashtags\r\n    /// @return bytes32[] Returns the names of the hashtags\r\n    function getTopHashtags(uint256 _amount) public view returns(bytes32[] memory) {\r\n        bytes32[] memory result;\r\n        \r\n        uint256 amount;\r\n        \r\n        if (hashtags.length < _amount )\r\n            amount = hashtags.length;\r\n        else\r\n            amount = _amount;\r\n        \r\n        \r\n        result = new bytes32[](amount);\r\n        for(uint256 i = 0; i < amount; i++) {\r\n            result[i] = hashtags[i];\r\n        }\r\n        \r\n        return result;\r\n    }\r\n        \r\n        \r\n    /// @notice get the followed hashtag names for this msg.sender\r\n    /// @return bytes32[] The hashtags followed by this user\r\n    function getFollowedHashtags() public view returns(bytes32[] memory) {\r\n        return subscribedHashtags[msg.sender];\r\n    }\r\n    \r\n    \r\n    \r\n    /// @notice get the contents ids for a particular hashtag. \r\n    /// we can't return arrays of structs.\r\n    /// @param _hashtag hashtag from which get content\r\n    /// @param _amount number of posts to be returned\r\n    /// @return uint256[] the ids of the contents, new request needed for texts and ipfsurls of the posts\r\n\r\n    function getContentIdsByHashtag(bytes32 _hashtag, uint256 _amount) public view returns(uint256[] memory) {\r\n        uint256[] memory ids;\r\n      \r\n        uint256 amount;\r\n        \r\n        \r\n        //the number of ids cannot exeed the number of posts associated whith the hashtag.\r\n        if (contentIdsByHashtag[_hashtag].length < _amount )\r\n            amount = contentIdsByHashtag[_hashtag].length;\r\n        else\r\n            amount = _amount;\r\n        \r\n        \r\n        ids = new uint256[](amount);\r\n        for(uint256 i = 0; i < amount; i++) {\r\n            ids[i] = contentIdsByHashtag[_hashtag][i];\r\n        }\r\n        return ids;\r\n    }\r\n    \r\n    /// @notice returns the data for a particular content id\r\n    /// @param _id The id of the content\r\n    /// @return Returns the id, author, date, content, ipfsurl and hashtags for that piece of content\r\n    function getContentById(uint256 _id) public view returns(uint256, address, uint256, string memory, string memory, bytes32[] memory) {\r\n        Content memory c = contentById[_id];\r\n        return (c.id, c.author, c.date, c.content, c.ipfsurl, c.hashtags);\r\n    }\r\n    \r\n    \r\n    \r\n}",
    "sourcePath": "C:\\Blockchain\\SocialMediaDApp\\social-media-dapp\\dapp\\contracts\\IpfsPublisher.sol",
    "ast": {
      "absolutePath": "project:/contracts/IpfsPublisher.sol",
      "exportedSymbols": {
        "IpfsPublisher": [
          726
        ]
      },
      "id": 727,
      "license": "GPL-3.0",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            ">=",
            "0.7",
            ".0",
            "<",
            "0.9",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "37:31:0"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": {
            "id": 2,
            "nodeType": "StructuredDocumentation",
            "src": "361:76:0",
            "text": "@dev All function calls are currently implemented without side effects"
          },
          "fullyImplemented": true,
          "id": 726,
          "linearizedBaseContracts": [
            726
          ],
          "name": "IpfsPublisher",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "canonicalName": "IpfsPublisher.Content",
              "id": 18,
              "members": [
                {
                  "constant": false,
                  "id": 4,
                  "mutability": "mutable",
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 18,
                  "src": "497:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "497:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6,
                  "mutability": "mutable",
                  "name": "author",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 18,
                  "src": "518:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "518:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8,
                  "mutability": "mutable",
                  "name": "date",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 18,
                  "src": "543:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "543:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10,
                  "mutability": "mutable",
                  "name": "content",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 18,
                  "src": "566:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "566:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12,
                  "mutability": "mutable",
                  "name": "ipfsurl",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 18,
                  "src": "591:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14,
                  "mutability": "mutable",
                  "name": "votes",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 18,
                  "src": "616:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17,
                  "mutability": "mutable",
                  "name": "hashtags",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 18,
                  "src": "640:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 15,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "640:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 16,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "640:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Content",
              "nodeType": "StructDefinition",
              "scope": 726,
              "src": "471:195:0",
              "visibility": "public"
            },
            {
              "constant": false,
              "documentation": {
                "id": 19,
                "nodeType": "StructuredDocumentation",
                "src": "678:26:0",
                "text": "added for parm examples"
              },
              "functionSelector": "426cfd68",
              "id": 22,
              "mutability": "mutable",
              "name": "h1",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "710:24:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              },
              "typeName": {
                "id": 20,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "710:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "6831",
                "id": 21,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "string",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "730:4:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_stringliteral_2df13e12b7aa6fa1106dfd2437b6e7698d696a1ce9fb2c2e608bbd62f902ef5d",
                  "typeString": "literal_string \"h1\""
                },
                "value": "h1"
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "5092f2ec",
              "id": 25,
              "mutability": "mutable",
              "name": "h2",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "741:24:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              },
              "typeName": {
                "id": 23,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "741:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "6832",
                "id": 24,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "string",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "761:4:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_stringliteral_939df96a935ecdd2e0ba6577ae45072dbaeef53b04851ee315577aa0308c63f2",
                  "typeString": "literal_string \"h2\""
                },
                "value": "h2"
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "b9ccf219",
              "id": 28,
              "mutability": "mutable",
              "name": "h3",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "772:24:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              },
              "typeName": {
                "id": 26,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "772:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "6833",
                "id": 27,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "string",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "792:4:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_stringliteral_5901f64953a0249f078b954da0677947de2fdb8465a68550b93512a2bb2a613a",
                  "typeString": "literal_string \"h3\""
                },
                "value": "h3"
              },
              "visibility": "public"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 43,
              "name": "ContentAdded",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 42,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 30,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 43,
                    "src": "828:18:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 29,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "828:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 32,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "author",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 43,
                    "src": "848:22:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 31,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "848:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 34,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "date",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 43,
                    "src": "881:20:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 33,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "881:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 36,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "content",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 43,
                    "src": "903:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 35,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "903:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 38,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "ipfsurl",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 43,
                    "src": "919:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 37,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "919:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 41,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "hashtags",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 43,
                    "src": "935:18:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 39,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "935:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 40,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "935:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                        "typeString": "bytes32[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "827:127:0"
              },
              "src": "809:146:0"
            },
            {
              "constant": false,
              "functionSelector": "40d65a86",
              "id": 48,
              "mutability": "mutable",
              "name": "subscribedHashtags",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "973:55:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                "typeString": "mapping(address => bytes32[])"
              },
              "typeName": {
                "id": 47,
                "keyType": {
                  "id": 44,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "981:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "973:29:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                  "typeString": "mapping(address => bytes32[])"
                },
                "valueType": {
                  "baseType": {
                    "id": 45,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "992:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 46,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "992:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "b3c11db6",
              "id": 52,
              "mutability": "mutable",
              "name": "hashtagScore",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "1035:47:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                "typeString": "mapping(bytes32 => uint256)"
              },
              "typeName": {
                "id": 51,
                "keyType": {
                  "id": 49,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1043:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "1035:27:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                  "typeString": "mapping(bytes32 => uint256)"
                },
                "valueType": {
                  "id": 50,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1054:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "f4fe51a8",
              "id": 57,
              "mutability": "mutable",
              "name": "contentIdsByHashtag",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "1090:56:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(bytes32 => uint256[])"
              },
              "typeName": {
                "id": 56,
                "keyType": {
                  "id": 53,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1098:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "1090:29:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_array$_t_uint256_$dyn_storage_$",
                  "typeString": "mapping(bytes32 => uint256[])"
                },
                "valueType": {
                  "baseType": {
                    "id": 54,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1109:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 55,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "1109:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "725ac19a",
              "id": 61,
              "mutability": "mutable",
              "name": "contentById",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "1153:46:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Content_$18_storage_$",
                "typeString": "mapping(uint256 => struct IpfsPublisher.Content)"
              },
              "typeName": {
                "id": 60,
                "keyType": {
                  "id": 58,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1161:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1153:27:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Content_$18_storage_$",
                  "typeString": "mapping(uint256 => struct IpfsPublisher.Content)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 59,
                  "name": "Content",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 18,
                  "src": "1172:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Content_$18_storage_ptr",
                    "typeString": "struct IpfsPublisher.Content"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "20bf0924",
              "id": 65,
              "mutability": "mutable",
              "name": "hashtagExist",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "1206:44:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                "typeString": "mapping(bytes32 => bool)"
              },
              "typeName": {
                "id": 64,
                "keyType": {
                  "id": 62,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1214:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "1206:24:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                  "typeString": "mapping(bytes32 => bool)"
                },
                "valueType": {
                  "id": 63,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1225:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "ab7e7cf6",
              "id": 69,
              "mutability": "mutable",
              "name": "userExist",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "1257:41:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 68,
                "keyType": {
                  "id": 66,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1265:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1257:24:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 67,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1276:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "36878efc",
              "id": 75,
              "mutability": "mutable",
              "name": "userVoted",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "1305:63:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(uint256 => bool))"
              },
              "typeName": {
                "id": 74,
                "keyType": {
                  "id": 70,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1313:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1305:46:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_bool_$_$",
                  "typeString": "mapping(address => mapping(uint256 => bool))"
                },
                "valueType": {
                  "id": 73,
                  "keyType": {
                    "id": 71,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1334:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1324:26:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                    "typeString": "mapping(uint256 => bool)"
                  },
                  "valueType": {
                    "id": 72,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1345:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "365b98b2",
              "id": 78,
              "mutability": "mutable",
              "name": "users",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "1375:22:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                "typeString": "address[]"
              },
              "typeName": {
                "baseType": {
                  "id": 76,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1375:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "id": 77,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "1375:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "70f01a28",
              "id": 81,
              "mutability": "mutable",
              "name": "hashtags",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "1404:25:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                "typeString": "bytes32[]"
              },
              "typeName": {
                "baseType": {
                  "id": 79,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1404:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "id": 80,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "1404:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "c9a9aed5",
              "id": 83,
              "mutability": "mutable",
              "name": "latestContentId",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 726,
              "src": "1436:30:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 82,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1436:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 205,
                "nodeType": "Block",
                "src": "1892:834:0",
                "statements": [
                  {
                    "assignments": [
                      94
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 94,
                        "mutability": "mutable",
                        "name": "_hashtags",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 205,
                        "src": "1903:26:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[]"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 92,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1903:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 93,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "1903:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                            "typeString": "bytes32[]"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 96,
                    "initialValue": {
                      "argumentTypes": null,
                      "id": 95,
                      "name": "hashtags",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 81,
                      "src": "1932:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1903:37:0"
                  },
                  {
                    "assignments": [
                      101
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 101,
                        "mutability": "mutable",
                        "name": "sortedHashtags",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 205,
                        "src": "1951:31:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[]"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 99,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1951:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 100,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "1951:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                            "typeString": "bytes32[]"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 108,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 105,
                            "name": "hashtags",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 81,
                            "src": "1999:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                              "typeString": "bytes32[] storage ref"
                            }
                          },
                          "id": 106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1999:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "1985:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (bytes32[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 102,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1989:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 103,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "1989:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                            "typeString": "bytes32[]"
                          }
                        }
                      },
                      "id": 107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1985:30:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[] memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1951:64:0"
                  },
                  {
                    "assignments": [
                      110
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 110,
                        "mutability": "mutable",
                        "name": "lastId",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 205,
                        "src": "2026:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 109,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2026:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 112,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2043:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2026:18:0"
                  },
                  {
                    "body": {
                      "id": 201,
                      "nodeType": "Block",
                      "src": "2101:586:0",
                      "statements": [
                        {
                          "assignments": [
                            125
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 125,
                              "mutability": "mutable",
                              "name": "maxhashtag",
                              "nodeType": "VariableDeclaration",
                              "overrides": null,
                              "scope": 201,
                              "src": "2116:18:0",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              "typeName": {
                                "id": 124,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "2116:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 129,
                          "initialValue": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 126,
                              "name": "_hashtags",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 94,
                              "src": "2137:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            "id": 128,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 127,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 114,
                              "src": "2147:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2137:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "2116:33:0"
                        },
                        {
                          "assignments": [
                            131
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 131,
                              "mutability": "mutable",
                              "name": "maxid",
                              "nodeType": "VariableDeclaration",
                              "overrides": null,
                              "scope": 201,
                              "src": "2164:13:0",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 130,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2164:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 133,
                          "initialValue": {
                            "argumentTypes": null,
                            "id": 132,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 114,
                            "src": "2180:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "2164:17:0"
                        },
                        {
                          "body": {
                            "id": 168,
                            "nodeType": "Block",
                            "src": "2241:192:0",
                            "statements": [
                              {
                                "condition": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 155,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 147,
                                      "name": "hashtagScore",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 52,
                                      "src": "2263:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                        "typeString": "mapping(bytes32 => uint256)"
                                      }
                                    },
                                    "id": 149,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 148,
                                      "name": "maxhashtag",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 125,
                                      "src": "2276:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "2263:24:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 150,
                                      "name": "hashtagScore",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 52,
                                      "src": "2290:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                        "typeString": "mapping(bytes32 => uint256)"
                                      }
                                    },
                                    "id": 154,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 151,
                                        "name": "_hashtags",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 94,
                                        "src": "2303:9:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 153,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 152,
                                        "name": "j",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 135,
                                        "src": "2313:1:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "2303:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "2290:26:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "2263:53:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "falseBody": null,
                                "id": 167,
                                "nodeType": "IfStatement",
                                "src": "2260:158:0",
                                "trueBody": {
                                  "id": 166,
                                  "nodeType": "Block",
                                  "src": "2318:100:0",
                                  "statements": [
                                    {
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 160,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                          "argumentTypes": null,
                                          "id": 156,
                                          "name": "maxhashtag",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 125,
                                          "src": "2341:10:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 157,
                                            "name": "_hashtags",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 94,
                                            "src": "2354:9:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                              "typeString": "bytes32[] memory"
                                            }
                                          },
                                          "id": 159,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 158,
                                            "name": "j",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 135,
                                            "src": "2364:1:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "2354:12:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "src": "2341:25:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "id": 161,
                                      "nodeType": "ExpressionStatement",
                                      "src": "2341:25:0"
                                    },
                                    {
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 164,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                          "argumentTypes": null,
                                          "id": 162,
                                          "name": "maxid",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 131,
                                          "src": "2389:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                          "argumentTypes": null,
                                          "id": 163,
                                          "name": "j",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 135,
                                          "src": "2397:1:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "2389:9:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 165,
                                      "nodeType": "ExpressionStatement",
                                      "src": "2389:9:0"
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 143,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 140,
                              "name": "j",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 135,
                              "src": "2214:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 141,
                                "name": "_hashtags",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 94,
                                "src": "2218:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 142,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2218:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2214:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 169,
                          "initializationExpression": {
                            "assignments": [
                              135
                            ],
                            "declarations": [
                              {
                                "constant": false,
                                "id": 135,
                                "mutability": "mutable",
                                "name": "j",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 169,
                                "src": "2200:6:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "typeName": {
                                  "id": 134,
                                  "name": "uint",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2200:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "value": null,
                                "visibility": "internal"
                              }
                            ],
                            "id": 139,
                            "initialValue": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 138,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 136,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 114,
                                "src": "2209:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 137,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2211:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "2209:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "VariableDeclarationStatement",
                            "src": "2200:12:0"
                          },
                          "loopExpression": {
                            "expression": {
                              "argumentTypes": null,
                              "id": 145,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "2236:3:0",
                              "subExpression": {
                                "argumentTypes": null,
                                "id": 144,
                                "name": "j",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 135,
                                "src": "2236:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 146,
                            "nodeType": "ExpressionStatement",
                            "src": "2236:3:0"
                          },
                          "nodeType": "ForStatement",
                          "src": "2196:237:0"
                        },
                        {
                          "assignments": [
                            171
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 171,
                              "mutability": "mutable",
                              "name": "temphashtag",
                              "nodeType": "VariableDeclaration",
                              "overrides": null,
                              "scope": 201,
                              "src": "2447:19:0",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              "typeName": {
                                "id": 170,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "2447:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 175,
                          "initialValue": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 172,
                              "name": "_hashtags",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 94,
                              "src": "2469:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            "id": 174,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 173,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 114,
                              "src": "2479:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2469:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "2447:34:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 182,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 176,
                                "name": "_hashtags",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 94,
                                "src": "2496:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 178,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 177,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 114,
                                "src": "2506:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "2496:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 179,
                                "name": "_hashtags",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 94,
                                "src": "2511:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 181,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 180,
                                "name": "maxid",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 131,
                                "src": "2521:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2511:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "src": "2496:31:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 183,
                          "nodeType": "ExpressionStatement",
                          "src": "2496:31:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 188,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 184,
                                "name": "_hashtags",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 94,
                                "src": "2542:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 186,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 185,
                                "name": "maxid",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 131,
                                "src": "2552:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "2542:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "id": 187,
                              "name": "temphashtag",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 171,
                              "src": "2561:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "src": "2542:30:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 189,
                          "nodeType": "ExpressionStatement",
                          "src": "2542:30:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 196,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 190,
                                "name": "sortedHashtags",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 101,
                                "src": "2615:14:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 192,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 191,
                                "name": "lastId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 110,
                                "src": "2630:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "2615:22:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 193,
                                "name": "_hashtags",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 94,
                                "src": "2640:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 195,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 194,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 114,
                                "src": "2650:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2640:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "src": "2615:37:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 197,
                          "nodeType": "ExpressionStatement",
                          "src": "2615:37:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "2667:8:0",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "lastId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 110,
                              "src": "2667:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 200,
                          "nodeType": "ExpressionStatement",
                          "src": "2667:8:0"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 120,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 117,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 114,
                        "src": "2074:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 118,
                          "name": "_hashtags",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 94,
                          "src": "2078:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[] memory"
                          }
                        },
                        "id": 119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2078:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2074:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 202,
                    "initializationExpression": {
                      "assignments": [
                        114
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 114,
                          "mutability": "mutable",
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "overrides": null,
                          "scope": 202,
                          "src": "2059:9:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 113,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2059:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 116,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2071:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "2059:13:0"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "2096:3:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 121,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 114,
                          "src": "2096:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 123,
                      "nodeType": "ExpressionStatement",
                      "src": "2096:3:0"
                    },
                    "nodeType": "ForStatement",
                    "src": "2055:632:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 203,
                      "name": "sortedHashtags",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 101,
                      "src": "2704:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[] memory"
                      }
                    },
                    "functionReturnParameters": 89,
                    "id": 204,
                    "nodeType": "Return",
                    "src": "2697:21:0"
                  }
                ]
              },
              "documentation": {
                "id": 84,
                "nodeType": "StructuredDocumentation",
                "src": "1687:137:0",
                "text": "@dev selection sort is implemented, \n call this function whenever the hastaglist is change  or when the scores are modified "
              },
              "functionSelector": "e2a53d42",
              "id": 206,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "sortHashtags",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 85,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1851:2:0"
              },
              "returnParameters": {
                "id": 89,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 88,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 206,
                    "src": "1874:16:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 86,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1874:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 87,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "1874:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                        "typeString": "bytes32[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1873:18:0"
              },
              "scope": 726,
              "src": "1830:896:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 243,
                "nodeType": "Block",
                "src": "3004:213:0",
                "statements": [
                  {
                    "body": {
                      "id": 239,
                      "nodeType": "Block",
                      "src": "3081:106:0",
                      "statements": [
                        {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "id": 235,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 228,
                                  "name": "subscribedHashtags",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 48,
                                  "src": "3099:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                    "typeString": "mapping(address => bytes32[] storage ref)"
                                  }
                                },
                                "id": 231,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 229,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "3118:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 230,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3118:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3099:30:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                  "typeString": "bytes32[] storage ref"
                                }
                              },
                              "id": 233,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 232,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 215,
                                "src": "3130:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3099:33:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 234,
                              "name": "_hashtag",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 209,
                              "src": "3136:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "src": "3099:45:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 238,
                          "nodeType": "IfStatement",
                          "src": "3096:79:0",
                          "trueBody": {
                            "expression": {
                              "argumentTypes": null,
                              "hexValue": "74727565",
                              "id": 236,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3171:4:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            "functionReturnParameters": 213,
                            "id": 237,
                            "nodeType": "Return",
                            "src": "3164:11:0"
                          }
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 218,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 215,
                        "src": "3034:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 219,
                            "name": "subscribedHashtags",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48,
                            "src": "3038:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                              "typeString": "mapping(address => bytes32[] storage ref)"
                            }
                          },
                          "id": 222,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 220,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3057:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 221,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3057:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3038:30:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                            "typeString": "bytes32[] storage ref"
                          }
                        },
                        "id": 223,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3038:37:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3034:41:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 240,
                    "initializationExpression": {
                      "assignments": [
                        215
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 215,
                          "mutability": "mutable",
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "overrides": null,
                          "scope": 240,
                          "src": "3019:9:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 214,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3019:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 217,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 216,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3031:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "3019:13:0"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 226,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "3076:3:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 225,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 215,
                          "src": "3076:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 227,
                      "nodeType": "ExpressionStatement",
                      "src": "3076:3:0"
                    },
                    "nodeType": "ForStatement",
                    "src": "3015:172:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 241,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3204:5:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 213,
                    "id": 242,
                    "nodeType": "Return",
                    "src": "3197:12:0"
                  }
                ]
              },
              "documentation": {
                "id": 207,
                "nodeType": "StructuredDocumentation",
                "src": "2744:172:0",
                "text": "@notice check if the user is subscribed to a hashtag\n @return bool true if the user is subscribed to hashtag\n @param  _hashtag to check for subscription"
              },
              "functionSelector": "3c43e6ec",
              "id": 244,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "hasSubscription",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 210,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 209,
                    "mutability": "mutable",
                    "name": "_hashtag",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 244,
                    "src": "2947:16:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 208,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2947:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2946:18:0"
              },
              "returnParameters": {
                "id": 213,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 212,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 244,
                    "src": "2998:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 211,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2998:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2997:6:0"
              },
              "scope": 726,
              "src": "2922:295:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 416,
                "nodeType": "Block",
                "src": "3672:1449:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 262,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 258,
                                  "name": "_content",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 247,
                                  "src": "3703:8:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 257,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3697:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 256,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3697:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": null,
                                    "typeString": null
                                  }
                                }
                              },
                              "id": 259,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3697:15:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 260,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3697:22:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 261,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3722:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3697:26:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "54686520636f6e74656e742063616e6e6f7420626520656d707479",
                          "id": 263,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3725:29:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_da6d61bc4c25d4eed2c1eaa386415abc449e8f6223173c8f61cd0f69ed8aaa63",
                            "typeString": "literal_string \"The content cannot be empty\""
                          },
                          "value": "The content cannot be empty"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_da6d61bc4c25d4eed2c1eaa386415abc449e8f6223173c8f61cd0f69ed8aaa63",
                            "typeString": "literal_string \"The content cannot be empty\""
                          }
                        ],
                        "id": 255,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "3689:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 264,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3689:66:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 265,
                    "nodeType": "ExpressionStatement",
                    "src": "3689:66:0"
                  },
                  {
                    "assignments": [
                      267
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 267,
                        "mutability": "mutable",
                        "name": "newContent",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 416,
                        "src": "3766:25:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Content_$18_memory_ptr",
                          "typeString": "struct IpfsPublisher.Content"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 266,
                          "name": "Content",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 18,
                          "src": "3766:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Content_$18_storage_ptr",
                            "typeString": "struct IpfsPublisher.Content"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 279,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 269,
                          "name": "latestContentId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 83,
                          "src": "3802:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 270,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "3819:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3819:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 272,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "3831:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 273,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3831:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 274,
                          "name": "_content",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 247,
                          "src": "3848:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 275,
                          "name": "_ipfsurl",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 249,
                          "src": "3858:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 276,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3868:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "id": 277,
                          "name": "_hashtags",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 252,
                          "src": "3872:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[] memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[] memory"
                          }
                        ],
                        "id": 268,
                        "name": "Content",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "3794:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Content_$18_storage_ptr_$",
                          "typeString": "type(struct IpfsPublisher.Content storage pointer)"
                        }
                      },
                      "id": 278,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3794:88:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Content_$18_memory_ptr",
                        "typeString": "struct IpfsPublisher.Content memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3766:116:0"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 280,
                          "name": "_hashtags",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 252,
                          "src": "4044:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[] memory"
                          }
                        },
                        "id": 281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4044:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 282,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4064:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4044:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 368,
                      "nodeType": "Block",
                      "src": "4375:385:0",
                      "statements": [
                        {
                          "body": {
                            "id": 366,
                            "nodeType": "Block",
                            "src": "4436:313:0",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 332,
                                      "name": "latestContentId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 83,
                                      "src": "4494:15:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 326,
                                        "name": "contentIdsByHashtag",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 57,
                                        "src": "4455:19:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_array$_t_uint256_$dyn_storage_$",
                                          "typeString": "mapping(bytes32 => uint256[] storage ref)"
                                        }
                                      },
                                      "id": 330,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 327,
                                          "name": "_hashtags",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 252,
                                          "src": "4475:9:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                            "typeString": "bytes32[] memory"
                                          }
                                        },
                                        "id": 329,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 328,
                                          "name": "i",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 316,
                                          "src": "4485:1:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "4475:12:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "4455:33:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 331,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "push",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4455:38:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$__$",
                                      "typeString": "function (uint256)"
                                    }
                                  },
                                  "id": 333,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4455:55:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 334,
                                "nodeType": "ExpressionStatement",
                                "src": "4455:55:0"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 340,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "++",
                                  "prefix": false,
                                  "src": "4529:28:0",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 335,
                                      "name": "hashtagScore",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 52,
                                      "src": "4529:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                        "typeString": "mapping(bytes32 => uint256)"
                                      }
                                    },
                                    "id": 339,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 336,
                                        "name": "_hashtags",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 252,
                                        "src": "4542:9:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 338,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 337,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 316,
                                        "src": "4552:1:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "4542:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "4529:26:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 341,
                                "nodeType": "ExpressionStatement",
                                "src": "4529:28:0"
                              },
                              {
                                "condition": {
                                  "argumentTypes": null,
                                  "id": 347,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "!",
                                  "prefix": true,
                                  "src": "4579:27:0",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 342,
                                      "name": "hashtagExist",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 65,
                                      "src": "4580:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                        "typeString": "mapping(bytes32 => bool)"
                                      }
                                    },
                                    "id": 346,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 343,
                                        "name": "_hashtags",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 252,
                                        "src": "4593:9:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 345,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 344,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 316,
                                        "src": "4603:1:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "4593:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "4580:26:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "falseBody": null,
                                "id": 365,
                                "nodeType": "IfStatement",
                                "src": "4576:158:0",
                                "trueBody": {
                                  "id": 364,
                                  "nodeType": "Block",
                                  "src": "4608:126:0",
                                  "statements": [
                                    {
                                      "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                              "argumentTypes": null,
                                              "id": 351,
                                              "name": "_hashtags",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 252,
                                              "src": "4645:9:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                "typeString": "bytes32[] memory"
                                              }
                                            },
                                            "id": 353,
                                            "indexExpression": {
                                              "argumentTypes": null,
                                              "id": 352,
                                              "name": "i",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 316,
                                              "src": "4655:1:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "4645:12:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": null,
                                            "id": 348,
                                            "name": "hashtags",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 81,
                                            "src": "4631:8:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                              "typeString": "bytes32[] storage ref"
                                            }
                                          },
                                          "id": 350,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "push",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "4631:13:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$__$",
                                            "typeString": "function (bytes32)"
                                          }
                                        },
                                        "id": 354,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4631:27:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 355,
                                      "nodeType": "ExpressionStatement",
                                      "src": "4631:27:0"
                                    },
                                    {
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 362,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 356,
                                            "name": "hashtagExist",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 65,
                                            "src": "4681:12:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                              "typeString": "mapping(bytes32 => bool)"
                                            }
                                          },
                                          "id": 360,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                              "argumentTypes": null,
                                              "id": 357,
                                              "name": "_hashtags",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 252,
                                              "src": "4694:9:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                "typeString": "bytes32[] memory"
                                              }
                                            },
                                            "id": 359,
                                            "indexExpression": {
                                              "argumentTypes": null,
                                              "id": 358,
                                              "name": "i",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 316,
                                              "src": "4704:1:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "4694:12:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "nodeType": "IndexAccess",
                                          "src": "4681:26:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                          }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                          "argumentTypes": null,
                                          "hexValue": "74727565",
                                          "id": 361,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "bool",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "4710:4:0",
                                          "subdenomination": null,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                          },
                                          "value": "true"
                                        },
                                        "src": "4681:33:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "id": 363,
                                      "nodeType": "ExpressionStatement",
                                      "src": "4681:33:0"
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 322,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 319,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 316,
                              "src": "4409:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 320,
                                "name": "_hashtags",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 252,
                                "src": "4413:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 321,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4413:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4409:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 367,
                          "initializationExpression": {
                            "assignments": [
                              316
                            ],
                            "declarations": [
                              {
                                "constant": false,
                                "id": 316,
                                "mutability": "mutable",
                                "name": "i",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 367,
                                "src": "4394:9:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "typeName": {
                                  "id": 315,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4394:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "value": null,
                                "visibility": "internal"
                              }
                            ],
                            "id": 318,
                            "initialValue": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 317,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4406:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "nodeType": "VariableDeclarationStatement",
                            "src": "4394:13:0"
                          },
                          "loopExpression": {
                            "expression": {
                              "argumentTypes": null,
                              "id": 324,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "4431:3:0",
                              "subExpression": {
                                "argumentTypes": null,
                                "id": 323,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 316,
                                "src": "4431:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 325,
                            "nodeType": "ExpressionStatement",
                            "src": "4431:3:0"
                          },
                          "nodeType": "ForStatement",
                          "src": "4390:359:0"
                        }
                      ]
                    },
                    "id": 369,
                    "nodeType": "IfStatement",
                    "src": "4041:719:0",
                    "trueBody": {
                      "id": 314,
                      "nodeType": "Block",
                      "src": "4067:302:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 288,
                                "name": "latestContentId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 83,
                                "src": "4124:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 284,
                                  "name": "contentIdsByHashtag",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 57,
                                  "src": "4082:19:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_array$_t_uint256_$dyn_storage_$",
                                    "typeString": "mapping(bytes32 => uint256[] storage ref)"
                                  }
                                },
                                "id": 286,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "6d697363656c6c616e656f7573",
                                  "id": 285,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4102:15:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_stringliteral_cc6683e14c14120d70551a428777db70fc8d89499014507249272875b94ce895",
                                    "typeString": "literal_string \"miscellaneous\""
                                  },
                                  "value": "miscellaneous"
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "4082:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 287,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "push",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4082:41:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$__$",
                                "typeString": "function (uint256)"
                              }
                            },
                            "id": 289,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4082:58:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 290,
                          "nodeType": "ExpressionStatement",
                          "src": "4082:58:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 294,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "4155:31:0",
                            "subExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 291,
                                "name": "hashtagScore",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52,
                                "src": "4155:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                  "typeString": "mapping(bytes32 => uint256)"
                                }
                              },
                              "id": 293,
                              "indexExpression": {
                                "argumentTypes": null,
                                "hexValue": "6d697363656c6c616e656f7573",
                                "id": 292,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4168:15:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_cc6683e14c14120d70551a428777db70fc8d89499014507249272875b94ce895",
                                  "typeString": "literal_string \"miscellaneous\""
                                },
                                "value": "miscellaneous"
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "4155:29:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 295,
                          "nodeType": "ExpressionStatement",
                          "src": "4155:31:0"
                        },
                        {
                          "condition": {
                            "argumentTypes": null,
                            "id": 299,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "!",
                            "prefix": true,
                            "src": "4206:30:0",
                            "subExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 296,
                                "name": "hashtagExist",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 65,
                                "src": "4207:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                  "typeString": "mapping(bytes32 => bool)"
                                }
                              },
                              "id": 298,
                              "indexExpression": {
                                "argumentTypes": null,
                                "hexValue": "6d697363656c6c616e656f7573",
                                "id": 297,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4220:15:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_cc6683e14c14120d70551a428777db70fc8d89499014507249272875b94ce895",
                                  "typeString": "literal_string \"miscellaneous\""
                                },
                                "value": "miscellaneous"
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4207:29:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 313,
                          "nodeType": "IfStatement",
                          "src": "4203:155:0",
                          "trueBody": {
                            "id": 312,
                            "nodeType": "Block",
                            "src": "4238:120:0",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "6d697363656c6c616e656f7573",
                                      "id": 303,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "4271:15:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_cc6683e14c14120d70551a428777db70fc8d89499014507249272875b94ce895",
                                        "typeString": "literal_string \"miscellaneous\""
                                      },
                                      "value": "miscellaneous"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_cc6683e14c14120d70551a428777db70fc8d89499014507249272875b94ce895",
                                        "typeString": "literal_string \"miscellaneous\""
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 300,
                                      "name": "hashtags",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 81,
                                      "src": "4257:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                        "typeString": "bytes32[] storage ref"
                                      }
                                    },
                                    "id": 302,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "push",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4257:13:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$__$",
                                      "typeString": "function (bytes32)"
                                    }
                                  },
                                  "id": 304,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4257:30:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 305,
                                "nodeType": "ExpressionStatement",
                                "src": "4257:30:0"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 310,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 306,
                                      "name": "hashtagExist",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 65,
                                      "src": "4306:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                        "typeString": "mapping(bytes32 => bool)"
                                      }
                                    },
                                    "id": 308,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "6d697363656c6c616e656f7573",
                                      "id": 307,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "4319:15:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_cc6683e14c14120d70551a428777db70fc8d89499014507249272875b94ce895",
                                        "typeString": "literal_string \"miscellaneous\""
                                      },
                                      "value": "miscellaneous"
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "4306:29:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "hexValue": "74727565",
                                    "id": 309,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4338:4:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "true"
                                  },
                                  "src": "4306:36:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 311,
                                "nodeType": "ExpressionStatement",
                                "src": "4306:36:0"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 373,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 370,
                        "name": "hashtags",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 81,
                        "src": "4772:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 371,
                          "name": "sortHashtags",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 206,
                          "src": "4783:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                            "typeString": "function () view returns (bytes32[] memory)"
                          }
                        },
                        "id": 372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4783:14:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "src": "4772:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "id": 374,
                    "nodeType": "ExpressionStatement",
                    "src": "4772:25:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 379,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 375,
                          "name": "contentById",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61,
                          "src": "4808:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Content_$18_storage_$",
                            "typeString": "mapping(uint256 => struct IpfsPublisher.Content storage ref)"
                          }
                        },
                        "id": 377,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 376,
                          "name": "latestContentId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 83,
                          "src": "4820:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4808:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Content_$18_storage",
                          "typeString": "struct IpfsPublisher.Content storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 378,
                        "name": "newContent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 267,
                        "src": "4839:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Content_$18_memory_ptr",
                          "typeString": "struct IpfsPublisher.Content memory"
                        }
                      },
                      "src": "4808:41:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Content_$18_storage",
                        "typeString": "struct IpfsPublisher.Content storage ref"
                      }
                    },
                    "id": 380,
                    "nodeType": "ExpressionStatement",
                    "src": "4808:41:0"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "id": 385,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "4863:22:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 381,
                          "name": "userExist",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "4864:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 384,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 382,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "4874:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4874:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4864:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 401,
                    "nodeType": "IfStatement",
                    "src": "4860:119:0",
                    "trueBody": {
                      "id": 400,
                      "nodeType": "Block",
                      "src": "4887:92:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 389,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "4913:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 390,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4913:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 386,
                                "name": "users",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 78,
                                "src": "4902:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                  "typeString": "address[] storage ref"
                                }
                              },
                              "id": 388,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "push",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4902:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$__$",
                                "typeString": "function (address)"
                              }
                            },
                            "id": 391,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4902:22:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 392,
                          "nodeType": "ExpressionStatement",
                          "src": "4902:22:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 398,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 393,
                                "name": "userExist",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 69,
                                "src": "4939:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                  "typeString": "mapping(address => bool)"
                                }
                              },
                              "id": 396,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 394,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "4949:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 395,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4949:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "4939:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "hexValue": "74727565",
                              "id": 397,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4963:4:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            "src": "4939:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 399,
                          "nodeType": "ExpressionStatement",
                          "src": "4939:28:0"
                        }
                      ]
                    }
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 403,
                          "name": "latestContentId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 83,
                          "src": "5009:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 404,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "5026:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 405,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5026:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 406,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "5038:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 407,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5038:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 408,
                          "name": "_content",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 247,
                          "src": "5055:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 409,
                          "name": "_ipfsurl",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 249,
                          "src": "5065:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 410,
                          "name": "_hashtags",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 252,
                          "src": "5075:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[] memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[] memory"
                          }
                        ],
                        "id": 402,
                        "name": "ContentAdded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "4996:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,address,uint256,string memory,string memory,bytes32[] memory)"
                        }
                      },
                      "id": 411,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4996:89:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 412,
                    "nodeType": "EmitStatement",
                    "src": "4991:94:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 414,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "5096:17:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 413,
                        "name": "latestContentId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 83,
                        "src": "5096:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 415,
                    "nodeType": "ExpressionStatement",
                    "src": "5096:17:0"
                  }
                ]
              },
              "documentation": {
                "id": 245,
                "nodeType": "StructuredDocumentation",
                "src": "3393:161:0",
                "text": "@param _content the string of content\n @param _ipfsurl the url of the ipfs content\n @param _hashtags the hashtags associated to the content"
              },
              "functionSelector": "f90e46ab",
              "id": 417,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "addContent",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 253,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 247,
                    "mutability": "mutable",
                    "name": "_content",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 417,
                    "src": "3580:22:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 246,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3580:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 249,
                    "mutability": "mutable",
                    "name": "_ipfsurl",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 417,
                    "src": "3604:22:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 248,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3604:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 252,
                    "mutability": "mutable",
                    "name": "_hashtags",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 417,
                    "src": "3628:35:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 250,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3628:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 251,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "3628:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                        "typeString": "bytes32[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3579:85:0"
              },
              "returnParameters": {
                "id": 254,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3672:0:0"
              },
              "scope": 726,
              "src": "3560:1561:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 447,
                "nodeType": "Block",
                "src": "5305:200:0",
                "statements": [
                  {
                    "condition": {
                      "argumentTypes": null,
                      "id": 426,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "5319:26:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 424,
                            "name": "_hashtag",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 420,
                            "src": "5336:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 423,
                          "name": "hasSubscription",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 244,
                          "src": "5320:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5320:25:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 446,
                    "nodeType": "IfStatement",
                    "src": "5316:182:0",
                    "trueBody": {
                      "id": 445,
                      "nodeType": "Block",
                      "src": "5347:151:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 432,
                                "name": "_hashtag",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 420,
                                "src": "5398:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 427,
                                  "name": "subscribedHashtags",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 48,
                                  "src": "5362:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                    "typeString": "mapping(address => bytes32[] storage ref)"
                                  }
                                },
                                "id": 430,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 428,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "5381:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 429,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "5381:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "5362:30:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                  "typeString": "bytes32[] storage ref"
                                }
                              },
                              "id": 431,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "push",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5362:35:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$__$",
                                "typeString": "function (bytes32)"
                              }
                            },
                            "id": 433,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5362:45:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 434,
                          "nodeType": "ExpressionStatement",
                          "src": "5362:45:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 438,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "5422:24:0",
                            "subExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 435,
                                "name": "hashtagScore",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52,
                                "src": "5422:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                  "typeString": "mapping(bytes32 => uint256)"
                                }
                              },
                              "id": 437,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 436,
                                "name": "_hashtag",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 420,
                                "src": "5435:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "5422:22:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 439,
                          "nodeType": "ExpressionStatement",
                          "src": "5422:24:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 440,
                              "name": "hashtags",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 81,
                              "src": "5461:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 441,
                                "name": "sortHashtags",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 206,
                                "src": "5472:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                                  "typeString": "function () view returns (bytes32[] memory)"
                                }
                              },
                              "id": 442,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5472:14:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            "src": "5461:25:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                              "typeString": "bytes32[] storage ref"
                            }
                          },
                          "id": 444,
                          "nodeType": "ExpressionStatement",
                          "src": "5461:25:0"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": {
                "id": 418,
                "nodeType": "StructuredDocumentation",
                "src": "5139:107:0",
                "text": "@notice subscribe to a hashtag if the suscription  doesn't exists\n @param _hashtag hashtag name"
              },
              "functionSelector": "41428f9d",
              "id": 448,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "subscribeToHashtag",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 421,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 420,
                    "mutability": "mutable",
                    "name": "_hashtag",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 448,
                    "src": "5280:16:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 419,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5280:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5279:18:0"
              },
              "returnParameters": {
                "id": 422,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5305:0:0"
              },
              "scope": 726,
              "src": "5252:253:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 504,
                "nodeType": "Block",
                "src": "5696:444:0",
                "statements": [
                  {
                    "condition": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 455,
                          "name": "_hashtag",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 451,
                          "src": "5726:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 454,
                        "name": "hasSubscription",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 244,
                        "src": "5710:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (bytes32) view returns (bool)"
                        }
                      },
                      "id": 456,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5710:25:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 503,
                    "nodeType": "IfStatement",
                    "src": "5707:426:0",
                    "trueBody": {
                      "id": 502,
                      "nodeType": "Block",
                      "src": "5737:396:0",
                      "statements": [
                        {
                          "body": {
                            "id": 500,
                            "nodeType": "Block",
                            "src": "5832:290:0",
                            "statements": [
                              {
                                "condition": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  "id": 478,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 471,
                                        "name": "subscribedHashtags",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 48,
                                        "src": "5854:18:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                          "typeString": "mapping(address => bytes32[] storage ref)"
                                        }
                                      },
                                      "id": 474,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 472,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -15,
                                          "src": "5873:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 473,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "5873:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "5854:30:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                        "typeString": "bytes32[] storage ref"
                                      }
                                    },
                                    "id": 476,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 475,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 458,
                                      "src": "5885:1:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "5854:33:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "id": 477,
                                    "name": "_hashtag",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 451,
                                    "src": "5891:8:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "src": "5854:45:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "falseBody": null,
                                "id": 499,
                                "nodeType": "IfStatement",
                                "src": "5851:256:0",
                                "trueBody": {
                                  "id": 498,
                                  "nodeType": "Block",
                                  "src": "5901:206:0",
                                  "statements": [
                                    {
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 485,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "delete",
                                        "prefix": true,
                                        "src": "5924:40:0",
                                        "subExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                              "argumentTypes": null,
                                              "id": 479,
                                              "name": "subscribedHashtags",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 48,
                                              "src": "5931:18:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                                "typeString": "mapping(address => bytes32[] storage ref)"
                                              }
                                            },
                                            "id": 482,
                                            "indexExpression": {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "id": 480,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "5950:3:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_magic_message",
                                                  "typeString": "msg"
                                                }
                                              },
                                              "id": 481,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "sender",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": null,
                                              "src": "5950:10:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                              }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "5931:30:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                              "typeString": "bytes32[] storage ref"
                                            }
                                          },
                                          "id": 484,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 483,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 458,
                                            "src": "5962:1:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "nodeType": "IndexAccess",
                                          "src": "5931:33:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 486,
                                      "nodeType": "ExpressionStatement",
                                      "src": "5924:40:0"
                                    },
                                    {
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 490,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "--",
                                        "prefix": false,
                                        "src": "5987:24:0",
                                        "subExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 487,
                                            "name": "hashtagScore",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 52,
                                            "src": "5987:12:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                              "typeString": "mapping(bytes32 => uint256)"
                                            }
                                          },
                                          "id": 489,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 488,
                                            "name": "_hashtag",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 451,
                                            "src": "6000:8:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "nodeType": "IndexAccess",
                                          "src": "5987:22:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 491,
                                      "nodeType": "ExpressionStatement",
                                      "src": "5987:24:0"
                                    },
                                    {
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 495,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                          "argumentTypes": null,
                                          "id": 492,
                                          "name": "hashtags",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 81,
                                          "src": "6034:8:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                            "typeString": "bytes32[] storage ref"
                                          }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                          "argumentTypes": null,
                                          "arguments": [],
                                          "expression": {
                                            "argumentTypes": [],
                                            "id": 493,
                                            "name": "sortHashtags",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 206,
                                            "src": "6045:12:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_internal_view$__$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                                              "typeString": "function () view returns (bytes32[] memory)"
                                            }
                                          },
                                          "id": 494,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "6045:14:0",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                            "typeString": "bytes32[] memory"
                                          }
                                        },
                                        "src": "6034:25:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                          "typeString": "bytes32[] storage ref"
                                        }
                                      },
                                      "id": 496,
                                      "nodeType": "ExpressionStatement",
                                      "src": "6034:25:0"
                                    },
                                    {
                                      "id": 497,
                                      "nodeType": "Break",
                                      "src": "6082:5:0"
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 467,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 461,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 458,
                              "src": "5771:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 462,
                                  "name": "subscribedHashtags",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 48,
                                  "src": "5775:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                    "typeString": "mapping(address => bytes32[] storage ref)"
                                  }
                                },
                                "id": 465,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 463,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "5794:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 464,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "5794:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "5775:30:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                  "typeString": "bytes32[] storage ref"
                                }
                              },
                              "id": 466,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5775:37:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5771:41:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 501,
                          "initializationExpression": {
                            "assignments": [
                              458
                            ],
                            "declarations": [
                              {
                                "constant": false,
                                "id": 458,
                                "mutability": "mutable",
                                "name": "i",
                                "nodeType": "VariableDeclaration",
                                "overrides": null,
                                "scope": 501,
                                "src": "5756:9:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "typeName": {
                                  "id": 457,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5756:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "value": null,
                                "visibility": "internal"
                              }
                            ],
                            "id": 460,
                            "initialValue": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 459,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5768:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "nodeType": "VariableDeclarationStatement",
                            "src": "5756:13:0"
                          },
                          "loopExpression": {
                            "expression": {
                              "argumentTypes": null,
                              "id": 469,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "5814:3:0",
                              "subExpression": {
                                "argumentTypes": null,
                                "id": 468,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 458,
                                "src": "5814:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 470,
                            "nodeType": "ExpressionStatement",
                            "src": "5814:3:0"
                          },
                          "nodeType": "ForStatement",
                          "src": "5752:370:0"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": {
                "id": 449,
                "nodeType": "StructuredDocumentation",
                "src": "5529:106:0",
                "text": "@notice unsubscribe to a hashtag if the suscription  does exists\n @param _hashtag hashtag name"
              },
              "functionSelector": "748ddeb0",
              "id": 505,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "unsubscribeToHashtag",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 452,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 451,
                    "mutability": "mutable",
                    "name": "_hashtag",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 505,
                    "src": "5671:16:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 450,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5671:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5670:18:0"
              },
              "returnParameters": {
                "id": 453,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5696:0:0"
              },
              "scope": 726,
              "src": "5641:499:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 537,
                "nodeType": "Block",
                "src": "6322:210:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 518,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "6351:27:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 512,
                                "name": "userVoted",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 75,
                                "src": "6352:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_bool_$_$",
                                  "typeString": "mapping(address => mapping(uint256 => bool))"
                                }
                              },
                              "id": 515,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 513,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "6362:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 514,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "6362:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "6352:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                "typeString": "mapping(uint256 => bool)"
                              }
                            },
                            "id": 517,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 516,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 508,
                              "src": "6374:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6352:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4f6e6c79206f6e6520766f746520697320616c6c6f77656420666f72206561636820636f6e74656e7421",
                          "id": 519,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6380:44:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_92b907e28f3bae36cdb7c9b92a2f5a49ef5ecfda5cda185963183d81de5b58ff",
                            "typeString": "literal_string \"Only one vote is allowed for each content!\""
                          },
                          "value": "Only one vote is allowed for each content!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_92b907e28f3bae36cdb7c9b92a2f5a49ef5ecfda5cda185963183d81de5b58ff",
                            "typeString": "literal_string \"Only one vote is allowed for each content!\""
                          }
                        ],
                        "id": 511,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "6343:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 520,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6343:82:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 521,
                    "nodeType": "ExpressionStatement",
                    "src": "6343:82:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 529,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 522,
                            "name": "userVoted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "6446:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_bool_$_$",
                              "typeString": "mapping(address => mapping(uint256 => bool))"
                            }
                          },
                          "id": 526,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 523,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "6456:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 524,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "6456:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6446:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                            "typeString": "mapping(uint256 => bool)"
                          }
                        },
                        "id": 527,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 525,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 508,
                          "src": "6468:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "6446:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 528,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6475:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "6446:33:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 530,
                    "nodeType": "ExpressionStatement",
                    "src": "6446:33:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 535,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6490:24:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 531,
                            "name": "contentById",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61,
                            "src": "6490:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Content_$18_storage_$",
                              "typeString": "mapping(uint256 => struct IpfsPublisher.Content storage ref)"
                            }
                          },
                          "id": 533,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 532,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 508,
                            "src": "6502:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6490:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Content_$18_storage",
                            "typeString": "struct IpfsPublisher.Content storage ref"
                          }
                        },
                        "id": 534,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "votes",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14,
                        "src": "6490:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 536,
                    "nodeType": "ExpressionStatement",
                    "src": "6490:24:0"
                  }
                ]
              },
              "documentation": {
                "id": 506,
                "nodeType": "StructuredDocumentation",
                "src": "6164:111:0",
                "text": "@notice vote content, each user is allowed to vote only once for each content\n @param _id contentId"
              },
              "functionSelector": "ab2b0141",
              "id": 538,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "voteContent",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 509,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 508,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 538,
                    "src": "6302:11:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 507,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6302:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "6301:13:0"
              },
              "returnParameters": {
                "id": 510,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "6322:0:0"
              },
              "scope": 726,
              "src": "6281:251:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 600,
                "nodeType": "Block",
                "src": "6826:403:0",
                "statements": [
                  {
                    "assignments": [
                      551
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 551,
                        "mutability": "mutable",
                        "name": "result",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 600,
                        "src": "6837:23:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[]"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 549,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "6837:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 550,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "6837:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                            "typeString": "bytes32[]"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 552,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6837:23:0"
                  },
                  {
                    "assignments": [
                      554
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 554,
                        "mutability": "mutable",
                        "name": "amount",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 600,
                        "src": "6881:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 553,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6881:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 555,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6881:14:0"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 559,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 556,
                          "name": "hashtags",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 81,
                          "src": "6920:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                            "typeString": "bytes32[] storage ref"
                          }
                        },
                        "id": 557,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6920:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 558,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 541,
                        "src": "6938:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6920:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 567,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 565,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 554,
                          "src": "7014:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 566,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 541,
                          "src": "7023:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7014:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 568,
                      "nodeType": "ExpressionStatement",
                      "src": "7014:16:0"
                    },
                    "id": 569,
                    "nodeType": "IfStatement",
                    "src": "6916:114:0",
                    "trueBody": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 560,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 554,
                          "src": "6961:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 561,
                            "name": "hashtags",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 81,
                            "src": "6970:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                              "typeString": "bytes32[] storage ref"
                            }
                          },
                          "id": 562,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6970:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6961:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 564,
                      "nodeType": "ExpressionStatement",
                      "src": "6961:24:0"
                    }
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 576,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 570,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 551,
                        "src": "7061:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 574,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 554,
                            "src": "7084:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 573,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "7070:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (bytes32[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 571,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "7074:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "id": 572,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "7074:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                              "typeString": "bytes32[]"
                            }
                          }
                        },
                        "id": 575,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7070:21:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "src": "7061:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[] memory"
                      }
                    },
                    "id": 577,
                    "nodeType": "ExpressionStatement",
                    "src": "7061:30:0"
                  },
                  {
                    "body": {
                      "id": 596,
                      "nodeType": "Block",
                      "src": "7138:50:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 594,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 588,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 551,
                                "src": "7153:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 590,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 589,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 579,
                                "src": "7160:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "7153:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 591,
                                "name": "hashtags",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 81,
                                "src": "7165:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                  "typeString": "bytes32[] storage ref"
                                }
                              },
                              "id": 593,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 592,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 579,
                                "src": "7174:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "7165:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "src": "7153:23:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 595,
                          "nodeType": "ExpressionStatement",
                          "src": "7153:23:0"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 584,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 582,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 579,
                        "src": "7121:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 583,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "7125:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7121:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 597,
                    "initializationExpression": {
                      "assignments": [
                        579
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 579,
                          "mutability": "mutable",
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "overrides": null,
                          "scope": 597,
                          "src": "7106:9:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 578,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7106:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 581,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 580,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7118:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "7106:13:0"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 586,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "7133:3:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 585,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 579,
                          "src": "7133:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 587,
                      "nodeType": "ExpressionStatement",
                      "src": "7133:3:0"
                    },
                    "nodeType": "ForStatement",
                    "src": "7102:86:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 598,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 551,
                      "src": "7215:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[] memory"
                      }
                    },
                    "functionReturnParameters": 546,
                    "id": 599,
                    "nodeType": "Return",
                    "src": "7208:13:0"
                  }
                ]
              },
              "documentation": {
                "id": 539,
                "nodeType": "StructuredDocumentation",
                "src": "6552:189:0",
                "text": "@notice get the top hashtags\n @param _amount How many top hashtags to get in order, for instance the top 20 hashtags\n @return bytes32[] Returns the names of the hashtags"
              },
              "functionSelector": "3c9a1a6e",
              "id": 601,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getTopHashtags",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 542,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 541,
                    "mutability": "mutable",
                    "name": "_amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 601,
                    "src": "6771:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 540,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6771:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "6770:17:0"
              },
              "returnParameters": {
                "id": 546,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 545,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 601,
                    "src": "6808:16:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 543,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "6808:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 544,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "6808:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                        "typeString": "bytes32[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "6807:18:0"
              },
              "scope": 726,
              "src": "6747:482:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 613,
                "nodeType": "Block",
                "src": "7454:56:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 608,
                        "name": "subscribedHashtags",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "7472:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                          "typeString": "mapping(address => bytes32[] storage ref)"
                        }
                      },
                      "id": 611,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 609,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "7491:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 610,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "7491:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "7472:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "functionReturnParameters": 607,
                    "id": 612,
                    "nodeType": "Return",
                    "src": "7465:37:0"
                  }
                ]
              },
              "documentation": {
                "id": 602,
                "nodeType": "StructuredDocumentation",
                "src": "7255:124:0",
                "text": "@notice get the followed hashtag names for this msg.sender\n @return bytes32[] The hashtags followed by this user"
              },
              "functionSelector": "c389ef5e",
              "id": 614,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getFollowedHashtags",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 603,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "7413:2:0"
              },
              "returnParameters": {
                "id": 607,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 606,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 614,
                    "src": "7436:16:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 604,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "7436:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 605,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "7436:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                        "typeString": "bytes32[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "7435:18:0"
              },
              "scope": 726,
              "src": "7385:125:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 684,
                "nodeType": "Block",
                "src": "7968:544:0",
                "statements": [
                  {
                    "assignments": [
                      629
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 629,
                        "mutability": "mutable",
                        "name": "ids",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 684,
                        "src": "7979:20:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[]"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 627,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7979:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 628,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "7979:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 630,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7979:20:0"
                  },
                  {
                    "assignments": [
                      632
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 632,
                        "mutability": "mutable",
                        "name": "amount",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 684,
                        "src": "8018:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 631,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8018:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 633,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "8018:14:0"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 639,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 634,
                            "name": "contentIdsByHashtag",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "8159:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_array$_t_uint256_$dyn_storage_$",
                              "typeString": "mapping(bytes32 => uint256[] storage ref)"
                            }
                          },
                          "id": 636,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 635,
                            "name": "_hashtag",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 617,
                            "src": "8179:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "8159:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 637,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8159:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 638,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 619,
                        "src": "8198:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "8159:46:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 649,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 647,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 632,
                          "src": "8295:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 648,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 619,
                          "src": "8304:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8295:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 650,
                      "nodeType": "ExpressionStatement",
                      "src": "8295:16:0"
                    },
                    "id": 651,
                    "nodeType": "IfStatement",
                    "src": "8155:156:0",
                    "trueBody": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 645,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 640,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 632,
                          "src": "8221:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 641,
                              "name": "contentIdsByHashtag",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 57,
                              "src": "8230:19:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_array$_t_uint256_$dyn_storage_$",
                                "typeString": "mapping(bytes32 => uint256[] storage ref)"
                              }
                            },
                            "id": 643,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 642,
                              "name": "_hashtag",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 617,
                              "src": "8250:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "8230:29:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 644,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "8230:36:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8221:45:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 646,
                      "nodeType": "ExpressionStatement",
                      "src": "8221:45:0"
                    }
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 658,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 652,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 629,
                        "src": "8342:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 656,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 632,
                            "src": "8362:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 655,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "8348:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (uint256[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 653,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "8352:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 654,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "8352:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                              "typeString": "uint256[]"
                            }
                          }
                        },
                        "id": 657,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8348:21:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "src": "8342:27:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "id": 659,
                    "nodeType": "ExpressionStatement",
                    "src": "8342:27:0"
                  },
                  {
                    "body": {
                      "id": 680,
                      "nodeType": "Block",
                      "src": "8416:68:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 678,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 670,
                                "name": "ids",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 629,
                                "src": "8431:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 672,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 671,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 661,
                                "src": "8435:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "8431:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 673,
                                  "name": "contentIdsByHashtag",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 57,
                                  "src": "8440:19:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_array$_t_uint256_$dyn_storage_$",
                                    "typeString": "mapping(bytes32 => uint256[] storage ref)"
                                  }
                                },
                                "id": 675,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 674,
                                  "name": "_hashtag",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 617,
                                  "src": "8460:8:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "8440:29:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 677,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 676,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 661,
                                "src": "8470:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "8440:32:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "8431:41:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 679,
                          "nodeType": "ExpressionStatement",
                          "src": "8431:41:0"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 666,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 664,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 661,
                        "src": "8399:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 665,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 632,
                        "src": "8403:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "8399:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 681,
                    "initializationExpression": {
                      "assignments": [
                        661
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 661,
                          "mutability": "mutable",
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "overrides": null,
                          "scope": 681,
                          "src": "8384:9:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 660,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8384:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 663,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 662,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8396:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "8384:13:0"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 668,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "8411:3:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 667,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 661,
                          "src": "8411:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 669,
                      "nodeType": "ExpressionStatement",
                      "src": "8411:3:0"
                    },
                    "nodeType": "ForStatement",
                    "src": "8380:104:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 682,
                      "name": "ids",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 629,
                      "src": "8501:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "functionReturnParameters": 624,
                    "id": 683,
                    "nodeType": "Return",
                    "src": "8494:10:0"
                  }
                ]
              },
              "documentation": {
                "id": 615,
                "nodeType": "StructuredDocumentation",
                "src": "7534:323:0",
                "text": "@notice get the contents ids for a particular hashtag. \n we can't return arrays of structs.\n @param _hashtag hashtag from which get content\n @param _amount number of posts to be returned\n @return uint256[] the ids of the contents, new request needed for texts and ipfsurls of the posts"
              },
              "functionSelector": "938430d5",
              "id": 685,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getContentIdsByHashtag",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 620,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 617,
                    "mutability": "mutable",
                    "name": "_hashtag",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 685,
                    "src": "7895:16:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 616,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "7895:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 619,
                    "mutability": "mutable",
                    "name": "_amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 685,
                    "src": "7913:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 618,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "7913:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "7894:35:0"
              },
              "returnParameters": {
                "id": 624,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 623,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 685,
                    "src": "7950:16:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 621,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7950:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 622,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "7950:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "7949:18:0"
              },
              "scope": 726,
              "src": "7863:649:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 724,
                "nodeType": "Block",
                "src": "8863:130:0",
                "statements": [
                  {
                    "assignments": [
                      705
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 705,
                        "mutability": "mutable",
                        "name": "c",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 724,
                        "src": "8874:16:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Content_$18_memory_ptr",
                          "typeString": "struct IpfsPublisher.Content"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 704,
                          "name": "Content",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 18,
                          "src": "8874:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Content_$18_storage_ptr",
                            "typeString": "struct IpfsPublisher.Content"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 709,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 706,
                        "name": "contentById",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "8893:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Content_$18_storage_$",
                          "typeString": "mapping(uint256 => struct IpfsPublisher.Content storage ref)"
                        }
                      },
                      "id": 708,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 707,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 688,
                        "src": "8905:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8893:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Content_$18_storage",
                        "typeString": "struct IpfsPublisher.Content storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "8874:35:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 710,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 705,
                            "src": "8928:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Content_$18_memory_ptr",
                              "typeString": "struct IpfsPublisher.Content memory"
                            }
                          },
                          "id": 711,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4,
                          "src": "8928:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 712,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 705,
                            "src": "8934:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Content_$18_memory_ptr",
                              "typeString": "struct IpfsPublisher.Content memory"
                            }
                          },
                          "id": 713,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "author",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6,
                          "src": "8934:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 714,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 705,
                            "src": "8944:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Content_$18_memory_ptr",
                              "typeString": "struct IpfsPublisher.Content memory"
                            }
                          },
                          "id": 715,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "date",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8,
                          "src": "8944:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 716,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 705,
                            "src": "8952:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Content_$18_memory_ptr",
                              "typeString": "struct IpfsPublisher.Content memory"
                            }
                          },
                          "id": 717,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "content",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10,
                          "src": "8952:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 718,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 705,
                            "src": "8963:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Content_$18_memory_ptr",
                              "typeString": "struct IpfsPublisher.Content memory"
                            }
                          },
                          "id": 719,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "ipfsurl",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 12,
                          "src": "8963:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 720,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 705,
                            "src": "8974:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Content_$18_memory_ptr",
                              "typeString": "struct IpfsPublisher.Content memory"
                            }
                          },
                          "id": 721,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hashtags",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 17,
                          "src": "8974:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[] memory"
                          }
                        }
                      ],
                      "id": 722,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "8927:58:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_address_$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "tuple(uint256,address,uint256,string memory,string memory,bytes32[] memory)"
                      }
                    },
                    "functionReturnParameters": 703,
                    "id": 723,
                    "nodeType": "Return",
                    "src": "8920:65:0"
                  }
                ]
              },
              "documentation": {
                "id": 686,
                "nodeType": "StructuredDocumentation",
                "src": "8524:201:0",
                "text": "@notice returns the data for a particular content id\n @param _id The id of the content\n @return Returns the id, author, date, content, ipfsurl and hashtags for that piece of content"
              },
              "functionSelector": "12b468b2",
              "id": 725,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getContentById",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 689,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 688,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 725,
                    "src": "8755:11:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 687,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8755:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "8754:13:0"
              },
              "returnParameters": {
                "id": 703,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 691,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 725,
                    "src": "8788:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 690,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8788:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 693,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 725,
                    "src": "8797:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 692,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "8797:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 695,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 725,
                    "src": "8806:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 694,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8806:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 697,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 725,
                    "src": "8815:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 696,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "8815:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 699,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 725,
                    "src": "8830:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 698,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "8830:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 702,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 725,
                    "src": "8845:16:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 700,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "8845:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 701,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "8845:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                        "typeString": "bytes32[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "8787:75:0"
              },
              "scope": 726,
              "src": "8731:262:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 727,
          "src": "441:8573:0"
        }
      ],
      "src": "37:8977:0"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "project:/contracts/IpfsPublisher.sol",
        "exportedSymbols": {
          "IpfsPublisher": [
            726
          ]
        },
        "license": "GPL-3.0"
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              ">=",
              "0.7",
              ".0",
              "<",
              "0.9",
              ".0"
            ]
          },
          "id": 1,
          "name": "PragmaDirective",
          "src": "37:31:0"
        },
        {
          "attributes": {
            "abstract": false,
            "baseContracts": [
              null
            ],
            "contractDependencies": [
              null
            ],
            "contractKind": "contract",
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              726
            ],
            "name": "IpfsPublisher",
            "scope": 727
          },
          "children": [
            {
              "attributes": {
                "text": "@dev All function calls are currently implemented without side effects"
              },
              "id": 2,
              "name": "StructuredDocumentation",
              "src": "361:76:0"
            },
            {
              "attributes": {
                "canonicalName": "IpfsPublisher.Content",
                "name": "Content",
                "scope": 726,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "constant": false,
                    "mutability": "mutable",
                    "name": "id",
                    "overrides": null,
                    "scope": 18,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 3,
                      "name": "ElementaryTypeName",
                      "src": "497:7:0"
                    }
                  ],
                  "id": 4,
                  "name": "VariableDeclaration",
                  "src": "497:10:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "mutability": "mutable",
                    "name": "author",
                    "overrides": null,
                    "scope": 18,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "address",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "stateMutability": "nonpayable",
                        "type": "address"
                      },
                      "id": 5,
                      "name": "ElementaryTypeName",
                      "src": "518:7:0"
                    }
                  ],
                  "id": 6,
                  "name": "VariableDeclaration",
                  "src": "518:14:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "mutability": "mutable",
                    "name": "date",
                    "overrides": null,
                    "scope": 18,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 7,
                      "name": "ElementaryTypeName",
                      "src": "543:7:0"
                    }
                  ],
                  "id": 8,
                  "name": "VariableDeclaration",
                  "src": "543:12:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "mutability": "mutable",
                    "name": "content",
                    "overrides": null,
                    "scope": 18,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "string",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "string",
                        "type": "string"
                      },
                      "id": 9,
                      "name": "ElementaryTypeName",
                      "src": "566:6:0"
                    }
                  ],
                  "id": 10,
                  "name": "VariableDeclaration",
                  "src": "566:14:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "mutability": "mutable",
                    "name": "ipfsurl",
                    "overrides": null,
                    "scope": 18,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "string",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "string",
                        "type": "string"
                      },
                      "id": 11,
                      "name": "ElementaryTypeName",
                      "src": "591:6:0"
                    }
                  ],
                  "id": 12,
                  "name": "VariableDeclaration",
                  "src": "591:14:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "mutability": "mutable",
                    "name": "votes",
                    "overrides": null,
                    "scope": 18,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 13,
                      "name": "ElementaryTypeName",
                      "src": "616:7:0"
                    }
                  ],
                  "id": 14,
                  "name": "VariableDeclaration",
                  "src": "616:13:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "mutability": "mutable",
                    "name": "hashtags",
                    "overrides": null,
                    "scope": 18,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "bytes32[]",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "length": null,
                        "type": "bytes32[]"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes32",
                            "type": "bytes32"
                          },
                          "id": 15,
                          "name": "ElementaryTypeName",
                          "src": "640:7:0"
                        }
                      ],
                      "id": 16,
                      "name": "ArrayTypeName",
                      "src": "640:9:0"
                    }
                  ],
                  "id": 17,
                  "name": "VariableDeclaration",
                  "src": "640:18:0"
                }
              ],
              "id": 18,
              "name": "StructDefinition",
              "src": "471:195:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "426cfd68",
                "mutability": "mutable",
                "name": "h1",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "bytes32",
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "bytes32",
                    "type": "bytes32"
                  },
                  "id": 20,
                  "name": "ElementaryTypeName",
                  "src": "710:7:0"
                },
                {
                  "attributes": {
                    "argumentTypes": null,
                    "hexvalue": "6831",
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "subdenomination": null,
                    "token": "string",
                    "type": "literal_string \"h1\"",
                    "value": "h1"
                  },
                  "id": 21,
                  "name": "Literal",
                  "src": "730:4:0"
                },
                {
                  "attributes": {
                    "text": "added for parm examples"
                  },
                  "id": 19,
                  "name": "StructuredDocumentation",
                  "src": "678:26:0"
                }
              ],
              "id": 22,
              "name": "VariableDeclaration",
              "src": "710:24:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "5092f2ec",
                "mutability": "mutable",
                "name": "h2",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "bytes32",
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "bytes32",
                    "type": "bytes32"
                  },
                  "id": 23,
                  "name": "ElementaryTypeName",
                  "src": "741:7:0"
                },
                {
                  "attributes": {
                    "argumentTypes": null,
                    "hexvalue": "6832",
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "subdenomination": null,
                    "token": "string",
                    "type": "literal_string \"h2\"",
                    "value": "h2"
                  },
                  "id": 24,
                  "name": "Literal",
                  "src": "761:4:0"
                }
              ],
              "id": 25,
              "name": "VariableDeclaration",
              "src": "741:24:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "b9ccf219",
                "mutability": "mutable",
                "name": "h3",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "bytes32",
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "bytes32",
                    "type": "bytes32"
                  },
                  "id": 26,
                  "name": "ElementaryTypeName",
                  "src": "772:7:0"
                },
                {
                  "attributes": {
                    "argumentTypes": null,
                    "hexvalue": "6833",
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "subdenomination": null,
                    "token": "string",
                    "type": "literal_string \"h3\"",
                    "value": "h3"
                  },
                  "id": 27,
                  "name": "Literal",
                  "src": "792:4:0"
                }
              ],
              "id": 28,
              "name": "VariableDeclaration",
              "src": "772:24:0"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "ContentAdded"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "id",
                        "overrides": null,
                        "scope": 43,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 29,
                          "name": "ElementaryTypeName",
                          "src": "828:7:0"
                        }
                      ],
                      "id": 30,
                      "name": "VariableDeclaration",
                      "src": "828:18:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "author",
                        "overrides": null,
                        "scope": 43,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 31,
                          "name": "ElementaryTypeName",
                          "src": "848:7:0"
                        }
                      ],
                      "id": 32,
                      "name": "VariableDeclaration",
                      "src": "848:22:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "date",
                        "overrides": null,
                        "scope": 43,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 33,
                          "name": "ElementaryTypeName",
                          "src": "881:7:0"
                        }
                      ],
                      "id": 34,
                      "name": "VariableDeclaration",
                      "src": "881:20:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "content",
                        "overrides": null,
                        "scope": 43,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 35,
                          "name": "ElementaryTypeName",
                          "src": "903:6:0"
                        }
                      ],
                      "id": 36,
                      "name": "VariableDeclaration",
                      "src": "903:14:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "ipfsurl",
                        "overrides": null,
                        "scope": 43,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 37,
                          "name": "ElementaryTypeName",
                          "src": "919:6:0"
                        }
                      ],
                      "id": 38,
                      "name": "VariableDeclaration",
                      "src": "919:14:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "hashtags",
                        "overrides": null,
                        "scope": 43,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bytes32[]",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "length": null,
                            "type": "bytes32[]"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes32",
                                "type": "bytes32"
                              },
                              "id": 39,
                              "name": "ElementaryTypeName",
                              "src": "935:7:0"
                            }
                          ],
                          "id": 40,
                          "name": "ArrayTypeName",
                          "src": "935:9:0"
                        }
                      ],
                      "id": 41,
                      "name": "VariableDeclaration",
                      "src": "935:18:0"
                    }
                  ],
                  "id": 42,
                  "name": "ParameterList",
                  "src": "827:127:0"
                }
              ],
              "id": 43,
              "name": "EventDefinition",
              "src": "809:146:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "40d65a86",
                "mutability": "mutable",
                "name": "subscribedHashtags",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(address => bytes32[])",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(address => bytes32[])"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 44,
                      "name": "ElementaryTypeName",
                      "src": "981:7:0"
                    },
                    {
                      "attributes": {
                        "length": null,
                        "type": "bytes32[]"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes32",
                            "type": "bytes32"
                          },
                          "id": 45,
                          "name": "ElementaryTypeName",
                          "src": "992:7:0"
                        }
                      ],
                      "id": 46,
                      "name": "ArrayTypeName",
                      "src": "992:9:0"
                    }
                  ],
                  "id": 47,
                  "name": "Mapping",
                  "src": "973:29:0"
                }
              ],
              "id": 48,
              "name": "VariableDeclaration",
              "src": "973:55:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "b3c11db6",
                "mutability": "mutable",
                "name": "hashtagScore",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(bytes32 => uint256)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(bytes32 => uint256)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "bytes32",
                        "type": "bytes32"
                      },
                      "id": 49,
                      "name": "ElementaryTypeName",
                      "src": "1043:7:0"
                    },
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 50,
                      "name": "ElementaryTypeName",
                      "src": "1054:7:0"
                    }
                  ],
                  "id": 51,
                  "name": "Mapping",
                  "src": "1035:27:0"
                }
              ],
              "id": 52,
              "name": "VariableDeclaration",
              "src": "1035:47:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "f4fe51a8",
                "mutability": "mutable",
                "name": "contentIdsByHashtag",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(bytes32 => uint256[])",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(bytes32 => uint256[])"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "bytes32",
                        "type": "bytes32"
                      },
                      "id": 53,
                      "name": "ElementaryTypeName",
                      "src": "1098:7:0"
                    },
                    {
                      "attributes": {
                        "length": null,
                        "type": "uint256[]"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 54,
                          "name": "ElementaryTypeName",
                          "src": "1109:7:0"
                        }
                      ],
                      "id": 55,
                      "name": "ArrayTypeName",
                      "src": "1109:9:0"
                    }
                  ],
                  "id": 56,
                  "name": "Mapping",
                  "src": "1090:29:0"
                }
              ],
              "id": 57,
              "name": "VariableDeclaration",
              "src": "1090:56:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "725ac19a",
                "mutability": "mutable",
                "name": "contentById",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(uint256 => struct IpfsPublisher.Content)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(uint256 => struct IpfsPublisher.Content)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint256",
                        "type": "uint256"
                      },
                      "id": 58,
                      "name": "ElementaryTypeName",
                      "src": "1161:7:0"
                    },
                    {
                      "attributes": {
                        "contractScope": null,
                        "name": "Content",
                        "referencedDeclaration": 18,
                        "type": "struct IpfsPublisher.Content"
                      },
                      "id": 59,
                      "name": "UserDefinedTypeName",
                      "src": "1172:7:0"
                    }
                  ],
                  "id": 60,
                  "name": "Mapping",
                  "src": "1153:27:0"
                }
              ],
              "id": 61,
              "name": "VariableDeclaration",
              "src": "1153:46:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "20bf0924",
                "mutability": "mutable",
                "name": "hashtagExist",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(bytes32 => bool)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(bytes32 => bool)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "bytes32",
                        "type": "bytes32"
                      },
                      "id": 62,
                      "name": "ElementaryTypeName",
                      "src": "1214:7:0"
                    },
                    {
                      "attributes": {
                        "name": "bool",
                        "type": "bool"
                      },
                      "id": 63,
                      "name": "ElementaryTypeName",
                      "src": "1225:4:0"
                    }
                  ],
                  "id": 64,
                  "name": "Mapping",
                  "src": "1206:24:0"
                }
              ],
              "id": 65,
              "name": "VariableDeclaration",
              "src": "1206:44:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "ab7e7cf6",
                "mutability": "mutable",
                "name": "userExist",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(address => bool)",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(address => bool)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 66,
                      "name": "ElementaryTypeName",
                      "src": "1265:7:0"
                    },
                    {
                      "attributes": {
                        "name": "bool",
                        "type": "bool"
                      },
                      "id": 67,
                      "name": "ElementaryTypeName",
                      "src": "1276:4:0"
                    }
                  ],
                  "id": 68,
                  "name": "Mapping",
                  "src": "1257:24:0"
                }
              ],
              "id": 69,
              "name": "VariableDeclaration",
              "src": "1257:41:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "36878efc",
                "mutability": "mutable",
                "name": "userVoted",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(address => mapping(uint256 => bool))",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(address => mapping(uint256 => bool))"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 70,
                      "name": "ElementaryTypeName",
                      "src": "1313:7:0"
                    },
                    {
                      "attributes": {
                        "type": "mapping(uint256 => bool)"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 71,
                          "name": "ElementaryTypeName",
                          "src": "1334:7:0"
                        },
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 72,
                          "name": "ElementaryTypeName",
                          "src": "1345:4:0"
                        }
                      ],
                      "id": 73,
                      "name": "Mapping",
                      "src": "1324:26:0"
                    }
                  ],
                  "id": 74,
                  "name": "Mapping",
                  "src": "1305:46:0"
                }
              ],
              "id": 75,
              "name": "VariableDeclaration",
              "src": "1305:63:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "365b98b2",
                "mutability": "mutable",
                "name": "users",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "address[]",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "length": null,
                    "type": "address[]"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "stateMutability": "nonpayable",
                        "type": "address"
                      },
                      "id": 76,
                      "name": "ElementaryTypeName",
                      "src": "1375:7:0"
                    }
                  ],
                  "id": 77,
                  "name": "ArrayTypeName",
                  "src": "1375:9:0"
                }
              ],
              "id": 78,
              "name": "VariableDeclaration",
              "src": "1375:22:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "70f01a28",
                "mutability": "mutable",
                "name": "hashtags",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "bytes32[]",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "length": null,
                    "type": "bytes32[]"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "bytes32",
                        "type": "bytes32"
                      },
                      "id": 79,
                      "name": "ElementaryTypeName",
                      "src": "1404:7:0"
                    }
                  ],
                  "id": 80,
                  "name": "ArrayTypeName",
                  "src": "1404:9:0"
                }
              ],
              "id": 81,
              "name": "VariableDeclaration",
              "src": "1404:25:0"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "c9a9aed5",
                "mutability": "mutable",
                "name": "latestContentId",
                "overrides": null,
                "scope": 726,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint256",
                    "type": "uint256"
                  },
                  "id": 82,
                  "name": "ElementaryTypeName",
                  "src": "1436:7:0"
                }
              ],
              "id": 83,
              "name": "VariableDeclaration",
              "src": "1436:30:0"
            },
            {
              "attributes": {
                "functionSelector": "e2a53d42",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "sortHashtags",
                "overrides": null,
                "scope": 726,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@dev selection sort is implemented, \n call this function whenever the hastaglist is change  or when the scores are modified "
                  },
                  "id": 84,
                  "name": "StructuredDocumentation",
                  "src": "1687:137:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 85,
                  "name": "ParameterList",
                  "src": "1851:2:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 206,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "bytes32[]",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "length": null,
                            "type": "bytes32[]"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes32",
                                "type": "bytes32"
                              },
                              "id": 86,
                              "name": "ElementaryTypeName",
                              "src": "1874:7:0"
                            }
                          ],
                          "id": 87,
                          "name": "ArrayTypeName",
                          "src": "1874:9:0"
                        }
                      ],
                      "id": 88,
                      "name": "VariableDeclaration",
                      "src": "1874:16:0"
                    }
                  ],
                  "id": 89,
                  "name": "ParameterList",
                  "src": "1873:18:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          94
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "_hashtags",
                            "overrides": null,
                            "scope": 205,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "bytes32[]",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "length": null,
                                "type": "bytes32[]"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "bytes32",
                                    "type": "bytes32"
                                  },
                                  "id": 92,
                                  "name": "ElementaryTypeName",
                                  "src": "1903:7:0"
                                }
                              ],
                              "id": 93,
                              "name": "ArrayTypeName",
                              "src": "1903:9:0"
                            }
                          ],
                          "id": 94,
                          "name": "VariableDeclaration",
                          "src": "1903:26:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 81,
                            "type": "bytes32[] storage ref",
                            "value": "hashtags"
                          },
                          "id": 95,
                          "name": "Identifier",
                          "src": "1932:8:0"
                        }
                      ],
                      "id": 96,
                      "name": "VariableDeclarationStatement",
                      "src": "1903:37:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          101
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "sortedHashtags",
                            "overrides": null,
                            "scope": 205,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "bytes32[]",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "length": null,
                                "type": "bytes32[]"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "bytes32",
                                    "type": "bytes32"
                                  },
                                  "id": 99,
                                  "name": "ElementaryTypeName",
                                  "src": "1951:7:0"
                                }
                              ],
                              "id": 100,
                              "name": "ArrayTypeName",
                              "src": "1951:9:0"
                            }
                          ],
                          "id": 101,
                          "name": "VariableDeclaration",
                          "src": "1951:31:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "bytes32[] memory",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "type": "function (uint256) pure returns (bytes32[] memory)"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "length": null,
                                    "type": "bytes32[]"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "name": "bytes32",
                                        "type": "bytes32"
                                      },
                                      "id": 102,
                                      "name": "ElementaryTypeName",
                                      "src": "1989:7:0"
                                    }
                                  ],
                                  "id": 103,
                                  "name": "ArrayTypeName",
                                  "src": "1989:9:0"
                                }
                              ],
                              "id": 104,
                              "name": "NewExpression",
                              "src": "1985:13:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "length",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 81,
                                    "type": "bytes32[] storage ref",
                                    "value": "hashtags"
                                  },
                                  "id": 105,
                                  "name": "Identifier",
                                  "src": "1999:8:0"
                                }
                              ],
                              "id": 106,
                              "name": "MemberAccess",
                              "src": "1999:15:0"
                            }
                          ],
                          "id": 107,
                          "name": "FunctionCall",
                          "src": "1985:30:0"
                        }
                      ],
                      "id": 108,
                      "name": "VariableDeclarationStatement",
                      "src": "1951:64:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          110
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "lastId",
                            "overrides": null,
                            "scope": 205,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint256",
                                "type": "uint256"
                              },
                              "id": 109,
                              "name": "ElementaryTypeName",
                              "src": "2026:7:0"
                            }
                          ],
                          "id": 110,
                          "name": "VariableDeclaration",
                          "src": "2026:14:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "hexvalue": "30",
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "subdenomination": null,
                            "token": "number",
                            "type": "int_const 0",
                            "value": "0"
                          },
                          "id": 111,
                          "name": "Literal",
                          "src": "2043:1:0"
                        }
                      ],
                      "id": 112,
                      "name": "VariableDeclarationStatement",
                      "src": "2026:18:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "assignments": [
                              114
                            ]
                          },
                          "children": [
                            {
                              "attributes": {
                                "constant": false,
                                "mutability": "mutable",
                                "name": "i",
                                "overrides": null,
                                "scope": 202,
                                "stateVariable": false,
                                "storageLocation": "default",
                                "type": "uint256",
                                "value": null,
                                "visibility": "internal"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "uint256",
                                    "type": "uint256"
                                  },
                                  "id": 113,
                                  "name": "ElementaryTypeName",
                                  "src": "2059:7:0"
                                }
                              ],
                              "id": 114,
                              "name": "VariableDeclaration",
                              "src": "2059:9:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 115,
                              "name": "Literal",
                              "src": "2071:1:0"
                            }
                          ],
                          "id": 116,
                          "name": "VariableDeclarationStatement",
                          "src": "2059:13:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "<",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 114,
                                "type": "uint256",
                                "value": "i"
                              },
                              "id": 117,
                              "name": "Identifier",
                              "src": "2074:1:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "length",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 94,
                                    "type": "bytes32[] memory",
                                    "value": "_hashtags"
                                  },
                                  "id": 118,
                                  "name": "Identifier",
                                  "src": "2078:9:0"
                                }
                              ],
                              "id": 119,
                              "name": "MemberAccess",
                              "src": "2078:16:0"
                            }
                          ],
                          "id": 120,
                          "name": "BinaryOperation",
                          "src": "2074:20:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "++",
                                "prefix": false,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 114,
                                    "type": "uint256",
                                    "value": "i"
                                  },
                                  "id": 121,
                                  "name": "Identifier",
                                  "src": "2096:1:0"
                                }
                              ],
                              "id": 122,
                              "name": "UnaryOperation",
                              "src": "2096:3:0"
                            }
                          ],
                          "id": 123,
                          "name": "ExpressionStatement",
                          "src": "2096:3:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "assignments": [
                                  125
                                ]
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "constant": false,
                                    "mutability": "mutable",
                                    "name": "maxhashtag",
                                    "overrides": null,
                                    "scope": 201,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "bytes32",
                                    "value": null,
                                    "visibility": "internal"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "name": "bytes32",
                                        "type": "bytes32"
                                      },
                                      "id": 124,
                                      "name": "ElementaryTypeName",
                                      "src": "2116:7:0"
                                    }
                                  ],
                                  "id": 125,
                                  "name": "VariableDeclaration",
                                  "src": "2116:18:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "bytes32"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 94,
                                        "type": "bytes32[] memory",
                                        "value": "_hashtags"
                                      },
                                      "id": 126,
                                      "name": "Identifier",
                                      "src": "2137:9:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 114,
                                        "type": "uint256",
                                        "value": "i"
                                      },
                                      "id": 127,
                                      "name": "Identifier",
                                      "src": "2147:1:0"
                                    }
                                  ],
                                  "id": 128,
                                  "name": "IndexAccess",
                                  "src": "2137:12:0"
                                }
                              ],
                              "id": 129,
                              "name": "VariableDeclarationStatement",
                              "src": "2116:33:0"
                            },
                            {
                              "attributes": {
                                "assignments": [
                                  131
                                ]
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "constant": false,
                                    "mutability": "mutable",
                                    "name": "maxid",
                                    "overrides": null,
                                    "scope": 201,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "uint256",
                                    "value": null,
                                    "visibility": "internal"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "name": "uint256",
                                        "type": "uint256"
                                      },
                                      "id": 130,
                                      "name": "ElementaryTypeName",
                                      "src": "2164:7:0"
                                    }
                                  ],
                                  "id": 131,
                                  "name": "VariableDeclaration",
                                  "src": "2164:13:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 114,
                                    "type": "uint256",
                                    "value": "i"
                                  },
                                  "id": 132,
                                  "name": "Identifier",
                                  "src": "2180:1:0"
                                }
                              ],
                              "id": 133,
                              "name": "VariableDeclarationStatement",
                              "src": "2164:17:0"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "assignments": [
                                      135
                                    ]
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "constant": false,
                                        "mutability": "mutable",
                                        "name": "j",
                                        "overrides": null,
                                        "scope": 169,
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "type": "uint256",
                                        "value": null,
                                        "visibility": "internal"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "name": "uint",
                                            "type": "uint256"
                                          },
                                          "id": 134,
                                          "name": "ElementaryTypeName",
                                          "src": "2200:4:0"
                                        }
                                      ],
                                      "id": 135,
                                      "name": "VariableDeclaration",
                                      "src": "2200:6:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "operator": "+",
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 114,
                                            "type": "uint256",
                                            "value": "i"
                                          },
                                          "id": 136,
                                          "name": "Identifier",
                                          "src": "2209:1:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "31",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "number",
                                            "type": "int_const 1",
                                            "value": "1"
                                          },
                                          "id": 137,
                                          "name": "Literal",
                                          "src": "2211:1:0"
                                        }
                                      ],
                                      "id": 138,
                                      "name": "BinaryOperation",
                                      "src": "2209:3:0"
                                    }
                                  ],
                                  "id": 139,
                                  "name": "VariableDeclarationStatement",
                                  "src": "2200:12:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "<",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 135,
                                        "type": "uint256",
                                        "value": "j"
                                      },
                                      "id": 140,
                                      "name": "Identifier",
                                      "src": "2214:1:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "length",
                                        "referencedDeclaration": null,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 94,
                                            "type": "bytes32[] memory",
                                            "value": "_hashtags"
                                          },
                                          "id": 141,
                                          "name": "Identifier",
                                          "src": "2218:9:0"
                                        }
                                      ],
                                      "id": 142,
                                      "name": "MemberAccess",
                                      "src": "2218:16:0"
                                    }
                                  ],
                                  "id": 143,
                                  "name": "BinaryOperation",
                                  "src": "2214:20:0"
                                },
                                {
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "operator": "++",
                                        "prefix": false,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 135,
                                            "type": "uint256",
                                            "value": "j"
                                          },
                                          "id": 144,
                                          "name": "Identifier",
                                          "src": "2236:1:0"
                                        }
                                      ],
                                      "id": 145,
                                      "name": "UnaryOperation",
                                      "src": "2236:3:0"
                                    }
                                  ],
                                  "id": 146,
                                  "name": "ExpressionStatement",
                                  "src": "2236:3:0"
                                },
                                {
                                  "children": [
                                    {
                                      "attributes": {
                                        "falseBody": null
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "commonType": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "operator": "<",
                                            "type": "bool"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "type": "uint256"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": 52,
                                                    "type": "mapping(bytes32 => uint256)",
                                                    "value": "hashtagScore"
                                                  },
                                                  "id": 147,
                                                  "name": "Identifier",
                                                  "src": "2263:12:0"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": 125,
                                                    "type": "bytes32",
                                                    "value": "maxhashtag"
                                                  },
                                                  "id": 148,
                                                  "name": "Identifier",
                                                  "src": "2276:10:0"
                                                }
                                              ],
                                              "id": 149,
                                              "name": "IndexAccess",
                                              "src": "2263:24:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "type": "uint256"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": 52,
                                                    "type": "mapping(bytes32 => uint256)",
                                                    "value": "hashtagScore"
                                                  },
                                                  "id": 150,
                                                  "name": "Identifier",
                                                  "src": "2290:12:0"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "bytes32"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 94,
                                                        "type": "bytes32[] memory",
                                                        "value": "_hashtags"
                                                      },
                                                      "id": 151,
                                                      "name": "Identifier",
                                                      "src": "2303:9:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 135,
                                                        "type": "uint256",
                                                        "value": "j"
                                                      },
                                                      "id": 152,
                                                      "name": "Identifier",
                                                      "src": "2313:1:0"
                                                    }
                                                  ],
                                                  "id": 153,
                                                  "name": "IndexAccess",
                                                  "src": "2303:12:0"
                                                }
                                              ],
                                              "id": 154,
                                              "name": "IndexAccess",
                                              "src": "2290:26:0"
                                            }
                                          ],
                                          "id": 155,
                                          "name": "BinaryOperation",
                                          "src": "2263:53:0"
                                        },
                                        {
                                          "children": [
                                            {
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "bytes32"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 125,
                                                        "type": "bytes32",
                                                        "value": "maxhashtag"
                                                      },
                                                      "id": 156,
                                                      "name": "Identifier",
                                                      "src": "2341:10:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "type": "bytes32"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 94,
                                                            "type": "bytes32[] memory",
                                                            "value": "_hashtags"
                                                          },
                                                          "id": 157,
                                                          "name": "Identifier",
                                                          "src": "2354:9:0"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 135,
                                                            "type": "uint256",
                                                            "value": "j"
                                                          },
                                                          "id": 158,
                                                          "name": "Identifier",
                                                          "src": "2364:1:0"
                                                        }
                                                      ],
                                                      "id": 159,
                                                      "name": "IndexAccess",
                                                      "src": "2354:12:0"
                                                    }
                                                  ],
                                                  "id": 160,
                                                  "name": "Assignment",
                                                  "src": "2341:25:0"
                                                }
                                              ],
                                              "id": 161,
                                              "name": "ExpressionStatement",
                                              "src": "2341:25:0"
                                            },
                                            {
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "uint256"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 131,
                                                        "type": "uint256",
                                                        "value": "maxid"
                                                      },
                                                      "id": 162,
                                                      "name": "Identifier",
                                                      "src": "2389:5:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 135,
                                                        "type": "uint256",
                                                        "value": "j"
                                                      },
                                                      "id": 163,
                                                      "name": "Identifier",
                                                      "src": "2397:1:0"
                                                    }
                                                  ],
                                                  "id": 164,
                                                  "name": "Assignment",
                                                  "src": "2389:9:0"
                                                }
                                              ],
                                              "id": 165,
                                              "name": "ExpressionStatement",
                                              "src": "2389:9:0"
                                            }
                                          ],
                                          "id": 166,
                                          "name": "Block",
                                          "src": "2318:100:0"
                                        }
                                      ],
                                      "id": 167,
                                      "name": "IfStatement",
                                      "src": "2260:158:0"
                                    }
                                  ],
                                  "id": 168,
                                  "name": "Block",
                                  "src": "2241:192:0"
                                }
                              ],
                              "id": 169,
                              "name": "ForStatement",
                              "src": "2196:237:0"
                            },
                            {
                              "attributes": {
                                "assignments": [
                                  171
                                ]
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "constant": false,
                                    "mutability": "mutable",
                                    "name": "temphashtag",
                                    "overrides": null,
                                    "scope": 201,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "bytes32",
                                    "value": null,
                                    "visibility": "internal"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "name": "bytes32",
                                        "type": "bytes32"
                                      },
                                      "id": 170,
                                      "name": "ElementaryTypeName",
                                      "src": "2447:7:0"
                                    }
                                  ],
                                  "id": 171,
                                  "name": "VariableDeclaration",
                                  "src": "2447:19:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "bytes32"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 94,
                                        "type": "bytes32[] memory",
                                        "value": "_hashtags"
                                      },
                                      "id": 172,
                                      "name": "Identifier",
                                      "src": "2469:9:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 114,
                                        "type": "uint256",
                                        "value": "i"
                                      },
                                      "id": 173,
                                      "name": "Identifier",
                                      "src": "2479:1:0"
                                    }
                                  ],
                                  "id": 174,
                                  "name": "IndexAccess",
                                  "src": "2469:12:0"
                                }
                              ],
                              "id": 175,
                              "name": "VariableDeclarationStatement",
                              "src": "2447:34:0"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "=",
                                    "type": "bytes32"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "type": "bytes32"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 94,
                                            "type": "bytes32[] memory",
                                            "value": "_hashtags"
                                          },
                                          "id": 176,
                                          "name": "Identifier",
                                          "src": "2496:9:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 114,
                                            "type": "uint256",
                                            "value": "i"
                                          },
                                          "id": 177,
                                          "name": "Identifier",
                                          "src": "2506:1:0"
                                        }
                                      ],
                                      "id": 178,
                                      "name": "IndexAccess",
                                      "src": "2496:12:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "bytes32"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 94,
                                            "type": "bytes32[] memory",
                                            "value": "_hashtags"
                                          },
                                          "id": 179,
                                          "name": "Identifier",
                                          "src": "2511:9:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 131,
                                            "type": "uint256",
                                            "value": "maxid"
                                          },
                                          "id": 180,
                                          "name": "Identifier",
                                          "src": "2521:5:0"
                                        }
                                      ],
                                      "id": 181,
                                      "name": "IndexAccess",
                                      "src": "2511:16:0"
                                    }
                                  ],
                                  "id": 182,
                                  "name": "Assignment",
                                  "src": "2496:31:0"
                                }
                              ],
                              "id": 183,
                              "name": "ExpressionStatement",
                              "src": "2496:31:0"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "=",
                                    "type": "bytes32"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "type": "bytes32"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 94,
                                            "type": "bytes32[] memory",
                                            "value": "_hashtags"
                                          },
                                          "id": 184,
                                          "name": "Identifier",
                                          "src": "2542:9:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 131,
                                            "type": "uint256",
                                            "value": "maxid"
                                          },
                                          "id": 185,
                                          "name": "Identifier",
                                          "src": "2552:5:0"
                                        }
                                      ],
                                      "id": 186,
                                      "name": "IndexAccess",
                                      "src": "2542:16:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 171,
                                        "type": "bytes32",
                                        "value": "temphashtag"
                                      },
                                      "id": 187,
                                      "name": "Identifier",
                                      "src": "2561:11:0"
                                    }
                                  ],
                                  "id": 188,
                                  "name": "Assignment",
                                  "src": "2542:30:0"
                                }
                              ],
                              "id": 189,
                              "name": "ExpressionStatement",
                              "src": "2542:30:0"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "=",
                                    "type": "bytes32"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "type": "bytes32"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 101,
                                            "type": "bytes32[] memory",
                                            "value": "sortedHashtags"
                                          },
                                          "id": 190,
                                          "name": "Identifier",
                                          "src": "2615:14:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 110,
                                            "type": "uint256",
                                            "value": "lastId"
                                          },
                                          "id": 191,
                                          "name": "Identifier",
                                          "src": "2630:6:0"
                                        }
                                      ],
                                      "id": 192,
                                      "name": "IndexAccess",
                                      "src": "2615:22:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "bytes32"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 94,
                                            "type": "bytes32[] memory",
                                            "value": "_hashtags"
                                          },
                                          "id": 193,
                                          "name": "Identifier",
                                          "src": "2640:9:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 114,
                                            "type": "uint256",
                                            "value": "i"
                                          },
                                          "id": 194,
                                          "name": "Identifier",
                                          "src": "2650:1:0"
                                        }
                                      ],
                                      "id": 195,
                                      "name": "IndexAccess",
                                      "src": "2640:12:0"
                                    }
                                  ],
                                  "id": 196,
                                  "name": "Assignment",
                                  "src": "2615:37:0"
                                }
                              ],
                              "id": 197,
                              "name": "ExpressionStatement",
                              "src": "2615:37:0"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "++",
                                    "prefix": false,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 110,
                                        "type": "uint256",
                                        "value": "lastId"
                                      },
                                      "id": 198,
                                      "name": "Identifier",
                                      "src": "2667:6:0"
                                    }
                                  ],
                                  "id": 199,
                                  "name": "UnaryOperation",
                                  "src": "2667:8:0"
                                }
                              ],
                              "id": 200,
                              "name": "ExpressionStatement",
                              "src": "2667:8:0"
                            }
                          ],
                          "id": 201,
                          "name": "Block",
                          "src": "2101:586:0"
                        }
                      ],
                      "id": 202,
                      "name": "ForStatement",
                      "src": "2055:632:0"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 89
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 101,
                            "type": "bytes32[] memory",
                            "value": "sortedHashtags"
                          },
                          "id": 203,
                          "name": "Identifier",
                          "src": "2704:14:0"
                        }
                      ],
                      "id": 204,
                      "name": "Return",
                      "src": "2697:21:0"
                    }
                  ],
                  "id": 205,
                  "name": "Block",
                  "src": "1892:834:0"
                }
              ],
              "id": 206,
              "name": "FunctionDefinition",
              "src": "1830:896:0"
            },
            {
              "attributes": {
                "functionSelector": "3c43e6ec",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "hasSubscription",
                "overrides": null,
                "scope": 726,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@notice check if the user is subscribed to a hashtag\n @return bool true if the user is subscribed to hashtag\n @param  _hashtag to check for subscription"
                  },
                  "id": 207,
                  "name": "StructuredDocumentation",
                  "src": "2744:172:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_hashtag",
                        "overrides": null,
                        "scope": 244,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bytes32",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes32",
                            "type": "bytes32"
                          },
                          "id": 208,
                          "name": "ElementaryTypeName",
                          "src": "2947:7:0"
                        }
                      ],
                      "id": 209,
                      "name": "VariableDeclaration",
                      "src": "2947:16:0"
                    }
                  ],
                  "id": 210,
                  "name": "ParameterList",
                  "src": "2946:18:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 244,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 211,
                          "name": "ElementaryTypeName",
                          "src": "2998:4:0"
                        }
                      ],
                      "id": 212,
                      "name": "VariableDeclaration",
                      "src": "2998:4:0"
                    }
                  ],
                  "id": 213,
                  "name": "ParameterList",
                  "src": "2997:6:0"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "assignments": [
                              215
                            ]
                          },
                          "children": [
                            {
                              "attributes": {
                                "constant": false,
                                "mutability": "mutable",
                                "name": "i",
                                "overrides": null,
                                "scope": 240,
                                "stateVariable": false,
                                "storageLocation": "default",
                                "type": "uint256",
                                "value": null,
                                "visibility": "internal"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "uint256",
                                    "type": "uint256"
                                  },
                                  "id": 214,
                                  "name": "ElementaryTypeName",
                                  "src": "3019:7:0"
                                }
                              ],
                              "id": 215,
                              "name": "VariableDeclaration",
                              "src": "3019:9:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 216,
                              "name": "Literal",
                              "src": "3031:1:0"
                            }
                          ],
                          "id": 217,
                          "name": "VariableDeclarationStatement",
                          "src": "3019:13:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "<",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 215,
                                "type": "uint256",
                                "value": "i"
                              },
                              "id": 218,
                              "name": "Identifier",
                              "src": "3034:1:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "length",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "bytes32[] storage ref"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 48,
                                        "type": "mapping(address => bytes32[] storage ref)",
                                        "value": "subscribedHashtags"
                                      },
                                      "id": 219,
                                      "name": "Identifier",
                                      "src": "3038:18:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address payable"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -15,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 220,
                                          "name": "Identifier",
                                          "src": "3057:3:0"
                                        }
                                      ],
                                      "id": 221,
                                      "name": "MemberAccess",
                                      "src": "3057:10:0"
                                    }
                                  ],
                                  "id": 222,
                                  "name": "IndexAccess",
                                  "src": "3038:30:0"
                                }
                              ],
                              "id": 223,
                              "name": "MemberAccess",
                              "src": "3038:37:0"
                            }
                          ],
                          "id": 224,
                          "name": "BinaryOperation",
                          "src": "3034:41:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "++",
                                "prefix": false,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 215,
                                    "type": "uint256",
                                    "value": "i"
                                  },
                                  "id": 225,
                                  "name": "Identifier",
                                  "src": "3076:1:0"
                                }
                              ],
                              "id": 226,
                              "name": "UnaryOperation",
                              "src": "3076:3:0"
                            }
                          ],
                          "id": 227,
                          "name": "ExpressionStatement",
                          "src": "3076:3:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "falseBody": null
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "==",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "bytes32"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "type": "bytes32[] storage ref"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 48,
                                                "type": "mapping(address => bytes32[] storage ref)",
                                                "value": "subscribedHashtags"
                                              },
                                              "id": 228,
                                              "name": "Identifier",
                                              "src": "3099:18:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "member_name": "sender",
                                                "referencedDeclaration": null,
                                                "type": "address payable"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": -15,
                                                    "type": "msg",
                                                    "value": "msg"
                                                  },
                                                  "id": 229,
                                                  "name": "Identifier",
                                                  "src": "3118:3:0"
                                                }
                                              ],
                                              "id": 230,
                                              "name": "MemberAccess",
                                              "src": "3118:10:0"
                                            }
                                          ],
                                          "id": 231,
                                          "name": "IndexAccess",
                                          "src": "3099:30:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 215,
                                            "type": "uint256",
                                            "value": "i"
                                          },
                                          "id": 232,
                                          "name": "Identifier",
                                          "src": "3130:1:0"
                                        }
                                      ],
                                      "id": 233,
                                      "name": "IndexAccess",
                                      "src": "3099:33:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 209,
                                        "type": "bytes32",
                                        "value": "_hashtag"
                                      },
                                      "id": 234,
                                      "name": "Identifier",
                                      "src": "3136:8:0"
                                    }
                                  ],
                                  "id": 235,
                                  "name": "BinaryOperation",
                                  "src": "3099:45:0"
                                },
                                {
                                  "attributes": {
                                    "functionReturnParameters": 213
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "74727565",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "bool",
                                        "type": "bool",
                                        "value": "true"
                                      },
                                      "id": 236,
                                      "name": "Literal",
                                      "src": "3171:4:0"
                                    }
                                  ],
                                  "id": 237,
                                  "name": "Return",
                                  "src": "3164:11:0"
                                }
                              ],
                              "id": 238,
                              "name": "IfStatement",
                              "src": "3096:79:0"
                            }
                          ],
                          "id": 239,
                          "name": "Block",
                          "src": "3081:106:0"
                        }
                      ],
                      "id": 240,
                      "name": "ForStatement",
                      "src": "3015:172:0"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 213
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "hexvalue": "66616c7365",
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "subdenomination": null,
                            "token": "bool",
                            "type": "bool",
                            "value": "false"
                          },
                          "id": 241,
                          "name": "Literal",
                          "src": "3204:5:0"
                        }
                      ],
                      "id": 242,
                      "name": "Return",
                      "src": "3197:12:0"
                    }
                  ],
                  "id": 243,
                  "name": "Block",
                  "src": "3004:213:0"
                }
              ],
              "id": 244,
              "name": "FunctionDefinition",
              "src": "2922:295:0"
            },
            {
              "attributes": {
                "functionSelector": "f90e46ab",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "addContent",
                "overrides": null,
                "scope": 726,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@param _content the string of content\n @param _ipfsurl the url of the ipfs content\n @param _hashtags the hashtags associated to the content"
                  },
                  "id": 245,
                  "name": "StructuredDocumentation",
                  "src": "3393:161:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_content",
                        "overrides": null,
                        "scope": 417,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 246,
                          "name": "ElementaryTypeName",
                          "src": "3580:6:0"
                        }
                      ],
                      "id": 247,
                      "name": "VariableDeclaration",
                      "src": "3580:22:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_ipfsurl",
                        "overrides": null,
                        "scope": 417,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 248,
                          "name": "ElementaryTypeName",
                          "src": "3604:6:0"
                        }
                      ],
                      "id": 249,
                      "name": "VariableDeclaration",
                      "src": "3604:22:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_hashtags",
                        "overrides": null,
                        "scope": 417,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "bytes32[]",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "length": null,
                            "type": "bytes32[]"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes32",
                                "type": "bytes32"
                              },
                              "id": 250,
                              "name": "ElementaryTypeName",
                              "src": "3628:7:0"
                            }
                          ],
                          "id": 251,
                          "name": "ArrayTypeName",
                          "src": "3628:9:0"
                        }
                      ],
                      "id": 252,
                      "name": "VariableDeclaration",
                      "src": "3628:35:0"
                    }
                  ],
                  "id": 253,
                  "name": "ParameterList",
                  "src": "3579:85:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 254,
                  "name": "ParameterList",
                  "src": "3672:0:0"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_da6d61bc4c25d4eed2c1eaa386415abc449e8f6223173c8f61cd0f69ed8aaa63",
                                    "typeString": "literal_string \"The content cannot be empty\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 255,
                              "name": "Identifier",
                              "src": "3689:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": ">",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "length",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "isStructConstructorCall": false,
                                        "lValueRequested": false,
                                        "names": [
                                          null
                                        ],
                                        "tryCall": false,
                                        "type": "bytes memory",
                                        "type_conversion": true
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                              }
                                            ],
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "type": "type(bytes storage pointer)"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "name": "bytes",
                                                "type": null
                                              },
                                              "id": 256,
                                              "name": "ElementaryTypeName",
                                              "src": "3697:5:0"
                                            }
                                          ],
                                          "id": 257,
                                          "name": "ElementaryTypeNameExpression",
                                          "src": "3697:5:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 247,
                                            "type": "string memory",
                                            "value": "_content"
                                          },
                                          "id": 258,
                                          "name": "Identifier",
                                          "src": "3703:8:0"
                                        }
                                      ],
                                      "id": 259,
                                      "name": "FunctionCall",
                                      "src": "3697:15:0"
                                    }
                                  ],
                                  "id": 260,
                                  "name": "MemberAccess",
                                  "src": "3697:22:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "30",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 0",
                                    "value": "0"
                                  },
                                  "id": 261,
                                  "name": "Literal",
                                  "src": "3722:1:0"
                                }
                              ],
                              "id": 262,
                              "name": "BinaryOperation",
                              "src": "3697:26:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "54686520636f6e74656e742063616e6e6f7420626520656d707479",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"The content cannot be empty\"",
                                "value": "The content cannot be empty"
                              },
                              "id": 263,
                              "name": "Literal",
                              "src": "3725:29:0"
                            }
                          ],
                          "id": 264,
                          "name": "FunctionCall",
                          "src": "3689:66:0"
                        }
                      ],
                      "id": 265,
                      "name": "ExpressionStatement",
                      "src": "3689:66:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          267
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "newContent",
                            "overrides": null,
                            "scope": 416,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "struct IpfsPublisher.Content",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "contractScope": null,
                                "name": "Content",
                                "referencedDeclaration": 18,
                                "type": "struct IpfsPublisher.Content"
                              },
                              "id": 266,
                              "name": "UserDefinedTypeName",
                              "src": "3766:7:0"
                            }
                          ],
                          "id": 267,
                          "name": "VariableDeclaration",
                          "src": "3766:25:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": true,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "struct IpfsPublisher.Content memory",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  },
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  },
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 18,
                                "type": "type(struct IpfsPublisher.Content storage pointer)",
                                "value": "Content"
                              },
                              "id": 268,
                              "name": "Identifier",
                              "src": "3794:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 83,
                                "type": "uint256",
                                "value": "latestContentId"
                              },
                              "id": 269,
                              "name": "Identifier",
                              "src": "3802:15:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 270,
                                  "name": "Identifier",
                                  "src": "3819:3:0"
                                }
                              ],
                              "id": 271,
                              "name": "MemberAccess",
                              "src": "3819:10:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "timestamp",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -4,
                                    "type": "block",
                                    "value": "block"
                                  },
                                  "id": 272,
                                  "name": "Identifier",
                                  "src": "3831:5:0"
                                }
                              ],
                              "id": 273,
                              "name": "MemberAccess",
                              "src": "3831:15:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 247,
                                "type": "string memory",
                                "value": "_content"
                              },
                              "id": 274,
                              "name": "Identifier",
                              "src": "3848:8:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 249,
                                "type": "string memory",
                                "value": "_ipfsurl"
                              },
                              "id": 275,
                              "name": "Identifier",
                              "src": "3858:8:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 276,
                              "name": "Literal",
                              "src": "3868:1:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 252,
                                "type": "bytes32[] memory",
                                "value": "_hashtags"
                              },
                              "id": 277,
                              "name": "Identifier",
                              "src": "3872:9:0"
                            }
                          ],
                          "id": 278,
                          "name": "FunctionCall",
                          "src": "3794:88:0"
                        }
                      ],
                      "id": 279,
                      "name": "VariableDeclarationStatement",
                      "src": "3766:116:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "==",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "length",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 252,
                                    "type": "bytes32[] memory",
                                    "value": "_hashtags"
                                  },
                                  "id": 280,
                                  "name": "Identifier",
                                  "src": "4044:9:0"
                                }
                              ],
                              "id": 281,
                              "name": "MemberAccess",
                              "src": "4044:16:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 282,
                              "name": "Literal",
                              "src": "4064:1:0"
                            }
                          ],
                          "id": 283,
                          "name": "BinaryOperation",
                          "src": "4044:21:0"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "tryCall": false,
                                    "type": "tuple()",
                                    "type_conversion": false
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "push",
                                        "referencedDeclaration": null,
                                        "type": "function (uint256)"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "type": "uint256[] storage ref"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 57,
                                                "type": "mapping(bytes32 => uint256[] storage ref)",
                                                "value": "contentIdsByHashtag"
                                              },
                                              "id": 284,
                                              "name": "Identifier",
                                              "src": "4082:19:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "hexvalue": "6d697363656c6c616e656f7573",
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "subdenomination": null,
                                                "token": "string",
                                                "type": "literal_string \"miscellaneous\"",
                                                "value": "miscellaneous"
                                              },
                                              "id": 285,
                                              "name": "Literal",
                                              "src": "4102:15:0"
                                            }
                                          ],
                                          "id": 286,
                                          "name": "IndexAccess",
                                          "src": "4082:36:0"
                                        }
                                      ],
                                      "id": 287,
                                      "name": "MemberAccess",
                                      "src": "4082:41:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 83,
                                        "type": "uint256",
                                        "value": "latestContentId"
                                      },
                                      "id": 288,
                                      "name": "Identifier",
                                      "src": "4124:15:0"
                                    }
                                  ],
                                  "id": 289,
                                  "name": "FunctionCall",
                                  "src": "4082:58:0"
                                }
                              ],
                              "id": 290,
                              "name": "ExpressionStatement",
                              "src": "4082:58:0"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "++",
                                    "prefix": false,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 52,
                                            "type": "mapping(bytes32 => uint256)",
                                            "value": "hashtagScore"
                                          },
                                          "id": 291,
                                          "name": "Identifier",
                                          "src": "4155:12:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "6d697363656c6c616e656f7573",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "string",
                                            "type": "literal_string \"miscellaneous\"",
                                            "value": "miscellaneous"
                                          },
                                          "id": 292,
                                          "name": "Literal",
                                          "src": "4168:15:0"
                                        }
                                      ],
                                      "id": 293,
                                      "name": "IndexAccess",
                                      "src": "4155:29:0"
                                    }
                                  ],
                                  "id": 294,
                                  "name": "UnaryOperation",
                                  "src": "4155:31:0"
                                }
                              ],
                              "id": 295,
                              "name": "ExpressionStatement",
                              "src": "4155:31:0"
                            },
                            {
                              "attributes": {
                                "falseBody": null
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "!",
                                    "prefix": true,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "bool"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 65,
                                            "type": "mapping(bytes32 => bool)",
                                            "value": "hashtagExist"
                                          },
                                          "id": 296,
                                          "name": "Identifier",
                                          "src": "4207:12:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "6d697363656c6c616e656f7573",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "string",
                                            "type": "literal_string \"miscellaneous\"",
                                            "value": "miscellaneous"
                                          },
                                          "id": 297,
                                          "name": "Literal",
                                          "src": "4220:15:0"
                                        }
                                      ],
                                      "id": 298,
                                      "name": "IndexAccess",
                                      "src": "4207:29:0"
                                    }
                                  ],
                                  "id": 299,
                                  "name": "UnaryOperation",
                                  "src": "4206:30:0"
                                },
                                {
                                  "children": [
                                    {
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "isStructConstructorCall": false,
                                            "lValueRequested": false,
                                            "names": [
                                              null
                                            ],
                                            "tryCall": false,
                                            "type": "tuple()",
                                            "type_conversion": false
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": [
                                                  {
                                                    "typeIdentifier": "t_stringliteral_cc6683e14c14120d70551a428777db70fc8d89499014507249272875b94ce895",
                                                    "typeString": "literal_string \"miscellaneous\""
                                                  }
                                                ],
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "member_name": "push",
                                                "referencedDeclaration": null,
                                                "type": "function (bytes32)"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": 81,
                                                    "type": "bytes32[] storage ref",
                                                    "value": "hashtags"
                                                  },
                                                  "id": 300,
                                                  "name": "Identifier",
                                                  "src": "4257:8:0"
                                                }
                                              ],
                                              "id": 302,
                                              "name": "MemberAccess",
                                              "src": "4257:13:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "hexvalue": "6d697363656c6c616e656f7573",
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "subdenomination": null,
                                                "token": "string",
                                                "type": "literal_string \"miscellaneous\"",
                                                "value": "miscellaneous"
                                              },
                                              "id": 303,
                                              "name": "Literal",
                                              "src": "4271:15:0"
                                            }
                                          ],
                                          "id": 304,
                                          "name": "FunctionCall",
                                          "src": "4257:30:0"
                                        }
                                      ],
                                      "id": 305,
                                      "name": "ExpressionStatement",
                                      "src": "4257:30:0"
                                    },
                                    {
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "operator": "=",
                                            "type": "bool"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "type": "bool"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": 65,
                                                    "type": "mapping(bytes32 => bool)",
                                                    "value": "hashtagExist"
                                                  },
                                                  "id": 306,
                                                  "name": "Identifier",
                                                  "src": "4306:12:0"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "hexvalue": "6d697363656c6c616e656f7573",
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "subdenomination": null,
                                                    "token": "string",
                                                    "type": "literal_string \"miscellaneous\"",
                                                    "value": "miscellaneous"
                                                  },
                                                  "id": 307,
                                                  "name": "Literal",
                                                  "src": "4319:15:0"
                                                }
                                              ],
                                              "id": 308,
                                              "name": "IndexAccess",
                                              "src": "4306:29:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "hexvalue": "74727565",
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "subdenomination": null,
                                                "token": "bool",
                                                "type": "bool",
                                                "value": "true"
                                              },
                                              "id": 309,
                                              "name": "Literal",
                                              "src": "4338:4:0"
                                            }
                                          ],
                                          "id": 310,
                                          "name": "Assignment",
                                          "src": "4306:36:0"
                                        }
                                      ],
                                      "id": 311,
                                      "name": "ExpressionStatement",
                                      "src": "4306:36:0"
                                    }
                                  ],
                                  "id": 312,
                                  "name": "Block",
                                  "src": "4238:120:0"
                                }
                              ],
                              "id": 313,
                              "name": "IfStatement",
                              "src": "4203:155:0"
                            }
                          ],
                          "id": 314,
                          "name": "Block",
                          "src": "4067:302:0"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "assignments": [
                                      316
                                    ]
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "constant": false,
                                        "mutability": "mutable",
                                        "name": "i",
                                        "overrides": null,
                                        "scope": 367,
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "type": "uint256",
                                        "value": null,
                                        "visibility": "internal"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "name": "uint256",
                                            "type": "uint256"
                                          },
                                          "id": 315,
                                          "name": "ElementaryTypeName",
                                          "src": "4394:7:0"
                                        }
                                      ],
                                      "id": 316,
                                      "name": "VariableDeclaration",
                                      "src": "4394:9:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "30",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "number",
                                        "type": "int_const 0",
                                        "value": "0"
                                      },
                                      "id": 317,
                                      "name": "Literal",
                                      "src": "4406:1:0"
                                    }
                                  ],
                                  "id": 318,
                                  "name": "VariableDeclarationStatement",
                                  "src": "4394:13:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "<",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 316,
                                        "type": "uint256",
                                        "value": "i"
                                      },
                                      "id": 319,
                                      "name": "Identifier",
                                      "src": "4409:1:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "length",
                                        "referencedDeclaration": null,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 252,
                                            "type": "bytes32[] memory",
                                            "value": "_hashtags"
                                          },
                                          "id": 320,
                                          "name": "Identifier",
                                          "src": "4413:9:0"
                                        }
                                      ],
                                      "id": 321,
                                      "name": "MemberAccess",
                                      "src": "4413:16:0"
                                    }
                                  ],
                                  "id": 322,
                                  "name": "BinaryOperation",
                                  "src": "4409:20:0"
                                },
                                {
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "operator": "++",
                                        "prefix": false,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 316,
                                            "type": "uint256",
                                            "value": "i"
                                          },
                                          "id": 323,
                                          "name": "Identifier",
                                          "src": "4431:1:0"
                                        }
                                      ],
                                      "id": 324,
                                      "name": "UnaryOperation",
                                      "src": "4431:3:0"
                                    }
                                  ],
                                  "id": 325,
                                  "name": "ExpressionStatement",
                                  "src": "4431:3:0"
                                },
                                {
                                  "children": [
                                    {
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "isStructConstructorCall": false,
                                            "lValueRequested": false,
                                            "names": [
                                              null
                                            ],
                                            "tryCall": false,
                                            "type": "tuple()",
                                            "type_conversion": false
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": [
                                                  {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                ],
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "member_name": "push",
                                                "referencedDeclaration": null,
                                                "type": "function (uint256)"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "uint256[] storage ref"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 57,
                                                        "type": "mapping(bytes32 => uint256[] storage ref)",
                                                        "value": "contentIdsByHashtag"
                                                      },
                                                      "id": 326,
                                                      "name": "Identifier",
                                                      "src": "4455:19:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "type": "bytes32"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 252,
                                                            "type": "bytes32[] memory",
                                                            "value": "_hashtags"
                                                          },
                                                          "id": 327,
                                                          "name": "Identifier",
                                                          "src": "4475:9:0"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 316,
                                                            "type": "uint256",
                                                            "value": "i"
                                                          },
                                                          "id": 328,
                                                          "name": "Identifier",
                                                          "src": "4485:1:0"
                                                        }
                                                      ],
                                                      "id": 329,
                                                      "name": "IndexAccess",
                                                      "src": "4475:12:0"
                                                    }
                                                  ],
                                                  "id": 330,
                                                  "name": "IndexAccess",
                                                  "src": "4455:33:0"
                                                }
                                              ],
                                              "id": 331,
                                              "name": "MemberAccess",
                                              "src": "4455:38:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 83,
                                                "type": "uint256",
                                                "value": "latestContentId"
                                              },
                                              "id": 332,
                                              "name": "Identifier",
                                              "src": "4494:15:0"
                                            }
                                          ],
                                          "id": 333,
                                          "name": "FunctionCall",
                                          "src": "4455:55:0"
                                        }
                                      ],
                                      "id": 334,
                                      "name": "ExpressionStatement",
                                      "src": "4455:55:0"
                                    },
                                    {
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "operator": "++",
                                            "prefix": false,
                                            "type": "uint256"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "type": "uint256"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": 52,
                                                    "type": "mapping(bytes32 => uint256)",
                                                    "value": "hashtagScore"
                                                  },
                                                  "id": 335,
                                                  "name": "Identifier",
                                                  "src": "4529:12:0"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "bytes32"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 252,
                                                        "type": "bytes32[] memory",
                                                        "value": "_hashtags"
                                                      },
                                                      "id": 336,
                                                      "name": "Identifier",
                                                      "src": "4542:9:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 316,
                                                        "type": "uint256",
                                                        "value": "i"
                                                      },
                                                      "id": 337,
                                                      "name": "Identifier",
                                                      "src": "4552:1:0"
                                                    }
                                                  ],
                                                  "id": 338,
                                                  "name": "IndexAccess",
                                                  "src": "4542:12:0"
                                                }
                                              ],
                                              "id": 339,
                                              "name": "IndexAccess",
                                              "src": "4529:26:0"
                                            }
                                          ],
                                          "id": 340,
                                          "name": "UnaryOperation",
                                          "src": "4529:28:0"
                                        }
                                      ],
                                      "id": 341,
                                      "name": "ExpressionStatement",
                                      "src": "4529:28:0"
                                    },
                                    {
                                      "attributes": {
                                        "falseBody": null
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "operator": "!",
                                            "prefix": true,
                                            "type": "bool"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "type": "bool"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": 65,
                                                    "type": "mapping(bytes32 => bool)",
                                                    "value": "hashtagExist"
                                                  },
                                                  "id": 342,
                                                  "name": "Identifier",
                                                  "src": "4580:12:0"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "bytes32"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 252,
                                                        "type": "bytes32[] memory",
                                                        "value": "_hashtags"
                                                      },
                                                      "id": 343,
                                                      "name": "Identifier",
                                                      "src": "4593:9:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 316,
                                                        "type": "uint256",
                                                        "value": "i"
                                                      },
                                                      "id": 344,
                                                      "name": "Identifier",
                                                      "src": "4603:1:0"
                                                    }
                                                  ],
                                                  "id": 345,
                                                  "name": "IndexAccess",
                                                  "src": "4593:12:0"
                                                }
                                              ],
                                              "id": 346,
                                              "name": "IndexAccess",
                                              "src": "4580:26:0"
                                            }
                                          ],
                                          "id": 347,
                                          "name": "UnaryOperation",
                                          "src": "4579:27:0"
                                        },
                                        {
                                          "children": [
                                            {
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                      null
                                                    ],
                                                    "tryCall": false,
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": [
                                                          {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                          }
                                                        ],
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "member_name": "push",
                                                        "referencedDeclaration": null,
                                                        "type": "function (bytes32)"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 81,
                                                            "type": "bytes32[] storage ref",
                                                            "value": "hashtags"
                                                          },
                                                          "id": 348,
                                                          "name": "Identifier",
                                                          "src": "4631:8:0"
                                                        }
                                                      ],
                                                      "id": 350,
                                                      "name": "MemberAccess",
                                                      "src": "4631:13:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "type": "bytes32"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 252,
                                                            "type": "bytes32[] memory",
                                                            "value": "_hashtags"
                                                          },
                                                          "id": 351,
                                                          "name": "Identifier",
                                                          "src": "4645:9:0"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 316,
                                                            "type": "uint256",
                                                            "value": "i"
                                                          },
                                                          "id": 352,
                                                          "name": "Identifier",
                                                          "src": "4655:1:0"
                                                        }
                                                      ],
                                                      "id": 353,
                                                      "name": "IndexAccess",
                                                      "src": "4645:12:0"
                                                    }
                                                  ],
                                                  "id": 354,
                                                  "name": "FunctionCall",
                                                  "src": "4631:27:0"
                                                }
                                              ],
                                              "id": 355,
                                              "name": "ExpressionStatement",
                                              "src": "4631:27:0"
                                            },
                                            {
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "bool"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "type": "bool"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 65,
                                                            "type": "mapping(bytes32 => bool)",
                                                            "value": "hashtagExist"
                                                          },
                                                          "id": 356,
                                                          "name": "Identifier",
                                                          "src": "4681:12:0"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "bytes32"
                                                          },
                                                          "children": [
                                                            {
                                                              "attributes": {
                                                                "argumentTypes": null,
                                                                "overloadedDeclarations": [
                                                                  null
                                                                ],
                                                                "referencedDeclaration": 252,
                                                                "type": "bytes32[] memory",
                                                                "value": "_hashtags"
                                                              },
                                                              "id": 357,
                                                              "name": "Identifier",
                                                              "src": "4694:9:0"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "argumentTypes": null,
                                                                "overloadedDeclarations": [
                                                                  null
                                                                ],
                                                                "referencedDeclaration": 316,
                                                                "type": "uint256",
                                                                "value": "i"
                                                              },
                                                              "id": 358,
                                                              "name": "Identifier",
                                                              "src": "4704:1:0"
                                                            }
                                                          ],
                                                          "id": 359,
                                                          "name": "IndexAccess",
                                                          "src": "4694:12:0"
                                                        }
                                                      ],
                                                      "id": 360,
                                                      "name": "IndexAccess",
                                                      "src": "4681:26:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "hexvalue": "74727565",
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "subdenomination": null,
                                                        "token": "bool",
                                                        "type": "bool",
                                                        "value": "true"
                                                      },
                                                      "id": 361,
                                                      "name": "Literal",
                                                      "src": "4710:4:0"
                                                    }
                                                  ],
                                                  "id": 362,
                                                  "name": "Assignment",
                                                  "src": "4681:33:0"
                                                }
                                              ],
                                              "id": 363,
                                              "name": "ExpressionStatement",
                                              "src": "4681:33:0"
                                            }
                                          ],
                                          "id": 364,
                                          "name": "Block",
                                          "src": "4608:126:0"
                                        }
                                      ],
                                      "id": 365,
                                      "name": "IfStatement",
                                      "src": "4576:158:0"
                                    }
                                  ],
                                  "id": 366,
                                  "name": "Block",
                                  "src": "4436:313:0"
                                }
                              ],
                              "id": 367,
                              "name": "ForStatement",
                              "src": "4390:359:0"
                            }
                          ],
                          "id": 368,
                          "name": "Block",
                          "src": "4375:385:0"
                        }
                      ],
                      "id": 369,
                      "name": "IfStatement",
                      "src": "4041:719:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bytes32[] storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 81,
                                "type": "bytes32[] storage ref",
                                "value": "hashtags"
                              },
                              "id": 370,
                              "name": "Identifier",
                              "src": "4772:8:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "arguments": [
                                  null
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "bytes32[] memory",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      null
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 206,
                                    "type": "function () view returns (bytes32[] memory)",
                                    "value": "sortHashtags"
                                  },
                                  "id": 371,
                                  "name": "Identifier",
                                  "src": "4783:12:0"
                                }
                              ],
                              "id": 372,
                              "name": "FunctionCall",
                              "src": "4783:14:0"
                            }
                          ],
                          "id": 373,
                          "name": "Assignment",
                          "src": "4772:25:0"
                        }
                      ],
                      "id": 374,
                      "name": "ExpressionStatement",
                      "src": "4772:25:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "struct IpfsPublisher.Content storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "struct IpfsPublisher.Content storage ref"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 61,
                                    "type": "mapping(uint256 => struct IpfsPublisher.Content storage ref)",
                                    "value": "contentById"
                                  },
                                  "id": 375,
                                  "name": "Identifier",
                                  "src": "4808:11:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 83,
                                    "type": "uint256",
                                    "value": "latestContentId"
                                  },
                                  "id": 376,
                                  "name": "Identifier",
                                  "src": "4820:15:0"
                                }
                              ],
                              "id": 377,
                              "name": "IndexAccess",
                              "src": "4808:28:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 267,
                                "type": "struct IpfsPublisher.Content memory",
                                "value": "newContent"
                              },
                              "id": 378,
                              "name": "Identifier",
                              "src": "4839:10:0"
                            }
                          ],
                          "id": 379,
                          "name": "Assignment",
                          "src": "4808:41:0"
                        }
                      ],
                      "id": 380,
                      "name": "ExpressionStatement",
                      "src": "4808:41:0"
                    },
                    {
                      "attributes": {
                        "falseBody": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "!",
                            "prefix": true,
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 69,
                                    "type": "mapping(address => bool)",
                                    "value": "userExist"
                                  },
                                  "id": 381,
                                  "name": "Identifier",
                                  "src": "4864:9:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 382,
                                      "name": "Identifier",
                                      "src": "4874:3:0"
                                    }
                                  ],
                                  "id": 383,
                                  "name": "MemberAccess",
                                  "src": "4874:10:0"
                                }
                              ],
                              "id": 384,
                              "name": "IndexAccess",
                              "src": "4864:21:0"
                            }
                          ],
                          "id": 385,
                          "name": "UnaryOperation",
                          "src": "4863:22:0"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "tryCall": false,
                                    "type": "tuple()",
                                    "type_conversion": false
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                          }
                                        ],
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "push",
                                        "referencedDeclaration": null,
                                        "type": "function (address)"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 78,
                                            "type": "address[] storage ref",
                                            "value": "users"
                                          },
                                          "id": 386,
                                          "name": "Identifier",
                                          "src": "4902:5:0"
                                        }
                                      ],
                                      "id": 388,
                                      "name": "MemberAccess",
                                      "src": "4902:10:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address payable"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -15,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 389,
                                          "name": "Identifier",
                                          "src": "4913:3:0"
                                        }
                                      ],
                                      "id": 390,
                                      "name": "MemberAccess",
                                      "src": "4913:10:0"
                                    }
                                  ],
                                  "id": 391,
                                  "name": "FunctionCall",
                                  "src": "4902:22:0"
                                }
                              ],
                              "id": 392,
                              "name": "ExpressionStatement",
                              "src": "4902:22:0"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "=",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "type": "bool"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 69,
                                            "type": "mapping(address => bool)",
                                            "value": "userExist"
                                          },
                                          "id": 393,
                                          "name": "Identifier",
                                          "src": "4939:9:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "member_name": "sender",
                                            "referencedDeclaration": null,
                                            "type": "address payable"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": -15,
                                                "type": "msg",
                                                "value": "msg"
                                              },
                                              "id": 394,
                                              "name": "Identifier",
                                              "src": "4949:3:0"
                                            }
                                          ],
                                          "id": 395,
                                          "name": "MemberAccess",
                                          "src": "4949:10:0"
                                        }
                                      ],
                                      "id": 396,
                                      "name": "IndexAccess",
                                      "src": "4939:21:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "74727565",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "bool",
                                        "type": "bool",
                                        "value": "true"
                                      },
                                      "id": 397,
                                      "name": "Literal",
                                      "src": "4963:4:0"
                                    }
                                  ],
                                  "id": 398,
                                  "name": "Assignment",
                                  "src": "4939:28:0"
                                }
                              ],
                              "id": 399,
                              "name": "ExpressionStatement",
                              "src": "4939:28:0"
                            }
                          ],
                          "id": 400,
                          "name": "Block",
                          "src": "4887:92:0"
                        }
                      ],
                      "id": 401,
                      "name": "IfStatement",
                      "src": "4860:119:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  },
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  },
                                  {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 43,
                                "type": "function (uint256,address,uint256,string memory,string memory,bytes32[] memory)",
                                "value": "ContentAdded"
                              },
                              "id": 402,
                              "name": "Identifier",
                              "src": "4996:12:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 83,
                                "type": "uint256",
                                "value": "latestContentId"
                              },
                              "id": 403,
                              "name": "Identifier",
                              "src": "5009:15:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 404,
                                  "name": "Identifier",
                                  "src": "5026:3:0"
                                }
                              ],
                              "id": 405,
                              "name": "MemberAccess",
                              "src": "5026:10:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "timestamp",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -4,
                                    "type": "block",
                                    "value": "block"
                                  },
                                  "id": 406,
                                  "name": "Identifier",
                                  "src": "5038:5:0"
                                }
                              ],
                              "id": 407,
                              "name": "MemberAccess",
                              "src": "5038:15:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 247,
                                "type": "string memory",
                                "value": "_content"
                              },
                              "id": 408,
                              "name": "Identifier",
                              "src": "5055:8:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 249,
                                "type": "string memory",
                                "value": "_ipfsurl"
                              },
                              "id": 409,
                              "name": "Identifier",
                              "src": "5065:8:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 252,
                                "type": "bytes32[] memory",
                                "value": "_hashtags"
                              },
                              "id": 410,
                              "name": "Identifier",
                              "src": "5075:9:0"
                            }
                          ],
                          "id": 411,
                          "name": "FunctionCall",
                          "src": "4996:89:0"
                        }
                      ],
                      "id": 412,
                      "name": "EmitStatement",
                      "src": "4991:94:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "++",
                            "prefix": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 83,
                                "type": "uint256",
                                "value": "latestContentId"
                              },
                              "id": 413,
                              "name": "Identifier",
                              "src": "5096:15:0"
                            }
                          ],
                          "id": 414,
                          "name": "UnaryOperation",
                          "src": "5096:17:0"
                        }
                      ],
                      "id": 415,
                      "name": "ExpressionStatement",
                      "src": "5096:17:0"
                    }
                  ],
                  "id": 416,
                  "name": "Block",
                  "src": "3672:1449:0"
                }
              ],
              "id": 417,
              "name": "FunctionDefinition",
              "src": "3560:1561:0"
            },
            {
              "attributes": {
                "functionSelector": "41428f9d",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "subscribeToHashtag",
                "overrides": null,
                "scope": 726,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@notice subscribe to a hashtag if the suscription  doesn't exists\n @param _hashtag hashtag name"
                  },
                  "id": 418,
                  "name": "StructuredDocumentation",
                  "src": "5139:107:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_hashtag",
                        "overrides": null,
                        "scope": 448,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bytes32",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes32",
                            "type": "bytes32"
                          },
                          "id": 419,
                          "name": "ElementaryTypeName",
                          "src": "5280:7:0"
                        }
                      ],
                      "id": 420,
                      "name": "VariableDeclaration",
                      "src": "5280:16:0"
                    }
                  ],
                  "id": 421,
                  "name": "ParameterList",
                  "src": "5279:18:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 422,
                  "name": "ParameterList",
                  "src": "5305:0:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "falseBody": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "!",
                            "prefix": true,
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "bool",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 244,
                                    "type": "function (bytes32) view returns (bool)",
                                    "value": "hasSubscription"
                                  },
                                  "id": 423,
                                  "name": "Identifier",
                                  "src": "5320:15:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 420,
                                    "type": "bytes32",
                                    "value": "_hashtag"
                                  },
                                  "id": 424,
                                  "name": "Identifier",
                                  "src": "5336:8:0"
                                }
                              ],
                              "id": 425,
                              "name": "FunctionCall",
                              "src": "5320:25:0"
                            }
                          ],
                          "id": 426,
                          "name": "UnaryOperation",
                          "src": "5319:26:0"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "tryCall": false,
                                    "type": "tuple()",
                                    "type_conversion": false
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        ],
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "push",
                                        "referencedDeclaration": null,
                                        "type": "function (bytes32)"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "type": "bytes32[] storage ref"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 48,
                                                "type": "mapping(address => bytes32[] storage ref)",
                                                "value": "subscribedHashtags"
                                              },
                                              "id": 427,
                                              "name": "Identifier",
                                              "src": "5362:18:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "member_name": "sender",
                                                "referencedDeclaration": null,
                                                "type": "address payable"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": -15,
                                                    "type": "msg",
                                                    "value": "msg"
                                                  },
                                                  "id": 428,
                                                  "name": "Identifier",
                                                  "src": "5381:3:0"
                                                }
                                              ],
                                              "id": 429,
                                              "name": "MemberAccess",
                                              "src": "5381:10:0"
                                            }
                                          ],
                                          "id": 430,
                                          "name": "IndexAccess",
                                          "src": "5362:30:0"
                                        }
                                      ],
                                      "id": 431,
                                      "name": "MemberAccess",
                                      "src": "5362:35:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 420,
                                        "type": "bytes32",
                                        "value": "_hashtag"
                                      },
                                      "id": 432,
                                      "name": "Identifier",
                                      "src": "5398:8:0"
                                    }
                                  ],
                                  "id": 433,
                                  "name": "FunctionCall",
                                  "src": "5362:45:0"
                                }
                              ],
                              "id": 434,
                              "name": "ExpressionStatement",
                              "src": "5362:45:0"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "++",
                                    "prefix": false,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 52,
                                            "type": "mapping(bytes32 => uint256)",
                                            "value": "hashtagScore"
                                          },
                                          "id": 435,
                                          "name": "Identifier",
                                          "src": "5422:12:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 420,
                                            "type": "bytes32",
                                            "value": "_hashtag"
                                          },
                                          "id": 436,
                                          "name": "Identifier",
                                          "src": "5435:8:0"
                                        }
                                      ],
                                      "id": 437,
                                      "name": "IndexAccess",
                                      "src": "5422:22:0"
                                    }
                                  ],
                                  "id": 438,
                                  "name": "UnaryOperation",
                                  "src": "5422:24:0"
                                }
                              ],
                              "id": 439,
                              "name": "ExpressionStatement",
                              "src": "5422:24:0"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "=",
                                    "type": "bytes32[] storage ref"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 81,
                                        "type": "bytes32[] storage ref",
                                        "value": "hashtags"
                                      },
                                      "id": 440,
                                      "name": "Identifier",
                                      "src": "5461:8:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          null
                                        ],
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "isStructConstructorCall": false,
                                        "lValueRequested": false,
                                        "names": [
                                          null
                                        ],
                                        "tryCall": false,
                                        "type": "bytes32[] memory",
                                        "type_conversion": false
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": [
                                              null
                                            ],
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 206,
                                            "type": "function () view returns (bytes32[] memory)",
                                            "value": "sortHashtags"
                                          },
                                          "id": 441,
                                          "name": "Identifier",
                                          "src": "5472:12:0"
                                        }
                                      ],
                                      "id": 442,
                                      "name": "FunctionCall",
                                      "src": "5472:14:0"
                                    }
                                  ],
                                  "id": 443,
                                  "name": "Assignment",
                                  "src": "5461:25:0"
                                }
                              ],
                              "id": 444,
                              "name": "ExpressionStatement",
                              "src": "5461:25:0"
                            }
                          ],
                          "id": 445,
                          "name": "Block",
                          "src": "5347:151:0"
                        }
                      ],
                      "id": 446,
                      "name": "IfStatement",
                      "src": "5316:182:0"
                    }
                  ],
                  "id": 447,
                  "name": "Block",
                  "src": "5305:200:0"
                }
              ],
              "id": 448,
              "name": "FunctionDefinition",
              "src": "5252:253:0"
            },
            {
              "attributes": {
                "functionSelector": "748ddeb0",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "unsubscribeToHashtag",
                "overrides": null,
                "scope": 726,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@notice unsubscribe to a hashtag if the suscription  does exists\n @param _hashtag hashtag name"
                  },
                  "id": 449,
                  "name": "StructuredDocumentation",
                  "src": "5529:106:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_hashtag",
                        "overrides": null,
                        "scope": 505,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bytes32",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes32",
                            "type": "bytes32"
                          },
                          "id": 450,
                          "name": "ElementaryTypeName",
                          "src": "5671:7:0"
                        }
                      ],
                      "id": 451,
                      "name": "VariableDeclaration",
                      "src": "5671:16:0"
                    }
                  ],
                  "id": 452,
                  "name": "ParameterList",
                  "src": "5670:18:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 453,
                  "name": "ParameterList",
                  "src": "5696:0:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "falseBody": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "bool",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 244,
                                "type": "function (bytes32) view returns (bool)",
                                "value": "hasSubscription"
                              },
                              "id": 454,
                              "name": "Identifier",
                              "src": "5710:15:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 451,
                                "type": "bytes32",
                                "value": "_hashtag"
                              },
                              "id": 455,
                              "name": "Identifier",
                              "src": "5726:8:0"
                            }
                          ],
                          "id": 456,
                          "name": "FunctionCall",
                          "src": "5710:25:0"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "assignments": [
                                      458
                                    ]
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "constant": false,
                                        "mutability": "mutable",
                                        "name": "i",
                                        "overrides": null,
                                        "scope": 501,
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "type": "uint256",
                                        "value": null,
                                        "visibility": "internal"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "name": "uint256",
                                            "type": "uint256"
                                          },
                                          "id": 457,
                                          "name": "ElementaryTypeName",
                                          "src": "5756:7:0"
                                        }
                                      ],
                                      "id": 458,
                                      "name": "VariableDeclaration",
                                      "src": "5756:9:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "30",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "number",
                                        "type": "int_const 0",
                                        "value": "0"
                                      },
                                      "id": 459,
                                      "name": "Literal",
                                      "src": "5768:1:0"
                                    }
                                  ],
                                  "id": 460,
                                  "name": "VariableDeclarationStatement",
                                  "src": "5756:13:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "<",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 458,
                                        "type": "uint256",
                                        "value": "i"
                                      },
                                      "id": 461,
                                      "name": "Identifier",
                                      "src": "5771:1:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "length",
                                        "referencedDeclaration": null,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "type": "bytes32[] storage ref"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 48,
                                                "type": "mapping(address => bytes32[] storage ref)",
                                                "value": "subscribedHashtags"
                                              },
                                              "id": 462,
                                              "name": "Identifier",
                                              "src": "5775:18:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "member_name": "sender",
                                                "referencedDeclaration": null,
                                                "type": "address payable"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": -15,
                                                    "type": "msg",
                                                    "value": "msg"
                                                  },
                                                  "id": 463,
                                                  "name": "Identifier",
                                                  "src": "5794:3:0"
                                                }
                                              ],
                                              "id": 464,
                                              "name": "MemberAccess",
                                              "src": "5794:10:0"
                                            }
                                          ],
                                          "id": 465,
                                          "name": "IndexAccess",
                                          "src": "5775:30:0"
                                        }
                                      ],
                                      "id": 466,
                                      "name": "MemberAccess",
                                      "src": "5775:37:0"
                                    }
                                  ],
                                  "id": 467,
                                  "name": "BinaryOperation",
                                  "src": "5771:41:0"
                                },
                                {
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "operator": "++",
                                        "prefix": false,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 458,
                                            "type": "uint256",
                                            "value": "i"
                                          },
                                          "id": 468,
                                          "name": "Identifier",
                                          "src": "5814:1:0"
                                        }
                                      ],
                                      "id": 469,
                                      "name": "UnaryOperation",
                                      "src": "5814:3:0"
                                    }
                                  ],
                                  "id": 470,
                                  "name": "ExpressionStatement",
                                  "src": "5814:3:0"
                                },
                                {
                                  "children": [
                                    {
                                      "attributes": {
                                        "falseBody": null
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "commonType": {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            },
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "operator": "==",
                                            "type": "bool"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "type": "bytes32"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "bytes32[] storage ref"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 48,
                                                        "type": "mapping(address => bytes32[] storage ref)",
                                                        "value": "subscribedHashtags"
                                                      },
                                                      "id": 471,
                                                      "name": "Identifier",
                                                      "src": "5854:18:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "member_name": "sender",
                                                        "referencedDeclaration": null,
                                                        "type": "address payable"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": -15,
                                                            "type": "msg",
                                                            "value": "msg"
                                                          },
                                                          "id": 472,
                                                          "name": "Identifier",
                                                          "src": "5873:3:0"
                                                        }
                                                      ],
                                                      "id": 473,
                                                      "name": "MemberAccess",
                                                      "src": "5873:10:0"
                                                    }
                                                  ],
                                                  "id": 474,
                                                  "name": "IndexAccess",
                                                  "src": "5854:30:0"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": 458,
                                                    "type": "uint256",
                                                    "value": "i"
                                                  },
                                                  "id": 475,
                                                  "name": "Identifier",
                                                  "src": "5885:1:0"
                                                }
                                              ],
                                              "id": 476,
                                              "name": "IndexAccess",
                                              "src": "5854:33:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 451,
                                                "type": "bytes32",
                                                "value": "_hashtag"
                                              },
                                              "id": 477,
                                              "name": "Identifier",
                                              "src": "5891:8:0"
                                            }
                                          ],
                                          "id": 478,
                                          "name": "BinaryOperation",
                                          "src": "5854:45:0"
                                        },
                                        {
                                          "children": [
                                            {
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "delete",
                                                    "prefix": true,
                                                    "type": "tuple()"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "type": "bytes32"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "bytes32[] storage ref"
                                                          },
                                                          "children": [
                                                            {
                                                              "attributes": {
                                                                "argumentTypes": null,
                                                                "overloadedDeclarations": [
                                                                  null
                                                                ],
                                                                "referencedDeclaration": 48,
                                                                "type": "mapping(address => bytes32[] storage ref)",
                                                                "value": "subscribedHashtags"
                                                              },
                                                              "id": 479,
                                                              "name": "Identifier",
                                                              "src": "5931:18:0"
                                                            },
                                                            {
                                                              "attributes": {
                                                                "argumentTypes": null,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "member_name": "sender",
                                                                "referencedDeclaration": null,
                                                                "type": "address payable"
                                                              },
                                                              "children": [
                                                                {
                                                                  "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                      null
                                                                    ],
                                                                    "referencedDeclaration": -15,
                                                                    "type": "msg",
                                                                    "value": "msg"
                                                                  },
                                                                  "id": 480,
                                                                  "name": "Identifier",
                                                                  "src": "5950:3:0"
                                                                }
                                                              ],
                                                              "id": 481,
                                                              "name": "MemberAccess",
                                                              "src": "5950:10:0"
                                                            }
                                                          ],
                                                          "id": 482,
                                                          "name": "IndexAccess",
                                                          "src": "5931:30:0"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 458,
                                                            "type": "uint256",
                                                            "value": "i"
                                                          },
                                                          "id": 483,
                                                          "name": "Identifier",
                                                          "src": "5962:1:0"
                                                        }
                                                      ],
                                                      "id": 484,
                                                      "name": "IndexAccess",
                                                      "src": "5931:33:0"
                                                    }
                                                  ],
                                                  "id": 485,
                                                  "name": "UnaryOperation",
                                                  "src": "5924:40:0"
                                                }
                                              ],
                                              "id": 486,
                                              "name": "ExpressionStatement",
                                              "src": "5924:40:0"
                                            },
                                            {
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "--",
                                                    "prefix": false,
                                                    "type": "uint256"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "type": "uint256"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 52,
                                                            "type": "mapping(bytes32 => uint256)",
                                                            "value": "hashtagScore"
                                                          },
                                                          "id": 487,
                                                          "name": "Identifier",
                                                          "src": "5987:12:0"
                                                        },
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 451,
                                                            "type": "bytes32",
                                                            "value": "_hashtag"
                                                          },
                                                          "id": 488,
                                                          "name": "Identifier",
                                                          "src": "6000:8:0"
                                                        }
                                                      ],
                                                      "id": 489,
                                                      "name": "IndexAccess",
                                                      "src": "5987:22:0"
                                                    }
                                                  ],
                                                  "id": 490,
                                                  "name": "UnaryOperation",
                                                  "src": "5987:24:0"
                                                }
                                              ],
                                              "id": 491,
                                              "name": "ExpressionStatement",
                                              "src": "5987:24:0"
                                            },
                                            {
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "bytes32[] storage ref"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 81,
                                                        "type": "bytes32[] storage ref",
                                                        "value": "hashtags"
                                                      },
                                                      "id": 492,
                                                      "name": "Identifier",
                                                      "src": "6034:8:0"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                          null
                                                        ],
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "isStructConstructorCall": false,
                                                        "lValueRequested": false,
                                                        "names": [
                                                          null
                                                        ],
                                                        "tryCall": false,
                                                        "type": "bytes32[] memory",
                                                        "type_conversion": false
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": [
                                                              null
                                                            ],
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": 206,
                                                            "type": "function () view returns (bytes32[] memory)",
                                                            "value": "sortHashtags"
                                                          },
                                                          "id": 493,
                                                          "name": "Identifier",
                                                          "src": "6045:12:0"
                                                        }
                                                      ],
                                                      "id": 494,
                                                      "name": "FunctionCall",
                                                      "src": "6045:14:0"
                                                    }
                                                  ],
                                                  "id": 495,
                                                  "name": "Assignment",
                                                  "src": "6034:25:0"
                                                }
                                              ],
                                              "id": 496,
                                              "name": "ExpressionStatement",
                                              "src": "6034:25:0"
                                            },
                                            {
                                              "id": 497,
                                              "name": "Break",
                                              "src": "6082:5:0"
                                            }
                                          ],
                                          "id": 498,
                                          "name": "Block",
                                          "src": "5901:206:0"
                                        }
                                      ],
                                      "id": 499,
                                      "name": "IfStatement",
                                      "src": "5851:256:0"
                                    }
                                  ],
                                  "id": 500,
                                  "name": "Block",
                                  "src": "5832:290:0"
                                }
                              ],
                              "id": 501,
                              "name": "ForStatement",
                              "src": "5752:370:0"
                            }
                          ],
                          "id": 502,
                          "name": "Block",
                          "src": "5737:396:0"
                        }
                      ],
                      "id": 503,
                      "name": "IfStatement",
                      "src": "5707:426:0"
                    }
                  ],
                  "id": 504,
                  "name": "Block",
                  "src": "5696:444:0"
                }
              ],
              "id": 505,
              "name": "FunctionDefinition",
              "src": "5641:499:0"
            },
            {
              "attributes": {
                "functionSelector": "ab2b0141",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "voteContent",
                "overrides": null,
                "scope": 726,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@notice vote content, each user is allowed to vote only once for each content\n @param _id contentId"
                  },
                  "id": 506,
                  "name": "StructuredDocumentation",
                  "src": "6164:111:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_id",
                        "overrides": null,
                        "scope": 538,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 507,
                          "name": "ElementaryTypeName",
                          "src": "6302:7:0"
                        }
                      ],
                      "id": 508,
                      "name": "VariableDeclaration",
                      "src": "6302:11:0"
                    }
                  ],
                  "id": 509,
                  "name": "ParameterList",
                  "src": "6301:13:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 510,
                  "name": "ParameterList",
                  "src": "6322:0:0"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_92b907e28f3bae36cdb7c9b92a2f5a49ef5ecfda5cda185963183d81de5b58ff",
                                    "typeString": "literal_string \"Only one vote is allowed for each content!\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 511,
                              "name": "Identifier",
                              "src": "6343:7:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "!",
                                "prefix": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "mapping(uint256 => bool)"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 75,
                                            "type": "mapping(address => mapping(uint256 => bool))",
                                            "value": "userVoted"
                                          },
                                          "id": 512,
                                          "name": "Identifier",
                                          "src": "6352:9:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "member_name": "sender",
                                            "referencedDeclaration": null,
                                            "type": "address payable"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": -15,
                                                "type": "msg",
                                                "value": "msg"
                                              },
                                              "id": 513,
                                              "name": "Identifier",
                                              "src": "6362:3:0"
                                            }
                                          ],
                                          "id": 514,
                                          "name": "MemberAccess",
                                          "src": "6362:10:0"
                                        }
                                      ],
                                      "id": 515,
                                      "name": "IndexAccess",
                                      "src": "6352:21:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 508,
                                        "type": "uint256",
                                        "value": "_id"
                                      },
                                      "id": 516,
                                      "name": "Identifier",
                                      "src": "6374:3:0"
                                    }
                                  ],
                                  "id": 517,
                                  "name": "IndexAccess",
                                  "src": "6352:26:0"
                                }
                              ],
                              "id": 518,
                              "name": "UnaryOperation",
                              "src": "6351:27:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "4f6e6c79206f6e6520766f746520697320616c6c6f77656420666f72206561636820636f6e74656e7421",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"Only one vote is allowed for each content!\"",
                                "value": "Only one vote is allowed for each content!"
                              },
                              "id": 519,
                              "name": "Literal",
                              "src": "6380:44:0"
                            }
                          ],
                          "id": 520,
                          "name": "FunctionCall",
                          "src": "6343:82:0"
                        }
                      ],
                      "id": 521,
                      "name": "ExpressionStatement",
                      "src": "6343:82:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "mapping(uint256 => bool)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 75,
                                        "type": "mapping(address => mapping(uint256 => bool))",
                                        "value": "userVoted"
                                      },
                                      "id": 522,
                                      "name": "Identifier",
                                      "src": "6446:9:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address payable"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -15,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 523,
                                          "name": "Identifier",
                                          "src": "6456:3:0"
                                        }
                                      ],
                                      "id": 524,
                                      "name": "MemberAccess",
                                      "src": "6456:10:0"
                                    }
                                  ],
                                  "id": 526,
                                  "name": "IndexAccess",
                                  "src": "6446:21:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 508,
                                    "type": "uint256",
                                    "value": "_id"
                                  },
                                  "id": 525,
                                  "name": "Identifier",
                                  "src": "6468:3:0"
                                }
                              ],
                              "id": 527,
                              "name": "IndexAccess",
                              "src": "6446:26:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "74727565",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "bool",
                                "type": "bool",
                                "value": "true"
                              },
                              "id": 528,
                              "name": "Literal",
                              "src": "6475:4:0"
                            }
                          ],
                          "id": 529,
                          "name": "Assignment",
                          "src": "6446:33:0"
                        }
                      ],
                      "id": 530,
                      "name": "ExpressionStatement",
                      "src": "6446:33:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "++",
                            "prefix": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "member_name": "votes",
                                "referencedDeclaration": 14,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "struct IpfsPublisher.Content storage ref"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 61,
                                        "type": "mapping(uint256 => struct IpfsPublisher.Content storage ref)",
                                        "value": "contentById"
                                      },
                                      "id": 531,
                                      "name": "Identifier",
                                      "src": "6490:11:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 508,
                                        "type": "uint256",
                                        "value": "_id"
                                      },
                                      "id": 532,
                                      "name": "Identifier",
                                      "src": "6502:3:0"
                                    }
                                  ],
                                  "id": 533,
                                  "name": "IndexAccess",
                                  "src": "6490:16:0"
                                }
                              ],
                              "id": 534,
                              "name": "MemberAccess",
                              "src": "6490:22:0"
                            }
                          ],
                          "id": 535,
                          "name": "UnaryOperation",
                          "src": "6490:24:0"
                        }
                      ],
                      "id": 536,
                      "name": "ExpressionStatement",
                      "src": "6490:24:0"
                    }
                  ],
                  "id": 537,
                  "name": "Block",
                  "src": "6322:210:0"
                }
              ],
              "id": 538,
              "name": "FunctionDefinition",
              "src": "6281:251:0"
            },
            {
              "attributes": {
                "functionSelector": "3c9a1a6e",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getTopHashtags",
                "overrides": null,
                "scope": 726,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@notice get the top hashtags\n @param _amount How many top hashtags to get in order, for instance the top 20 hashtags\n @return bytes32[] Returns the names of the hashtags"
                  },
                  "id": 539,
                  "name": "StructuredDocumentation",
                  "src": "6552:189:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_amount",
                        "overrides": null,
                        "scope": 601,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 540,
                          "name": "ElementaryTypeName",
                          "src": "6771:7:0"
                        }
                      ],
                      "id": 541,
                      "name": "VariableDeclaration",
                      "src": "6771:15:0"
                    }
                  ],
                  "id": 542,
                  "name": "ParameterList",
                  "src": "6770:17:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 601,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "bytes32[]",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "length": null,
                            "type": "bytes32[]"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes32",
                                "type": "bytes32"
                              },
                              "id": 543,
                              "name": "ElementaryTypeName",
                              "src": "6808:7:0"
                            }
                          ],
                          "id": 544,
                          "name": "ArrayTypeName",
                          "src": "6808:9:0"
                        }
                      ],
                      "id": 545,
                      "name": "VariableDeclaration",
                      "src": "6808:16:0"
                    }
                  ],
                  "id": 546,
                  "name": "ParameterList",
                  "src": "6807:18:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          551
                        ],
                        "initialValue": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "result",
                            "overrides": null,
                            "scope": 600,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "bytes32[]",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "length": null,
                                "type": "bytes32[]"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "bytes32",
                                    "type": "bytes32"
                                  },
                                  "id": 549,
                                  "name": "ElementaryTypeName",
                                  "src": "6837:7:0"
                                }
                              ],
                              "id": 550,
                              "name": "ArrayTypeName",
                              "src": "6837:9:0"
                            }
                          ],
                          "id": 551,
                          "name": "VariableDeclaration",
                          "src": "6837:23:0"
                        }
                      ],
                      "id": 552,
                      "name": "VariableDeclarationStatement",
                      "src": "6837:23:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          554
                        ],
                        "initialValue": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "amount",
                            "overrides": null,
                            "scope": 600,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint256",
                                "type": "uint256"
                              },
                              "id": 553,
                              "name": "ElementaryTypeName",
                              "src": "6881:7:0"
                            }
                          ],
                          "id": 554,
                          "name": "VariableDeclaration",
                          "src": "6881:14:0"
                        }
                      ],
                      "id": 555,
                      "name": "VariableDeclarationStatement",
                      "src": "6881:14:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "<",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "length",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 81,
                                    "type": "bytes32[] storage ref",
                                    "value": "hashtags"
                                  },
                                  "id": 556,
                                  "name": "Identifier",
                                  "src": "6920:8:0"
                                }
                              ],
                              "id": 557,
                              "name": "MemberAccess",
                              "src": "6920:15:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 541,
                                "type": "uint256",
                                "value": "_amount"
                              },
                              "id": 558,
                              "name": "Identifier",
                              "src": "6938:7:0"
                            }
                          ],
                          "id": 559,
                          "name": "BinaryOperation",
                          "src": "6920:25:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 554,
                                    "type": "uint256",
                                    "value": "amount"
                                  },
                                  "id": 560,
                                  "name": "Identifier",
                                  "src": "6961:6:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "length",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 81,
                                        "type": "bytes32[] storage ref",
                                        "value": "hashtags"
                                      },
                                      "id": 561,
                                      "name": "Identifier",
                                      "src": "6970:8:0"
                                    }
                                  ],
                                  "id": 562,
                                  "name": "MemberAccess",
                                  "src": "6970:15:0"
                                }
                              ],
                              "id": 563,
                              "name": "Assignment",
                              "src": "6961:24:0"
                            }
                          ],
                          "id": 564,
                          "name": "ExpressionStatement",
                          "src": "6961:24:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 554,
                                    "type": "uint256",
                                    "value": "amount"
                                  },
                                  "id": 565,
                                  "name": "Identifier",
                                  "src": "7014:6:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 541,
                                    "type": "uint256",
                                    "value": "_amount"
                                  },
                                  "id": 566,
                                  "name": "Identifier",
                                  "src": "7023:7:0"
                                }
                              ],
                              "id": 567,
                              "name": "Assignment",
                              "src": "7014:16:0"
                            }
                          ],
                          "id": 568,
                          "name": "ExpressionStatement",
                          "src": "7014:16:0"
                        }
                      ],
                      "id": 569,
                      "name": "IfStatement",
                      "src": "6916:114:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bytes32[] memory"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 551,
                                "type": "bytes32[] memory",
                                "value": "result"
                              },
                              "id": 570,
                              "name": "Identifier",
                              "src": "7061:6:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "bytes32[] memory",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "type": "function (uint256) pure returns (bytes32[] memory)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "length": null,
                                        "type": "bytes32[]"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "name": "bytes32",
                                            "type": "bytes32"
                                          },
                                          "id": 571,
                                          "name": "ElementaryTypeName",
                                          "src": "7074:7:0"
                                        }
                                      ],
                                      "id": 572,
                                      "name": "ArrayTypeName",
                                      "src": "7074:9:0"
                                    }
                                  ],
                                  "id": 573,
                                  "name": "NewExpression",
                                  "src": "7070:13:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 554,
                                    "type": "uint256",
                                    "value": "amount"
                                  },
                                  "id": 574,
                                  "name": "Identifier",
                                  "src": "7084:6:0"
                                }
                              ],
                              "id": 575,
                              "name": "FunctionCall",
                              "src": "7070:21:0"
                            }
                          ],
                          "id": 576,
                          "name": "Assignment",
                          "src": "7061:30:0"
                        }
                      ],
                      "id": 577,
                      "name": "ExpressionStatement",
                      "src": "7061:30:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "assignments": [
                              579
                            ]
                          },
                          "children": [
                            {
                              "attributes": {
                                "constant": false,
                                "mutability": "mutable",
                                "name": "i",
                                "overrides": null,
                                "scope": 597,
                                "stateVariable": false,
                                "storageLocation": "default",
                                "type": "uint256",
                                "value": null,
                                "visibility": "internal"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "uint256",
                                    "type": "uint256"
                                  },
                                  "id": 578,
                                  "name": "ElementaryTypeName",
                                  "src": "7106:7:0"
                                }
                              ],
                              "id": 579,
                              "name": "VariableDeclaration",
                              "src": "7106:9:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 580,
                              "name": "Literal",
                              "src": "7118:1:0"
                            }
                          ],
                          "id": 581,
                          "name": "VariableDeclarationStatement",
                          "src": "7106:13:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "<",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 579,
                                "type": "uint256",
                                "value": "i"
                              },
                              "id": 582,
                              "name": "Identifier",
                              "src": "7121:1:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 554,
                                "type": "uint256",
                                "value": "amount"
                              },
                              "id": 583,
                              "name": "Identifier",
                              "src": "7125:6:0"
                            }
                          ],
                          "id": 584,
                          "name": "BinaryOperation",
                          "src": "7121:10:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "++",
                                "prefix": false,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 579,
                                    "type": "uint256",
                                    "value": "i"
                                  },
                                  "id": 585,
                                  "name": "Identifier",
                                  "src": "7133:1:0"
                                }
                              ],
                              "id": 586,
                              "name": "UnaryOperation",
                              "src": "7133:3:0"
                            }
                          ],
                          "id": 587,
                          "name": "ExpressionStatement",
                          "src": "7133:3:0"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "=",
                                    "type": "bytes32"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "type": "bytes32"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 551,
                                            "type": "bytes32[] memory",
                                            "value": "result"
                                          },
                                          "id": 588,
                                          "name": "Identifier",
                                          "src": "7153:6:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 579,
                                            "type": "uint256",
                                            "value": "i"
                                          },
                                          "id": 589,
                                          "name": "Identifier",
                                          "src": "7160:1:0"
                                        }
                                      ],
                                      "id": 590,
                                      "name": "IndexAccess",
                                      "src": "7153:9:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "bytes32"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 81,
                                            "type": "bytes32[] storage ref",
                                            "value": "hashtags"
                                          },
                                          "id": 591,
                                          "name": "Identifier",
                                          "src": "7165:8:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 579,
                                            "type": "uint256",
                                            "value": "i"
                                          },
                                          "id": 592,
                                          "name": "Identifier",
                                          "src": "7174:1:0"
                                        }
                                      ],
                                      "id": 593,
                                      "name": "IndexAccess",
                                      "src": "7165:11:0"
                                    }
                                  ],
                                  "id": 594,
                                  "name": "Assignment",
                                  "src": "7153:23:0"
                                }
                              ],
                              "id": 595,
                              "name": "ExpressionStatement",
                              "src": "7153:23:0"
                            }
                          ],
                          "id": 596,
                          "name": "Block",
                          "src": "7138:50:0"
                        }
                      ],
                      "id": 597,
                      "name": "ForStatement",
                      "src": "7102:86:0"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 546
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 551,
                            "type": "bytes32[] memory",
                            "value": "result"
                          },
                          "id": 598,
                          "name": "Identifier",
                          "src": "7215:6:0"
                        }
                      ],
                      "id": 599,
                      "name": "Return",
                      "src": "7208:13:0"
                    }
                  ],
                  "id": 600,
                  "name": "Block",
                  "src": "6826:403:0"
                }
              ],
              "id": 601,
              "name": "FunctionDefinition",
              "src": "6747:482:0"
            },
            {
              "attributes": {
                "functionSelector": "c389ef5e",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getFollowedHashtags",
                "overrides": null,
                "scope": 726,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@notice get the followed hashtag names for this msg.sender\n @return bytes32[] The hashtags followed by this user"
                  },
                  "id": 602,
                  "name": "StructuredDocumentation",
                  "src": "7255:124:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 603,
                  "name": "ParameterList",
                  "src": "7413:2:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 614,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "bytes32[]",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "length": null,
                            "type": "bytes32[]"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes32",
                                "type": "bytes32"
                              },
                              "id": 604,
                              "name": "ElementaryTypeName",
                              "src": "7436:7:0"
                            }
                          ],
                          "id": 605,
                          "name": "ArrayTypeName",
                          "src": "7436:9:0"
                        }
                      ],
                      "id": 606,
                      "name": "VariableDeclaration",
                      "src": "7436:16:0"
                    }
                  ],
                  "id": 607,
                  "name": "ParameterList",
                  "src": "7435:18:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 607
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "bytes32[] storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 48,
                                "type": "mapping(address => bytes32[] storage ref)",
                                "value": "subscribedHashtags"
                              },
                              "id": 608,
                              "name": "Identifier",
                              "src": "7472:18:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 609,
                                  "name": "Identifier",
                                  "src": "7491:3:0"
                                }
                              ],
                              "id": 610,
                              "name": "MemberAccess",
                              "src": "7491:10:0"
                            }
                          ],
                          "id": 611,
                          "name": "IndexAccess",
                          "src": "7472:30:0"
                        }
                      ],
                      "id": 612,
                      "name": "Return",
                      "src": "7465:37:0"
                    }
                  ],
                  "id": 613,
                  "name": "Block",
                  "src": "7454:56:0"
                }
              ],
              "id": 614,
              "name": "FunctionDefinition",
              "src": "7385:125:0"
            },
            {
              "attributes": {
                "functionSelector": "938430d5",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getContentIdsByHashtag",
                "overrides": null,
                "scope": 726,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@notice get the contents ids for a particular hashtag. \n we can't return arrays of structs.\n @param _hashtag hashtag from which get content\n @param _amount number of posts to be returned\n @return uint256[] the ids of the contents, new request needed for texts and ipfsurls of the posts"
                  },
                  "id": 615,
                  "name": "StructuredDocumentation",
                  "src": "7534:323:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_hashtag",
                        "overrides": null,
                        "scope": 685,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bytes32",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bytes32",
                            "type": "bytes32"
                          },
                          "id": 616,
                          "name": "ElementaryTypeName",
                          "src": "7895:7:0"
                        }
                      ],
                      "id": 617,
                      "name": "VariableDeclaration",
                      "src": "7895:16:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_amount",
                        "overrides": null,
                        "scope": 685,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 618,
                          "name": "ElementaryTypeName",
                          "src": "7913:7:0"
                        }
                      ],
                      "id": 619,
                      "name": "VariableDeclaration",
                      "src": "7913:15:0"
                    }
                  ],
                  "id": 620,
                  "name": "ParameterList",
                  "src": "7894:35:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 685,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "uint256[]",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "length": null,
                            "type": "uint256[]"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint256",
                                "type": "uint256"
                              },
                              "id": 621,
                              "name": "ElementaryTypeName",
                              "src": "7950:7:0"
                            }
                          ],
                          "id": 622,
                          "name": "ArrayTypeName",
                          "src": "7950:9:0"
                        }
                      ],
                      "id": 623,
                      "name": "VariableDeclaration",
                      "src": "7950:16:0"
                    }
                  ],
                  "id": 624,
                  "name": "ParameterList",
                  "src": "7949:18:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          629
                        ],
                        "initialValue": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "ids",
                            "overrides": null,
                            "scope": 684,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "uint256[]",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "length": null,
                                "type": "uint256[]"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "uint256",
                                    "type": "uint256"
                                  },
                                  "id": 627,
                                  "name": "ElementaryTypeName",
                                  "src": "7979:7:0"
                                }
                              ],
                              "id": 628,
                              "name": "ArrayTypeName",
                              "src": "7979:9:0"
                            }
                          ],
                          "id": 629,
                          "name": "VariableDeclaration",
                          "src": "7979:20:0"
                        }
                      ],
                      "id": 630,
                      "name": "VariableDeclarationStatement",
                      "src": "7979:20:0"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          632
                        ],
                        "initialValue": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "amount",
                            "overrides": null,
                            "scope": 684,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint256",
                                "type": "uint256"
                              },
                              "id": 631,
                              "name": "ElementaryTypeName",
                              "src": "8018:7:0"
                            }
                          ],
                          "id": 632,
                          "name": "VariableDeclaration",
                          "src": "8018:14:0"
                        }
                      ],
                      "id": 633,
                      "name": "VariableDeclarationStatement",
                      "src": "8018:14:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "<",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "length",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "uint256[] storage ref"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 57,
                                        "type": "mapping(bytes32 => uint256[] storage ref)",
                                        "value": "contentIdsByHashtag"
                                      },
                                      "id": 634,
                                      "name": "Identifier",
                                      "src": "8159:19:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 617,
                                        "type": "bytes32",
                                        "value": "_hashtag"
                                      },
                                      "id": 635,
                                      "name": "Identifier",
                                      "src": "8179:8:0"
                                    }
                                  ],
                                  "id": 636,
                                  "name": "IndexAccess",
                                  "src": "8159:29:0"
                                }
                              ],
                              "id": 637,
                              "name": "MemberAccess",
                              "src": "8159:36:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 619,
                                "type": "uint256",
                                "value": "_amount"
                              },
                              "id": 638,
                              "name": "Identifier",
                              "src": "8198:7:0"
                            }
                          ],
                          "id": 639,
                          "name": "BinaryOperation",
                          "src": "8159:46:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 632,
                                    "type": "uint256",
                                    "value": "amount"
                                  },
                                  "id": 640,
                                  "name": "Identifier",
                                  "src": "8221:6:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "length",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "uint256[] storage ref"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 57,
                                            "type": "mapping(bytes32 => uint256[] storage ref)",
                                            "value": "contentIdsByHashtag"
                                          },
                                          "id": 641,
                                          "name": "Identifier",
                                          "src": "8230:19:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 617,
                                            "type": "bytes32",
                                            "value": "_hashtag"
                                          },
                                          "id": 642,
                                          "name": "Identifier",
                                          "src": "8250:8:0"
                                        }
                                      ],
                                      "id": 643,
                                      "name": "IndexAccess",
                                      "src": "8230:29:0"
                                    }
                                  ],
                                  "id": 644,
                                  "name": "MemberAccess",
                                  "src": "8230:36:0"
                                }
                              ],
                              "id": 645,
                              "name": "Assignment",
                              "src": "8221:45:0"
                            }
                          ],
                          "id": 646,
                          "name": "ExpressionStatement",
                          "src": "8221:45:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 632,
                                    "type": "uint256",
                                    "value": "amount"
                                  },
                                  "id": 647,
                                  "name": "Identifier",
                                  "src": "8295:6:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 619,
                                    "type": "uint256",
                                    "value": "_amount"
                                  },
                                  "id": 648,
                                  "name": "Identifier",
                                  "src": "8304:7:0"
                                }
                              ],
                              "id": 649,
                              "name": "Assignment",
                              "src": "8295:16:0"
                            }
                          ],
                          "id": 650,
                          "name": "ExpressionStatement",
                          "src": "8295:16:0"
                        }
                      ],
                      "id": 651,
                      "name": "IfStatement",
                      "src": "8155:156:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256[] memory"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 629,
                                "type": "uint256[] memory",
                                "value": "ids"
                              },
                              "id": 652,
                              "name": "Identifier",
                              "src": "8342:3:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "uint256[] memory",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "type": "function (uint256) pure returns (uint256[] memory)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "length": null,
                                        "type": "uint256[]"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "name": "uint256",
                                            "type": "uint256"
                                          },
                                          "id": 653,
                                          "name": "ElementaryTypeName",
                                          "src": "8352:7:0"
                                        }
                                      ],
                                      "id": 654,
                                      "name": "ArrayTypeName",
                                      "src": "8352:9:0"
                                    }
                                  ],
                                  "id": 655,
                                  "name": "NewExpression",
                                  "src": "8348:13:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 632,
                                    "type": "uint256",
                                    "value": "amount"
                                  },
                                  "id": 656,
                                  "name": "Identifier",
                                  "src": "8362:6:0"
                                }
                              ],
                              "id": 657,
                              "name": "FunctionCall",
                              "src": "8348:21:0"
                            }
                          ],
                          "id": 658,
                          "name": "Assignment",
                          "src": "8342:27:0"
                        }
                      ],
                      "id": 659,
                      "name": "ExpressionStatement",
                      "src": "8342:27:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "assignments": [
                              661
                            ]
                          },
                          "children": [
                            {
                              "attributes": {
                                "constant": false,
                                "mutability": "mutable",
                                "name": "i",
                                "overrides": null,
                                "scope": 681,
                                "stateVariable": false,
                                "storageLocation": "default",
                                "type": "uint256",
                                "value": null,
                                "visibility": "internal"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "uint256",
                                    "type": "uint256"
                                  },
                                  "id": 660,
                                  "name": "ElementaryTypeName",
                                  "src": "8384:7:0"
                                }
                              ],
                              "id": 661,
                              "name": "VariableDeclaration",
                              "src": "8384:9:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 662,
                              "name": "Literal",
                              "src": "8396:1:0"
                            }
                          ],
                          "id": 663,
                          "name": "VariableDeclarationStatement",
                          "src": "8384:13:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "<",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 661,
                                "type": "uint256",
                                "value": "i"
                              },
                              "id": 664,
                              "name": "Identifier",
                              "src": "8399:1:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 632,
                                "type": "uint256",
                                "value": "amount"
                              },
                              "id": 665,
                              "name": "Identifier",
                              "src": "8403:6:0"
                            }
                          ],
                          "id": 666,
                          "name": "BinaryOperation",
                          "src": "8399:10:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "++",
                                "prefix": false,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 661,
                                    "type": "uint256",
                                    "value": "i"
                                  },
                                  "id": 667,
                                  "name": "Identifier",
                                  "src": "8411:1:0"
                                }
                              ],
                              "id": 668,
                              "name": "UnaryOperation",
                              "src": "8411:3:0"
                            }
                          ],
                          "id": 669,
                          "name": "ExpressionStatement",
                          "src": "8411:3:0"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "=",
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 629,
                                            "type": "uint256[] memory",
                                            "value": "ids"
                                          },
                                          "id": 670,
                                          "name": "Identifier",
                                          "src": "8431:3:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 661,
                                            "type": "uint256",
                                            "value": "i"
                                          },
                                          "id": 671,
                                          "name": "Identifier",
                                          "src": "8435:1:0"
                                        }
                                      ],
                                      "id": 672,
                                      "name": "IndexAccess",
                                      "src": "8431:6:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "type": "uint256[] storage ref"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 57,
                                                "type": "mapping(bytes32 => uint256[] storage ref)",
                                                "value": "contentIdsByHashtag"
                                              },
                                              "id": 673,
                                              "name": "Identifier",
                                              "src": "8440:19:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 617,
                                                "type": "bytes32",
                                                "value": "_hashtag"
                                              },
                                              "id": 674,
                                              "name": "Identifier",
                                              "src": "8460:8:0"
                                            }
                                          ],
                                          "id": 675,
                                          "name": "IndexAccess",
                                          "src": "8440:29:0"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 661,
                                            "type": "uint256",
                                            "value": "i"
                                          },
                                          "id": 676,
                                          "name": "Identifier",
                                          "src": "8470:1:0"
                                        }
                                      ],
                                      "id": 677,
                                      "name": "IndexAccess",
                                      "src": "8440:32:0"
                                    }
                                  ],
                                  "id": 678,
                                  "name": "Assignment",
                                  "src": "8431:41:0"
                                }
                              ],
                              "id": 679,
                              "name": "ExpressionStatement",
                              "src": "8431:41:0"
                            }
                          ],
                          "id": 680,
                          "name": "Block",
                          "src": "8416:68:0"
                        }
                      ],
                      "id": 681,
                      "name": "ForStatement",
                      "src": "8380:104:0"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 624
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 629,
                            "type": "uint256[] memory",
                            "value": "ids"
                          },
                          "id": 682,
                          "name": "Identifier",
                          "src": "8501:3:0"
                        }
                      ],
                      "id": 683,
                      "name": "Return",
                      "src": "8494:10:0"
                    }
                  ],
                  "id": 684,
                  "name": "Block",
                  "src": "7968:544:0"
                }
              ],
              "id": 685,
              "name": "FunctionDefinition",
              "src": "7863:649:0"
            },
            {
              "attributes": {
                "functionSelector": "12b468b2",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getContentById",
                "overrides": null,
                "scope": 726,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@notice returns the data for a particular content id\n @param _id The id of the content\n @return Returns the id, author, date, content, ipfsurl and hashtags for that piece of content"
                  },
                  "id": 686,
                  "name": "StructuredDocumentation",
                  "src": "8524:201:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_id",
                        "overrides": null,
                        "scope": 725,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 687,
                          "name": "ElementaryTypeName",
                          "src": "8755:7:0"
                        }
                      ],
                      "id": 688,
                      "name": "VariableDeclaration",
                      "src": "8755:11:0"
                    }
                  ],
                  "id": 689,
                  "name": "ParameterList",
                  "src": "8754:13:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 725,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 690,
                          "name": "ElementaryTypeName",
                          "src": "8788:7:0"
                        }
                      ],
                      "id": 691,
                      "name": "VariableDeclaration",
                      "src": "8788:7:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 725,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 692,
                          "name": "ElementaryTypeName",
                          "src": "8797:7:0"
                        }
                      ],
                      "id": 693,
                      "name": "VariableDeclaration",
                      "src": "8797:7:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 725,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 694,
                          "name": "ElementaryTypeName",
                          "src": "8806:7:0"
                        }
                      ],
                      "id": 695,
                      "name": "VariableDeclaration",
                      "src": "8806:7:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 725,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 696,
                          "name": "ElementaryTypeName",
                          "src": "8815:6:0"
                        }
                      ],
                      "id": 697,
                      "name": "VariableDeclaration",
                      "src": "8815:13:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 725,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 698,
                          "name": "ElementaryTypeName",
                          "src": "8830:6:0"
                        }
                      ],
                      "id": 699,
                      "name": "VariableDeclaration",
                      "src": "8830:13:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 725,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "bytes32[]",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "length": null,
                            "type": "bytes32[]"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes32",
                                "type": "bytes32"
                              },
                              "id": 700,
                              "name": "ElementaryTypeName",
                              "src": "8845:7:0"
                            }
                          ],
                          "id": 701,
                          "name": "ArrayTypeName",
                          "src": "8845:9:0"
                        }
                      ],
                      "id": 702,
                      "name": "VariableDeclaration",
                      "src": "8845:16:0"
                    }
                  ],
                  "id": 703,
                  "name": "ParameterList",
                  "src": "8787:75:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          705
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "c",
                            "overrides": null,
                            "scope": 724,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "struct IpfsPublisher.Content",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "contractScope": null,
                                "name": "Content",
                                "referencedDeclaration": 18,
                                "type": "struct IpfsPublisher.Content"
                              },
                              "id": 704,
                              "name": "UserDefinedTypeName",
                              "src": "8874:7:0"
                            }
                          ],
                          "id": 705,
                          "name": "VariableDeclaration",
                          "src": "8874:16:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "struct IpfsPublisher.Content storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 61,
                                "type": "mapping(uint256 => struct IpfsPublisher.Content storage ref)",
                                "value": "contentById"
                              },
                              "id": 706,
                              "name": "Identifier",
                              "src": "8893:11:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 688,
                                "type": "uint256",
                                "value": "_id"
                              },
                              "id": 707,
                              "name": "Identifier",
                              "src": "8905:3:0"
                            }
                          ],
                          "id": 708,
                          "name": "IndexAccess",
                          "src": "8893:16:0"
                        }
                      ],
                      "id": 709,
                      "name": "VariableDeclarationStatement",
                      "src": "8874:35:0"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 703
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "tuple(uint256,address,uint256,string memory,string memory,bytes32[] memory)"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "id",
                                "referencedDeclaration": 4,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 705,
                                    "type": "struct IpfsPublisher.Content memory",
                                    "value": "c"
                                  },
                                  "id": 710,
                                  "name": "Identifier",
                                  "src": "8928:1:0"
                                }
                              ],
                              "id": 711,
                              "name": "MemberAccess",
                              "src": "8928:4:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "author",
                                "referencedDeclaration": 6,
                                "type": "address"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 705,
                                    "type": "struct IpfsPublisher.Content memory",
                                    "value": "c"
                                  },
                                  "id": 712,
                                  "name": "Identifier",
                                  "src": "8934:1:0"
                                }
                              ],
                              "id": 713,
                              "name": "MemberAccess",
                              "src": "8934:8:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "date",
                                "referencedDeclaration": 8,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 705,
                                    "type": "struct IpfsPublisher.Content memory",
                                    "value": "c"
                                  },
                                  "id": 714,
                                  "name": "Identifier",
                                  "src": "8944:1:0"
                                }
                              ],
                              "id": 715,
                              "name": "MemberAccess",
                              "src": "8944:6:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "content",
                                "referencedDeclaration": 10,
                                "type": "string memory"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 705,
                                    "type": "struct IpfsPublisher.Content memory",
                                    "value": "c"
                                  },
                                  "id": 716,
                                  "name": "Identifier",
                                  "src": "8952:1:0"
                                }
                              ],
                              "id": 717,
                              "name": "MemberAccess",
                              "src": "8952:9:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "ipfsurl",
                                "referencedDeclaration": 12,
                                "type": "string memory"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 705,
                                    "type": "struct IpfsPublisher.Content memory",
                                    "value": "c"
                                  },
                                  "id": 718,
                                  "name": "Identifier",
                                  "src": "8963:1:0"
                                }
                              ],
                              "id": 719,
                              "name": "MemberAccess",
                              "src": "8963:9:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "hashtags",
                                "referencedDeclaration": 17,
                                "type": "bytes32[] memory"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 705,
                                    "type": "struct IpfsPublisher.Content memory",
                                    "value": "c"
                                  },
                                  "id": 720,
                                  "name": "Identifier",
                                  "src": "8974:1:0"
                                }
                              ],
                              "id": 721,
                              "name": "MemberAccess",
                              "src": "8974:10:0"
                            }
                          ],
                          "id": 722,
                          "name": "TupleExpression",
                          "src": "8927:58:0"
                        }
                      ],
                      "id": 723,
                      "name": "Return",
                      "src": "8920:65:0"
                    }
                  ],
                  "id": 724,
                  "name": "Block",
                  "src": "8863:130:0"
                }
              ],
              "id": 725,
              "name": "FunctionDefinition",
              "src": "8731:262:0"
            }
          ],
          "id": 726,
          "name": "ContractDefinition",
          "src": "441:8573:0"
        }
      ],
      "id": 727,
      "name": "SourceUnit",
      "src": "37:8977:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
    },
    "networks": {
      "3": {
        "events": {},
        "links": {},
        "address": "0x8642D3941e049BdD339A40568aec94bc55975383",
        "transactionHash": "0xbc0d093e0de1d9bdec271588a7a1b2b0eef2320738c8c5406992ffeaab006c97"
      }
    },
    "schemaVersion": "3.4.3",
    "updatedAt": "2021-10-12T15:17:26.331Z",
    "networkType": "ethereum",
    "devdoc": {
      "details": "All function calls are currently implemented without side effects",
      "kind": "dev",
      "methods": {
        "addContent(string,string,bytes32[])": {
          "params": {
            "_content": "the string of content",
            "_hashtags": "the hashtags associated to the content",
            "_ipfsurl": "the url of the ipfs content"
          }
        },
        "getContentById(uint256)": {
          "params": {
            "_id": "The id of the content"
          },
          "returns": {
            "_0": "Returns the id, author, date, content, ipfsurl and hashtags for that piece of content"
          }
        },
        "getContentIdsByHashtag(bytes32,uint256)": {
          "params": {
            "_amount": "number of posts to be returned",
            "_hashtag": "hashtag from which get content"
          },
          "returns": {
            "_0": "uint256[] the ids of the contents, new request needed for texts and ipfsurls of the posts"
          }
        },
        "getFollowedHashtags()": {
          "returns": {
            "_0": "bytes32[] The hashtags followed by this user"
          }
        },
        "getTopHashtags(uint256)": {
          "params": {
            "_amount": "How many top hashtags to get in order, for instance the top 20 hashtags"
          },
          "returns": {
            "_0": "bytes32[] Returns the names of the hashtags"
          }
        },
        "hasSubscription(bytes32)": {
          "params": {
            "_hashtag": "to check for subscription"
          },
          "returns": {
            "_0": "bool true if the user is subscribed to hashtag"
          }
        },
        "sortHashtags()": {
          "details": "selection sort is implemented,  call this function whenever the hastaglist is change  or when the scores are modified "
        },
        "subscribeToHashtag(bytes32)": {
          "params": {
            "_hashtag": "hashtag name"
          }
        },
        "unsubscribeToHashtag(bytes32)": {
          "params": {
            "_hashtag": "hashtag name"
          }
        },
        "voteContent(uint256)": {
          "params": {
            "_id": "contentId"
          }
        }
      },
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {
        "getContentById(uint256)": {
          "notice": "returns the data for a particular content id"
        },
        "getContentIdsByHashtag(bytes32,uint256)": {
          "notice": "get the contents ids for a particular hashtag.  we can't return arrays of structs."
        },
        "getFollowedHashtags()": {
          "notice": "get the followed hashtag names for this msg.sender"
        },
        "getTopHashtags(uint256)": {
          "notice": "get the top hashtags"
        },
        "h1()": {
          "notice": "added for parm examples"
        },
        "hasSubscription(bytes32)": {
          "notice": "check if the user is subscribed to a hashtag"
        },
        "subscribeToHashtag(bytes32)": {
          "notice": "subscribe to a hashtag if the suscription  doesn't exists"
        },
        "unsubscribeToHashtag(bytes32)": {
          "notice": "unsubscribe to a hashtag if the suscription  does exists"
        },
        "voteContent(uint256)": {
          "notice": "vote content, each user is allowed to vote only once for each content"
        }
      },
      "version": 1
    }
  };


export default ABI;