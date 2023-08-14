from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
import numpy as np
import io
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# Load your saved model
model = load_model("fyp.h5")

@app.route("/hello/", methods=["GET"])
def hello():
    return jsonify({"prediction": "hello"})
# Define a POST endpoint to make predictions
@app.route("/predict/", methods=["POST"])
def predict():
    if file := request.files["file"]:
        # Read the uploaded image as bytes
        contents = file.read()

        # Convert the image bytes to an image array
        img = image.img_to_array(image.load_img(io.BytesIO(contents), target_size=(224, 224)))

        # Preprocess the image data to make it compatible with the model
        img_data = preprocess_input(np.expand_dims(img, axis=0))

        # Make predictions using the model
        classes = model.predict(img_data)

        # Assuming you have a list of class names
        class_names = ['Healthy', 'Loose Smut', 'Root Rot', 'Septoria', 'Stripe Rust']

        predicted_class = class_names[np.argmax(classes[0])]
        confidence = round(100 * np.max(classes[0]), 2)

        return jsonify({"prediction": predicted_class, "confidence": confidence})

    else:
        return jsonify({"error": "No file uploaded"}), 400

if __name__ == "__main__":
    # Run the app with gunicorn server
    app.run()
