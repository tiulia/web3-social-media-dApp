// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;



/// @title IpfsPublisher
/// @author Iulia Banu
/** @notice You can use this contract as a basic example of social media dApp that allows 
 * posting content with text and urls images stored on ipfs
 * each post may have one or more tags, each user may fallow one or more tags */
/// @dev All function calls are currently implemented without side effects

/// 0x8642D3941e049BdD339A40568aec94bc55975383

contract IpfsPublisher {
    struct Content {
        uint256 id;
        address author;
        uint256 date;
        string content;
        string ipfsurl;
        uint256 votes;
        bytes32[] hashtags;
    }
    
    event ContentAdded(uint256 indexed id, address indexed author,
        uint256 indexed date, string content, string ipfsurl, bytes32[] hashtags);
    
    
    mapping(address => bytes32[]) public subscribedHashtags;
    mapping(bytes32 => uint256) public hashtagScore; 
    mapping(bytes32 => uint256[]) public contentIdsByHashtag;
    mapping(uint256 => Content) public contentById;
    mapping(bytes32 => bool) public hashtagExist;
    mapping(address => bool) public userExist;
    mapping(address => mapping ( uint256 => bool)) public userVoted;
    address[] public users;
    bytes32[] public hashtags;
    uint256 public latestContentId;
    
    
    
    /** @notice sorts the hashtags, score is given by the number of posts using the hashtag 
     * plus the numer of subsribers */
    /// @return bytes32[] returns a sorted array of hashtags
    /** @dev selection sort is implemented, 
     * call this function whenever the hastaglist is change  or when the scores are modified */
    function sortHashtags() public view returns(bytes32[] memory) {
        bytes32[] memory _hashtags = hashtags;
        bytes32[] memory sortedHashtags = new bytes32[](hashtags.length);
        uint256 lastId = 0;
        for(uint256 i = 0; i < _hashtags.length; i++) {
            bytes32 maxhashtag = _hashtags[i];
            uint256 maxid = i;
            for(uint j = i+1; j < _hashtags.length; j++) {
                if(hashtagScore[maxhashtag] < hashtagScore[_hashtags[j]]) {
                    maxhashtag = _hashtags[j];
                    maxid = j;
                }
            }
            bytes32 temphashtag = _hashtags[i];
            _hashtags[i] = _hashtags[maxid];
            _hashtags[maxid] = temphashtag;
            
            
            sortedHashtags[lastId] = _hashtags[i];
            lastId++;
        }
        return sortedHashtags;
    }
    
    
    /// @notice check if the user is subscribed to a hashtag
    /// @return bool true if the user is subscribed to hashtag
    /// @param  _hashtag to check for subscription
    function hasSubscription(bytes32 _hashtag) public view
            returns(bool) {
        for(uint256 i = 0; i < subscribedHashtags[msg.sender].length;i++) {
            if(subscribedHashtags[msg.sender][i] == _hashtag) 
                return true;
        }
        return false;
    }
    
    
    
    /** @notice add new content to the social media dApp. If no hashtags are sent, 
     * the content is added to the #miscellaneous hashtag list */
    /// @param _content the string of content
    /// @param _ipfsurl the url of the ipfs content
    /// @param _hashtags the hashtags associated to the content

    function addContent(string memory _content, string memory _ipfsurl, bytes32[] memory
        _hashtags) public {
    
        require(bytes(_content).length > 0, 'The content cannot be empty');
        Content memory newContent = Content(latestContentId, msg.sender, block.timestamp, _content, _ipfsurl, 0,  _hashtags);
        // If the user didn't specify any hashtags add the content to the #miscellaneous hashtag
        // initially the number of votes is 0.

        if(_hashtags.length == 0) {
            contentIdsByHashtag['miscellaneous'].push(latestContentId);
            hashtagScore['miscellaneous']++;

            if(!hashtagExist['miscellaneous']) {
                hashtags.push('miscellaneous');
                hashtagExist['miscellaneous'] = true;
            }
        } else {
            for(uint256 i = 0; i < _hashtags.length; i++) {
                contentIdsByHashtag[_hashtags[i]].push(latestContentId);
                hashtagScore[_hashtags[i]]++;
                if(!hashtagExist[_hashtags[i]]) {
                    hashtags.push(_hashtags[i]);
                    hashtagExist[_hashtags[i]] = true;
                }
            }
        }

        hashtags = sortHashtags();
        contentById[latestContentId] = newContent;
        if(!userExist[msg.sender]) {
            users.push(msg.sender);
            userExist[msg.sender] = true;
        }

        emit ContentAdded(latestContentId, msg.sender, block.timestamp, _content, _ipfsurl, _hashtags);
        latestContentId++;
    }
    
    
    /// @notice subscribe to a hashtag if the suscription  doesn't exists
    /// @param _hashtag hashtag name
    function subscribeToHashtag(bytes32 _hashtag) public {
        if(!hasSubscription(_hashtag)) {
            subscribedHashtags[msg.sender].push(_hashtag);
            hashtagScore[_hashtag]++;
            hashtags = sortHashtags();
        }
    }      
    
    
    /// @notice unsubscribe to a hashtag if the suscription  does exists
    /// @param _hashtag hashtag name
    function unsubscribeToHashtag(bytes32 _hashtag) public {
        if(hasSubscription(_hashtag)) {
            for(uint256 i = 0; i < subscribedHashtags[msg.sender].length; i++)
            {
                if(subscribedHashtags[msg.sender][i] == _hashtag) {
                    delete subscribedHashtags[msg.sender][i];
                    hashtagScore[_hashtag]--;
                    hashtags = sortHashtags();
                    break;
                }
            }
        }
    }
    
    
    
    /// @notice vote content, each user is allowed to vote only once for each content
    /// @param _id contentId
    function voteContent(uint256 _id) public returns (uint256){
        
        require(!userVoted[msg.sender][_id], 'Only one vote is allowed for each content!');
        
        userVoted[msg.sender][_id] = true;
        contentById[_id].votes++;

        return contentById[_id].votes;
    }      

    /// @notice unvote content, each user is allowed to unvote any previously voted content
    /// @param _id contentId
    function unvoteContent(uint256 _id) public returns (uint256) {
        
        require(userVoted[msg.sender][_id], 'unvote only voted content!');
        
        userVoted[msg.sender][_id] = false;
        contentById[_id].votes--;

        return contentById[_id].votes;
    } 
    

    /// @notice get the top hashtags
    /// @param _amount How many top hashtags to get in order, for instance the top 20 hashtags
    /// @return bytes32[] Returns the names of the hashtags
    function getTopHashtags(uint256 _amount) public view returns(bytes32[] memory) {
        bytes32[] memory result;
        
        uint256 amount;
        
        if (hashtags.length < _amount )
            amount = hashtags.length;
        else
            amount = _amount;
        
        
        result = new bytes32[](amount);
        for(uint256 i = 0; i < amount; i++) {
            result[i] = hashtags[i];
        }
        
        return result;
    }
        
        
    /// @notice get the followed hashtag names for this msg.sender
    /// @return bytes32[] The hashtags followed by this user
    function getFollowedHashtags() public view returns(bytes32[] memory) {
        return subscribedHashtags[msg.sender];
    }
    
    
    
    /// @notice get the contents ids for a particular hashtag. 
    /// we can't return arrays of structs.
    /// @param _hashtag hashtag from which get content
    /// @param _amount number of posts to be returned
    /// @return uint256[] the ids of the contents, new request needed for texts and ipfsurls of the posts

    function getContentIdsByHashtag(bytes32 _hashtag, uint256 _amount) public view returns(uint256[] memory) {
        uint256[] memory ids;
      
        uint256 amount;
        
        
        //the number of ids cannot exeed the number of posts associated whith the hashtag.
        if (contentIdsByHashtag[_hashtag].length < _amount )
            amount = contentIdsByHashtag[_hashtag].length;
        else
            amount = _amount;
        
        
        ids = new uint256[](amount);
        for(uint256 i = 0; i < amount; i++) {
            ids[i] = contentIdsByHashtag[_hashtag][i];
        }
        return ids;
    }
    
    /// @notice returns the data for a particular content id
    /// @param _id The id of the content
    /// @return Returns the id, author, date, content, ipfsurl and hashtags for that piece of content
    function getContentById(uint256 _id) public view returns(uint256, address, uint256, string memory, string memory, uint256, bool, bytes32[] memory) {
        Content memory c = contentById[_id];
        bool voted = userVoted[msg.sender][c.id];
        return (c.id, c.author, c.date, c.content, c.ipfsurl, c.votes, voted, c.hashtags);
    }
    
    
}