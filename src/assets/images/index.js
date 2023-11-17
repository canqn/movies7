const images = {
    // logo: import.meta.glob('~/assets/images/logo.png').default,
    logo: new URL('~/assets/images/logo.png', import.meta.url).href,
    play: new URL('~/assets/images/play-button.svg', import.meta.url).href,
    noImage: new URL('~/assets/images/no-image.png', import.meta.url).href
}

export default images
