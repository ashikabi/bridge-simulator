const redis = require("redis");
const YML = require('config-yml');
const localStorage = redis.createClient({host : '172.17.0.2', port : 6379});

localStorage.on('ready',async()=> {
  console.log("Redis is ready");
await showActualStorage();
 });
 
 localStorage.on('error',function() {
  console.log("Error in Redis");
 });

 const setData = (key,value)=>{
   if(!value) return;
  return new Promise((resolve, reject)=>{
    let valueToStore = JSON.stringify(value);
    localStorage.set(key,valueToStore,(err,result)=>{
      if(err)
        reject(err);
      resolve(result);
    })
  })
};

const getData = (key) =>{
 return new Promise((resolve,reject)=>{
  localStorage.get(key,(err,vals)=>{
     if(err)
      reject(err);
    let values = JSON.parse(vals);
    resolve(values);
   })
 });
};


const showActualStorage = async () =>{

let account_id = await getData(`${YML.DOMAIN}.account_id`);
let sms = await getData(`${YML.DOMAIN}.sms`);
let rooms = await getData(`${YML.DOMAIN}.rooms`);

console.log(`getting account_id : ${account_id}`);
console.log("_________________________________________________________________________");

console.log(`getting sms : ${JSON.stringify(sms)}`);
console.log("_________________________________________________________________________");

console.log(`getting rooms : ${JSON.stringify(rooms)}`);
console.log("_________________________________________________________________________");

}

module.exports = { setData, getData }
//https://medium.com/javascript-in-plain-english/converting-javascript-callbacks-to-promise-and-async-await-replacing-async-waterfall-method-with-3c8b7487e0b9
