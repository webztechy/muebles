export const isEmpty = (s) =>{
    return ((s == null) || (s.length == 0));
}

export const twoDigitPad = (num) => {
    num = num < 10 ? "0" + num : num;
    if (num == "00"){
        num = "12";
    }
    return num;
}

export const  validateEmail = (email) =>{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
}


