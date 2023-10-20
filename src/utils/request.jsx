const Request = (url) => {
    const options = {
        method: 'GET',
        url: 'https://fb-video-reels.p.rapidapi.com/api/getSocialVideo',
        params: {
            url: url
        },
        headers: {
            'X-RapidAPI-Key': '816b06a8e9msh1f56e8347828dc4p1dd781jsn97b2185c420b',
            'X-RapidAPI-Host': 'fb-video-reels.p.rapidapi.com'
        }
    };

    return options;
}

export default Request;
