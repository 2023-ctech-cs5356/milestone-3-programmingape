from flask import Flask
from flask_restful import Api, Resource
## 以上两个都需要安装

app = Flask(__name__)
api = Api(app)

videos = {
    'video1': {'title': 'video1', 'author': 'author1'},
    'video2': {'title': 'video2', 'author': 'author2'},
    'video3': {'title': 'video3', 'author': 'author3'},
}

class Video(Resource):
    def get(self, video_id):
        return videos[video_id]

api.add_resource(Video, "/video/<video_id>")

@app

if __name__ == '__main__':
    app.run(debug=True)