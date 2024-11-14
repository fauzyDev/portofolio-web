export const get = async () => {
    const response = await fetch('https://api-web-album.vercel.app/api/data')
    const data = await response.json()
    return data;;
}
