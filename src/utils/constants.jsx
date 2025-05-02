const GOOGLE_APIKEY = "AIzaSyDS9Z4hJq_f1xkm14Jq8LXLe5K80czuHIQ";

export const POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=in&key=" +
  GOOGLE_APIKEY;

