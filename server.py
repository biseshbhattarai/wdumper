from flask import Flask 
from flask import request
from flask_cors import CORS , cross_origin
import logging 
import os
import itertools 


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


logging.getLogger('werkzeug').disabled = True
os.environ['WERKZEUG_RUN_MAIN'] = 'true'

@app.route('/')
def home():
    return "Listening"

def brute(paths): 
    path = paths.split("/")
    print(list(itertools.permutations(path)))


def dump(paths):
    with open("/home/bishesh/wordlists/wordlist1.txt", 'a') as af:
        af.write(paths+"\n")
    brute(paths)

def feeder(path):
    dump(path)

@app.route('/dump', methods=['GET', 'POST'])
@cross_origin()
def urls():
    if request.method == 'POST':
        req_data = request.get_json()
        print(req_data['line'])
        feeder(req_data['line'])
        return "Posted"
    elif request.method == 'GET':
        req_data = request.args.get("data")
        print(req_data)
        return "GET"

if __name__ == "__main__":
    app.run()

