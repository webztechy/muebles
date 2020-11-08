export const currentUTCTime = () =>{
    const now = new Date();        
    const utc_timezone = now.toUTCString();
    //const utc_timestamp = new Date( now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds() ).getTime();

    return utc_timezone;
}

export const toNormalArrayObject = (arr) =>{
    let arr_updated = [];
    for (const [key, value] of Object.entries(arr)) {
        arr_updated.push(value);
    }
    return arr_updated;
}   

export const fieldSorter = (fields) => (a, b) => fields.map(o => {
    let dir = 1;
    if (o[0] === '-') { dir = -1; o=o.substring(1); }
    return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
}).reduce((p, n) => p ? p : n, 0);

export const appendScript = ( scriptToAppend ) => {

    removeScript(scriptToAppend);

    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
}

export const removeScript = (scriptToremove) => {
    let allsuspects=document.getElementsByTagName("script");

    for (let i=allsuspects.length; i>=0; i--){
         if ( allsuspects[i] && allsuspects[i].getAttribute("src")!==null 
            && allsuspects[i].getAttribute("src").indexOf(`${scriptToremove}`) !== -1 ){
           
                allsuspects[i].parentNode.removeChild(allsuspects[i])
        }    
    }
}

export const userTypeLabels = (index) =>{
    let arr_updated = new Array();

    arr_updated = {
        1 : 'administrator',
        2 : 'client'
    }

    if ( typeof index !== 'undefined'){
        if ( arr_updated.hasOwnProperty(index) ) {
            arr_updated = arr_updated[index];
        }else{
            arr_updated = '';
        }
    }

    return arr_updated;
}  