// Make sure YouTube Data API v3 is enabled for this key in Google Cloud.
// If you get 403, check API key restrictions and allow localhost if using local dev.

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Live Chat >>>> Infinite Scroll >>>>>> Pagination