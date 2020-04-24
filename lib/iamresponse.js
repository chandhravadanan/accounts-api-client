
class IAMResponse{

    constructor(res){
        this.ok = res.ok
        this.status = res.status
        this.resData = {}
    }

    isReqSuccess(){
        return this.status!=500
    }

    getStatusCode(){
        return this.status
    }

    setJsonResData(data){
        this.resData = data
    }

    getJsonResData(data){
        return this.resData
    }

    getUserId(){
        return this.resData.id
    }

}


module.exports = IAMResponse;