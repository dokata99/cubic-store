const config = {
    development: {
        PORT: 5000,
        COOKIE_NAME: 'USER_SESSION',
        SALT_ROUNDS: 10,
        KEY: 'dokataaaaa'
        

    },
    production: {
        PORT: 80,
        COOKIE_NAME: 'USER_SESSION',
        SALT_ROUNDS: 10,
        KEY: 'dokataaaaa'

    }
};

module.exports = config[process.env.NODE_ENV.trim()]