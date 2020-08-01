import { favicons } from './constants/productConstants'

let randomPropValueOf = (object) => {
    let vals = Object.values(object)
    return vals[Math.floor((Math.random() * vals.length))]
}

export const getFavicon = (favicon) => {
    return favicons.key(favicon) != null ? favicons.key(favicon) : ''
}

export const loadFavicon = (favicon) => {
    const link = document.createElement('link')
    document.head.appendChild(link)
    link.rel = 'icon'
    link.href = getFavicon(favicon)
} 