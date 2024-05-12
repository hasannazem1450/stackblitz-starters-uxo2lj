const API_KEY =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMzZWVlMWQyYWMzODQyNjkwMTAxMTJlOTI3MDMzNDc0ZTFiZDk3ZTA3ODMyY2ZkNzU1Yzc5Y2ExYWFhYTAyNjZlZTYzYzZhYTI1ODRmYmJhIn0.eyJhdWQiOiI5NjUzIiwianRpIjoiMzNlZWUxZDJhYzM4NDI2OTAxMDExMmU5MjcwMzM0NzRlMWJkOTdlMDc4MzJjZmQ3NTVjNzljYTFhYWFhMDI2NmVlNjNjNmFhMjU4NGZiYmEiLCJpYXQiOjE1OTIxMTU1NDcsIm5iZiI6MTU5MjExNTU0NywiZXhwIjoxNTk0NjIxMTQ3LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.fyeN1R3nMRivCBT_RTUtnAaX6KsFfiwSJoP4Q8MEgNtMVw8N0HelJM47ycEmIEHykACxZCGGDWRyQRvvNi2johk0CZpBoSHECvjcgecZw5kKUrBGZPn_iFWJevPE4iJVAV8kJcQBIOAdCSeKoKFZN_QNoxqNJGBrgd7o6iIbWtVa-xwbyDG8tW4JbnJ4EwcttbiUp51OxmoFvuaV2BjeoA7JBIJMQIsvOZ0VNFjozEC4BEi_7ch1fa5SzVNqjlxHlxZNQDOdcDuBXv8-0Nis16dYHUf4BoeAtUGvqTl3W0_fLpI93GkV7v_K_jhAkIIiofjH2mM4zsnqwEyeot4D4A';

const styleTypes = {
  satellite: 's',
  satelliteWithLabel: 'y',
  street: 'p',
  streetWithTraffic: 'p,traffic',
};

const stylePath = `raster/xyz/1.0.0/google:${styleTypes['streetWithTraffic']}@EPSG:900913@png/{z}/{x}/{y}.png`;

const BASE_URL = 'https://map.ir/';

const mapStyle = {
  version: 8,
  sources: {
    'raster-tiles': {
      type: 'raster',
      tiles: [`${BASE_URL}${stylePath}?x-api-key=${API_KEY}`],
      tileSize: 256,
      attribution: 'map.ir',
    },
  },

  layers: [
    {
      id: 'simple-tiles',
      type: 'raster',
      source: 'raster-tiles',
    },
  ],
};

export default mapStyle;
