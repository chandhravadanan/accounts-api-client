
const fetch = require('node-fetch')
var IAMResponse = require('./iamresponse')

class AccountsAPI{

    constructor(baseUrl, serviceToken){
        this.baseUrl = baseUrl
        this.serviceToken = serviceToken 
    }

    getReqOptions(userid, password){
        return { 
            method : 'POST',
            body : JSON.stringify({userid, password}),
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': this.serviceToken
            },
         }
    }

    createUser(userid, password){
        let options = this.getReqOptions(userid, password)
        return this.send('/signup', options)
    }

    authenticate(userid, password){
        let options = this.getReqOptions(userid, password)
        return this.send('/signin', options)
    }

    send(uri, options){
        let iamres
        return fetch(this.baseUrl+uri, options)
         .then((res) =>{
            iamres = new IAMResponse(res)
            try{
                return res.json()
            }catch(err){
                return {}
            }
         }) 
         .then((json) =>{
            iamres.setJsonResData(json)
            return iamres
         })
         .catch((err)=> {
            console.log(err)
            throw err
         });
    }
    
}

module.exports = AccountsAPI