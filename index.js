const fs = require('fs')
const fetch = require('node-fetch');


const problem = require('./problem.js')

const readFileByPromise = (filename) => {

   return new Promise((resolve, reject) => {
       fs.readFile(filename, 'UTF-8', (err, data) => {
           if(err) reject('opps');
           else resolve(data);
       })
   })

}

const writeFileByPromise = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, err => {
            if(err) reject('opps');
            else resolve('file has created');
        })
    })
}


// readFileByPromise('file.json').then(res => {
//     let obj = JSON.parse(res);
//     let result = problem(obj);
//    return writeFileByPromise('file3.json', JSON.stringify(result))
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })
 
async function dispalay() {
    try {
        let res1 = await readFileByPromise('file.json');
        let obj = JSON.parse(res1);
        let result = problem(obj);
        let res2 = await writeFileByPromise('file3.json', JSON.stringify(result));
    } catch(e) {
      console.log(e);
    }
}

dispalay();

