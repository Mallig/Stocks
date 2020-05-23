const https = require('https')

class Check {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseURL = 'https://www.alphavantage.co/'
    }

    async price(symbol) {
        // var price = await this.api.getPrice(symbol);
        return "100"

    }

}

module.exports = Check;