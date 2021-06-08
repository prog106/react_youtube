import axios from "axios";

class Youtube {
    constructor(key) {
        this.youtube = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
        });
        this.key = key;
    }
    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
                key: this.key,
            }
        });
        return response.data.items;
    }
    async searching(q) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                q: q,
                key: this.key,
            }
        });
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
    async _mostPopular() {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.requestOptions);
        const result = await response.json();
        return result.items;
    }
    async _searching(q) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=${this.key}`, this.requestOptions);
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;
