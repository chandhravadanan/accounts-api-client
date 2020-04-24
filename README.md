
# accounts-api-client

accounts nodejs client

    accountsapi = require('accounts-api-client')
    
    iamapi = new accountsapi('http://localhost:3000', 'sevice-token')
    
    async function authenticate(userid, password){
    
    try{
    
    let iamres = await iamapi.authenticate(userid, password)
    
    if(!iamres.isReqSuccess()){
    
    console.log('internal server error')
    
    }else if(iamres.getUserId()){
    
    console.log('valid user', iamres.getUserId())
    
    }else{
    
    console.log(iamres.getStatusCode(), iamres.getJsonResData())
    
    }
    
    }catch(e){
    
    console.log(e)
    
    }
    
    }
    
    async function createUser(userid, password){
    
    try{
    
    let iamres = await iamapi.createUser(userid, password)
    
    if(!iamres.isReqSuccess()){
    
    console.log('internal server error')
    
    }else if(iamres.getUserId()){
    
    console.log('valid user', iamres.getUserId())
    
    }else{
    
    console.log(iamres.getStatusCode(), iamres.getJsonResData())
    
    }
    
    }catch(e){
    
    console.log(e)
    
    }
    
    }
    
      
    
    createUser('xxx', 'yyy')
    
    authenticate('xxx', 'yyy')
