import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = (props) => {
    /* categoryId: "24"
    channelId: "UCKaCalz5N5ienIbfPzEbYuA"
    channelTitle: "Jordan Matter"
    defaultAudioLanguage: "en"
    description: "I attempt to take 1000 photos of The Squad while Piper Rockelle and Elliana Walmsley battle in a series of viral TikTok challenges! Artist Zachary Aaronson creates a 6' portrait of Elliana. Thanks to Dhar Mann for the inspiration ❤️ LIKE & SHARE to be considered for next week's featured subscriber!\n\nThank you to Picture Mosaics for the incredible mosaic: https://www.picturemosaics.com\n\nSUBSCRIBE, LIKE and SHARE this video! Turn on POST NOTIFICATIONS to get notified whenever I post! https://www.youtube.com/user/jordanmatter\n\nMERCH: https://shopjordanmatter.com \n\nMore Squad:\nEpic Underwater Photo Challenge ft/ Piper Rockelle Squad vs Carter Sharer Team RAR https://youtu.be/c5-8Ym1hnY0\nRecreating Viral Couple's Photos *Two HUGE Pranks and a KISS* ft/ Elliana Walmsley https://youtu.be/pfnqLyC5VsY\nABBY LEE HAS TO BE NICE FOR 24 HOURS / ft. Lilly, Ellie, Piper and Rebecca Zamolo https://youtu.be/grdLycdY0Z0\n\nSUBSCRIBE!! \nMe: https://www.youtube.com/user/jordanmatter\nZach: https://www.youtube.com/channel/UCfxm0nAnqmdlj2-LEAw3i9Q\nPiper: https://www.youtube.com/c/PiperRockelle\nElliana: https://www.youtube.com/channel/UCyQdO_tgCtD5LhKg3paJO8Q\nLev: https://www.youtube.com/c/LevCameronlevcamron\nEmily: https://www.youtube.com/c/EmilyDobson\nSymonne: https://www.youtube.com/c/SymonneHarrison\nAyden: https://www.youtube.com/channel/UChMLmVuElASTNV4nybq0FCg\nClaire: https://www.youtube.com/channel/UCnZi9vkMwWITlqqFXBTOE0w\nJenna: https://www.youtube.com/channel/UCYIWAl9CEgVeIY8P8lHZdEQ\nJentzen: https://www.youtube.com/channel/UCoCB5pbeNAvc_a_OWHM2kmQ\nConnor: https://www.youtube.com/channel/UC5rK3grepq9TCUgdD5AYv1A\n\nVideo by Sandy Chase\n\nBusiness Inquiries: info@jordanmatter.com\n\nMusic licensed through Artlist and Epidemic Sound\n\nWow, if you're still reading you are awesome! BOOOMMMM!!"
    liveBroadcastContent: "none"
    localized: {title: "PIPER ROCKELLE vs ELLIANA WALMSLEY Viral TikTok Challenge", description: "I attempt to take 1000 photos of The Squad while P… you're still reading you are awesome! BOOOMMMM!!"}
    publishedAt: "2021-06-03T16:00:12Z"
    tags: (18) ["jordan matter", "dance photography", "challenge", "piper rockelle", "the squad", "elliana walmsley", "dance moms", "jentzen", "lev", "zachary aaronson", "photography", "headshots", "portraits", "art", "TikTok", "viral tiktoks", "who knows me better", "dhar mann"]
    thumbnails: {default: {…}, medium: {…}, high: {…}, standard: {…}, maxres: {…}}
    title: "PIPER ROCKELLE vs ELLIANA WALMSLEY Viral TikTok Challenge" */
    const embed = `https://www.youtube.com/embed/${props.selectedVideo.id}`;
    return (
        <div className={styles.detail}>
            <h3>{props.selectedVideo.snippet.title}</h3>
            <iframe id="ytplayer" type="text/html" width="320" height="180" src={embed} frameborder="0" allowfullscreen></iframe>
            <p>{props.selectedVideo.snippet.description}</p>
        </div>
    )
}

export default VideoDetail;
