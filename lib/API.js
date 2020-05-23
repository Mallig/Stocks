const https = require('https');

class API {
    constructor(apiKey) {
        this.baseURL = 'https://www.alphavantage.co/'
        this.apiKey = apiKey
    }

    getPrice(symbol) {
        var query = `query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${this.apiKey}`
        var req = `${this.baseURL}${query}`

        // return promise resolving to stock price
        return new Promise((resolve, reject) => {
            var request = https.get(req, (resp) => {

                let data = '';

                resp.on('data', (chunk) => {
                    data += chunk;
                });
              
                resp.on('end', () => {
                    resolve(JSON.parse(data)['Global Quote']['05. price']);
                });
            });
        });
    }
}

module.exports = API