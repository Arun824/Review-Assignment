const fs = require('fs')

const fetch = require('node-fetch');
fetch('https://api.kuvera.in/api/v3/funds.json').then((res) => {
    return res.json();
}).then(data => {
  fs.writeFile('file.json',JSON.stringify(data), err => {
      if(err) {
        console.console('oppps');
      } else {
          console.log('file created')
      }
  })
})

fs.readFile('./file.json', 'UTF-8', (err, data) => {
    if(err) {
        console.log('opps')
    } else {
        let dataJson = JSON.parse(data);

        let fHouse = [];

        dataJson.forEach(item => {
            fHouse.push(item['fund_house']);
        })

        let filteredFHouse = [...new Set(fHouse)];

        let result  = {};

        filteredFHouse.forEach(item => {

            result[item] = dataJson.reduce((total, v) => {
                if(v['fund_house'] === item) {
                    total[v['fund_type']] = (total[v['fund_type']] || 0) + 1;
                }
                return total;
            }, {});
        })
       
      fs.writeFile('file2.json', JSON.stringify(result), err => {
          if(err) console.log('ops');
          else console.log('file has been created');
      })
    }
})