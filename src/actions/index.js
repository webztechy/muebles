export const updatePageTitle = (nr) =>{
    return{
      type : 'UPDATETITLE',
      payload : nr
    }
  }

export const isLoggedin = (status) =>{
    return{
        type : 'ISLOGGEDIN',
        payload : status
    }
}
