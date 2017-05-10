function sendData(data){
    // default op ||
    data = data || 'no data';
    return data;
}

// guard op &&
console.log(sendData && sendData());
