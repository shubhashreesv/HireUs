from flask import Flask, request, jsonify
from flask_cors import CORS
import yaml
import os
from fuzzywuzzy import fuzz

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allows requests from any origin

# Function to load and parse the YAML files from the Chatterbot Corpus
def load_yaml_files(directory):
    pairs = []
    for filename in os.listdir(directory):
        if filename.endswith(".yml"):
            with open(os.path.join(directory, filename), 'r', encoding='utf-8') as file:
                data = yaml.safe_load(file)
                for conversation in data.get('conversations', []):
                    if len(conversation) >= 2:
                        pattern = conversation[0]
                        response = conversation[1]
                        pairs.append([pattern.strip(), [response.strip()]])
        else:
            print(f"Unexpected conversation format or non-YAML file: {filename}")
    return pairs

# Load patterns from the YAML files in the datasets directory
directory_path = 'datasets'  # Ensure this path is correct
pairs = load_yaml_files(directory_path)

# Create a chatbot instance with the loaded patterns
def find_best_match(user_message, pairs):
    best_match = None
    highest_similarity = 0
    for pattern, responses in pairs:
        similarity = fuzz.ratio(user_message.lower(), pattern.lower())
        if similarity > highest_similarity:
            highest_similarity = similarity
            best_match = responses
    return best_match

# Define the chat endpoint
@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message')
        if not user_message:
            return jsonify({'reply': 'No message provided'}), 400
        
        best_response = find_best_match(user_message, pairs)
        reply = best_response[0] if best_response else "Sorry, I'm still being trained to answer this!"
        
        return jsonify({'reply': reply})
    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({'reply': 'Sorry, something went wrong.'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv('PORT', 5000))

