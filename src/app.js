let text = 'Hola mundo'

const message = () => {
    return text;
}

require.main === module ? console.log(message()) : null

module.exports = message;