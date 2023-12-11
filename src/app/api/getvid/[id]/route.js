export async function GET(req, { params }) {
    const id = params.id;
    let CHANNEL_ID = 'UCX6OQ3DkcsbYNE6H8uQQuVA'; 
    if (id ===  "markiplier") {
        CHANNEL_ID = 'UC7_YxT-KID8kRbqZo7MyscQ';
    }
    if (id === "dantdm") {
      CHANNEL_ID = 'UCS5Oz6CHmeoF7vSad0qqXfw';
    }
    if (id === "dude_perfect") {
      CHANNEL_ID = 'UCRijo3ddMTht_IHyNSNXpNQ';
    }
    if (id === "smosh") {
      CHANNEL_ID = 'UCY30JRSgfhYXA6i6xX1erWg';
    }
    if (id === "preston") {
      CHANNEL_ID = 'UC70Dib4MvFfT1tU6MqeyHpQ';
    }
    if (id ===  "mrbeast") {
      CHANNEL_ID = 'UCX6OQ3DkcsbYNE6H8uQQuVA';
    }
    if (id ===  "nigahiga") {
      CHANNEL_ID = 'UCSAUGyc_xA8uYzaIVG6MESQ';
    }
    if (id ===  "valkyrae") {
      CHANNEL_ID = 'UCWxlUwW9BgGISaakjGM37aw';
    }
    if (id ===  "blippi") {
      CHANNEL_ID = 'UC5PYHgAzJ1wLEidB58SK6Xw';
    }
    if (id ===  "felipe_neto") {
      CHANNEL_ID = 'UCV306eHqgo0LvBf3Mh36AHg';
    }
    if (id ===  "auronplay") {
      CHANNEL_ID = 'UCyQqzYXQBUWgBTn4pw_fFSQ';
    }

    try {
    const API_KEY = 'AIzaSyBk3XdgbEoOVaJtsGkUK4vdO3eoKNOYCUk';
    
    
    // Construct the API request URL
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&key=${API_KEY}`;
    
    // Make the API request using the fetch function
    const response = await fetch(url);
    const data = await response.json();
    
    const videos = data.items.map(item => ({
        videoId: item.id.videoId,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url,
      }));
      
      return new Response(JSON.stringify({"videos" :videos }), {
        status: 200,
        headers: {
          //'Access-Control-Allow-Credentials': "true",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          "Content-Type": "application/json"
        },
      });
    } 
    catch (error) {
        console.error('Error:', error.message);
        return Response.status(500).json({ error: 'Internal Server Error' });
    }

    /*
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Process the response data
        console.log(data);
        for (const item of data.items) {
          const videoTitle = item.snippet.title;
          const channelTitle = item.snippet.channelTitle;
          const videoId = item.id.videoId;
          console.log(`Title: ${videoTitle}, Video ID: ${videoId}, channeltitle: ${channelTitle}`);
        }
        return Response.json({"success": true});
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return Response.json({"success": false});
      });

  try {
    //const email = params.slug;
    //console.log(email);
    //console.log(password);
    //const password = params.id;
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM furnixschema.users WHERE email = $1", [email]);
    //const result = await client.query("SELECT * FROM furnixschema.products WHERE email = $1 AND password = $2", [email, password]);
    const answer = result.rows;
    client.release();
    console.log("answer:", answer);
    return Response.json(answer);
  } catch {
    return Response.json({ error: 'Internal server error' });
  }
*/
}

