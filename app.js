const fs = require('fs')

const fetch = require('node-fetch');
fetch('https://api.kuvera.in/api/v3/funds.json').then((res) => {
    return res.json();
}).then(data => {
    console.log(data);
//   fs.writeFile('file.json',JSON.stringify(data), err => {
//       if(err) {
//         console.log('oppps');
//       } else {
//           console.log('file created')
//       }
//   })
})

// fs.readFile('./file.json', 'UTF-8', (err, data) => {
//     if(err) {





        
//         console.log('opps')
//     } else {
//         let dataJson = JSON.parse(data);

//         let fHouse = [];

//         dataJson.forEach(item => {
//             fHouse.push(item['fund_house']);
//         })

//         let filteredFHouse = [...new Set(fHouse)];

//         let result  = {};

//         filteredFHouse.forEach(item => {

//             result[item] = dataJson.reduce((total, v) => {
//                 if(v['fund_house'] === item) {
//                     total[v['fund_type']] = (total[v['fund_type']] || 0) + 1;
//                 }
//                 return total;
//             }, {});
//         })
       
//       fs.writeFile('file2.json', JSON.stringify(result), err => {
//           if(err) console.log('ops');
//           else console.log('file has been created');
//       })
//     }
// })

// const readFileByPromise = (fileName) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, 'UTF-8', (err, data) => {
//             if(err) reject('opps');
//             else resolve(data);
//         })
//     })
// }

// const writeFileByPromise = (fileName, data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(fileName, data, err => {
//             if(err) reject('opps');
//             else resolve('file has created');
//         })
//     })
// }

// readFileByPromise('file2.json').then(res => {
//     return writeFileByPromise('outFile.txt', res);
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })