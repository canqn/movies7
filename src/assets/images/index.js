const images = {
    // logo: import.meta.glob('~/assets/images/logo.png').default,
    logo: new URL('~/assets/images/logo.png', import.meta.url).href,
    bgHeader: new URL('~/assets/images/bg-header.jpg', import.meta.url).href,
    bgHome: new URL('~/assets/images/bg-home.jpg', import.meta.url).href,
    play: new URL('~/assets/images/play-button.svg', import.meta.url).href,
    noImage: new URL('~/assets/images/no-image.png', import.meta.url).href,
    noImage300: new URL('~/assets/images/no-image.jpg', import.meta.url).href
}

export default images
