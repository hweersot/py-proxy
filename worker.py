import requests

def handle_request(request):
    url = request.query_params.get("url")
    if not url:
        return Response("Error: Missing image URL", status=400)
    
    headers = {
        "Referer": "https://www.wfwf389.com",
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    }
    
    try:
        response = requests.get(url, headers=headers)
        return Response(response.content, status=response.status_code, headers={"Content-Type": response.headers["Content-Type"]})
    except Exception as e:
        return Response(f"Error: {str(e)}", status=500)