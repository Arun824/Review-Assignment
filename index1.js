const fs = require('fs');
const fetch = require('node-fetch');


let  codes = ['TRSSG1-GR', 'BSD1050-GR', '606-DR', '8010-DP', 'PCFFZM-DP'];


function fetchCodeById(code) {
    return fetch('https://api.kuvera.in/api/v3/funds/'+code+'.json');   
}


const writeFileBYPromise = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, err => {
            if(err) reject('opss');
            else resolve();
        })
    })
}


async function getDataAndWriteFile(code) {
    
        const data = await fetchCodeById(code)
        let result = await data.json();
        let dataString = JSON.stringify(result);
        const write = await writeFileBYPromise(code,  dataString);

}


Promise.all([getDataAndWriteFile('TRSSG1-GR'),getDataAndWriteFile('BSD1050-GR'),getDataAndWriteFile('606-DR'),getDataAndWriteFile('8010-DP'),getDataAndWriteFile('PCFFZM-DP')]).then(() => {
   console.log('file has created');
}).catch(err => {
    console.log(err);
})


// Promise.all(codes.map(item => {
//     getDataAndWriteFile(item);
// })).then(() => {
//     console.log('file created');
// }).catch(err => {
//     console.log(err);
// })


// codes.forEach(code => {

//     fetchCodeById(code).then(res => {
//         return res.json();
//     }).then(res => {
//         let result = JSON.stringify(res);
//       return  writeFileBYPromise(code, result);
//     }).then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.log('opss');
//     })

// })


