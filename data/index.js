const estData = require('./estimation-data.json')

function tp(){
    const bhkEntity = estData.find(item => item.entity === "BHK").price;
    
    console.log(bhkEntity)
}
tp()