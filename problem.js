function problem(data) {

    let fHouse = [];

    data.forEach(item => {
        fHouse.push(item['fund_house']);
    })

    let filteredFHouse = [...new Set(fHouse)];

    let result  = {};

    filteredFHouse.forEach(item => {

        result[item] = data.reduce((total, v) => {
            if(v['fund_house'] === item) {
                total[v['fund_type']] = (total[v['fund_type']] || 0) + 1;
            }
            return total;
        }, {});
    })
return result;
}

module.exports = problem;