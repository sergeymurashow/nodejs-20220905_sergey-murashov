const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
    constructor(options) {
        super(options)
        this.limit = options.limit
        this.tmp = 0
    }

    _transform(chunk, encoding, callback) {
        let str = chunk.toString()
        let bufferString = new Buffer.from(str)
        this.tmp += bufferString.length
        if (this.tmp > this.limit) {
            callback(new LimitExceededError())
            return
        }
        callback(null, chunk)
    }
}

module.exports = LimitSizeStream;
