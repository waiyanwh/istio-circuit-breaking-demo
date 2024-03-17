from flask import Flask
import os

app = Flask(__name__)

API_URL = os.environ.get('API_URL')

@app.route("/")
def index():
    try:
        import requests
        response = requests.get(API_URL)
        response.raise_for_status()
        return f"<h1>OK: {response.text}</h1>", 200
    except requests.exceptions.HTTPError as e:
         if e.response.status_code == 503:
             return "<h1>Service temporarily unavailable. Please try again later.</h1>" , 502 
         else:
            return f"<h1>Error: {response.text}</h1>", 502

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
