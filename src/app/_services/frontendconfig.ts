
export class FrontEndConfig {
    constructor() { }
    serverurl = {
        apiUrl:"http://localhost:8000"
    }

  
    frontendurl = "http://localhost:4200"
   
    secretkey='secret'
    getServerUrl() {
      return this.serverurl;
    }
    getFrontEndUrl(){
      return this.frontendurl;
  
    }
    getSecretKey(){
      return this.secretkey
    }
  
  }