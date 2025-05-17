export default {
  async fetch(request) {
    const url = new URL(request.url).searchParams.get("url");
    if (!url) {
      return new Response("Error: Missing image URL", { status: 400 });
    }

    try {
      const response = await fetch(url, {
        headers: {
          "Referer": "https://www.wfwf389.com",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      });

      return new Response(response.body, {
        status: response.status,
        headers: { "Content-Type": response.headers.get("Content-Type") },
      });

    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  }
};