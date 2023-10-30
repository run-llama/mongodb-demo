from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/process_form', methods=['POST'])
def process_form():
    query = request.form.get('query')
    if query is not None:
        # Do something with query if necessary
        return jsonify({"response": "bar"})
    else:
        return jsonify({"error": "query field is missing"}), 400
