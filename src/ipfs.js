
import { create } from 'ipfs-http-client';
  
import {Buffer} from 'buffer';


  const projectId = '1zBMF6FCnF1PRccBK20mHAlFdgN'
  const projectSecret = '6bf8897ebac09dd2db1d7e896e0da57a'
  const auth ='Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
  
  const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    /*apiPath: '/ipfs/api/v0',*/
    headers: {
      authorization: auth
    }
  })


export default ipfs;

