export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'
export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'

export const favicons = {
    airbnb: 'https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico',
    amazon: 'https://www.amazon.com/favicon.ico',
    apple: 'https://www.apple.com/favicon.ico',
    facebook: 'https://facebook.com/favicon.ico',
    github: 'https://github.githubassets.com/favicons/favicon.png',
    google: 'https://www.google.com/favicon.ico',
    heroku: 'https://www.herokucdn.com/favicons/favicon.ico',
    instagram: 'https://www.instagram.com/favicon.ico',
    microsoft: 'https://www.microsoft.com/favicon.ico',
    netlix: 'https://www.netflix.com/favicon.ico',
    nike: 'https://www.nike.com/android-icon-128x128.png',
    reactjs: 'https://reactjs.org/favicon.ico',
    redcross: 'https://www.redcross.org/etc/designs/redcross/shared/favicon.ico',
    starbucks: 'https://www.starbucks.com/home/icons/favicon-32x32.png',
    stanford: 'https://www-media.stanford.edu/assets/favicon/favicon-32x32.png',
    tesla: 'https://www.tesla.com/themes/custom/tesla_frontend/assets/favicons/favicon.ico',
    tinder: 'https://tinder.com/favicon-32x32.png',
    toyota: 'https://www.toyota.com/favicon.ico',
    twitter: 'https://abs.twimg.com/favicons/twitter.ico',
    uber: 'https://d1nyezh1ys8wfo.cloudfront.net/favicon.ico',
    webpack: 'https://webpack.js.org/icon_144x144.png',
    youtube: 'https://www.youtube.com/s/desktop/ca54e1bd/img/favicon_32.png',
    get: function(name) {
        let idx = -1
        let props = Object.keys(this)
        for(; idx < props.length; ) {
            if (idx != -1 && props[idx].search(name) != -1) return Object.values(this)[idx]
            idx += 1
        }
        return null
    }
}