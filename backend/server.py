from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image,ImageOps
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__)
CORS(app)
model = load_model("model.keras")  # make sure digit.keras is in the same folder

@app.route("/predict", methods=["POST"])
def predict():
    try:
        file = request.files['image']  # from a form or React using FormData
        img = Image.open(file).convert('L')
        img = img.resize((28, 28))
        img = ImageOps.invert(img)
    
        img_arr= np.array(img)/255
        input_array = img_arr.reshape(1, 28, 28) 
    # Predicting 
        prediction = model.predict(input_array)
        result = int(np.argmax(prediction))

        confidence= float(np.max(prediction))
    
        return jsonify({"prediction": result, "confidence": confidence})
    except Exception as e:
        print('Server Error: ',e)
        return jsonify({"error": "Prediction failed", "message": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
