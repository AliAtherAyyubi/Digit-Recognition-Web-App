# 🧠 Handwritten Digit Recognition Web App

A full-stack web application that recognizes handwritten digits using a Convolutional Neural Network (CNN) built with TensorFlow. The frontend is developed using React.js, while the backend is powered by Flask.

Users can draw a digit on a canvas, and the model will predict what number it is (0–9).

---

## ✨ Features

- Draw digits directly on a canvas
- Real-time digit prediction using a trained CNN
- Frontend built in **React.js**
- Backend API using **Flask**
- Model trained with **TensorFlow**
- Image preprocessing with **Pillow**
- Clean and responsive UI

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- HTML5 Canvas API
- CSS / Styled Components

**Backend:**
- Python
- Flask
- TensorFlow / Keras
- NumPy
- Pillow (PIL)

---

## 🧪 Model

The CNN was trained on the MNIST dataset with the following architecture:

- Conv2D → ReLU → MaxPooling
- Conv2D → ReLU → MaxPooling
- Flatten → Dense → Dropout → Output

Model achieves high accuracy on handwritten digit recognition.

---

## 🖼️ Screenshots

 ![](https://github.com/AliAtherAyyubi/Digit-Recognition-Web-App/blob/main/Screenshots/Screenshot%202025-06-13%20123648.png)
---

## 🧾 Installation & Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/AliAtherAyyubi/digit-recognition-app.git
cd digit-recognition-app
````

### 2. Set up the backend

```bash
cd server
pip install -r requirements.txt
python server.py
```

> Make sure you have Python 3.x and TensorFlow installed.
> The `model.keras` file should be placed in the same directory as `server.py`.

### 3. Set up the frontend

```bash
cd ../client
npm install
npm start
```

> Make sure the Flask server is running at `http://127.0.0.1:5000`

---



## 📜 License

This project is licensed under the MIT License.
