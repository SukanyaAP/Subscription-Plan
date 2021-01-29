export class User{
    UserId:number
    UserName:string
    EMailAddress:string
    Photo:string
  constructor(id:number,name:string,EMailAddress:string,photo:string)
  {
       this.UserId=id
       this.UserName=name
       this.EMailAddress=EMailAddress
       this.Photo=photo
      }
                  }