
import { create } from 'ipfs-http-client';
  
import {Buffer} from 'buffer';


  const projectId = ''
  const projectSecret = ''
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

