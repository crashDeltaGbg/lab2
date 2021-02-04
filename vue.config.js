module.exports = {
    pwa: {
        manifestOptions: {
            background_color: '#7F8799',
            short_name: 'Polisen'
        },
        name: 'Polisen i Göteborg',
        themeColor: '#4370CC',
        workboxOptions: {
            runtimeCaching: [
                {
                    handler: 'NetworkFirst',
                    options: {
                        networkTimeoutSeconds: 5
                    },
                    urlPattern: 'https://polisen.se/api/events?locationname=Göteborg'
                }
            ]
        }
    }
}