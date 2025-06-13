import React, { useEffect, useRef, useState } from "react";
import Button from "./button";
import Digit from "./digit";
import Button2 from "./button2";
import Modal from "./modal";

const CanvasDraw = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [digit, setDigit] = useState(null);
  const [isModal, setisModal] = useState(false)

  // Fill canvas with white on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white"; // white background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white"; 

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setDigit(null); // Reset the predicted digit
  };

  const predictDigit = async () => {
    const canvas = canvasRef.current;

    // Convert canvas to Blob
    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append("image", blob, "digit.jpg");

      try {
        const res = await fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        console.log(data)
        let {confidence,prediction} = data;

        if (confidence >0.8){
        setDigit(prediction); // Set the predicted digit

        }
        else{
          setDigit(null);
          setisModal(true)
           
          // alert('I cannot recognize this digit, please try again');
          clearCanvas();
        }
        // alert(`Prediction: ${data.prediction}`);
      } catch (err) {
        console.error("Error sending image:", err);
      }
    });
  };

  const downloadImg= ()=>{
    const canvas = canvasRef.current;
    const imageURL = canvas.toDataURL("image/jpg");

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "myDigit.jpg"; // File name
    link.click();
  }

  return (
    <div className="canvas-container">
      <div style={{ textAlign: "center" }}>
      <h2 className="digit-h">Draw a digit</h2>
      <canvas
        ref={canvasRef}
        width={280}
        height={280}
        style={{ border: "1px solid black", backgroundColor: "white" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <br />
      <br />
      <div className="btn-row">
        <Button2 btnAction={clearCanvas} name={'Clear'} />
      <Button btnAction={predictDigit} name={'Predict Digit'}/>
      </div>
      <br />
      <br />

      {/* <Button btnAction={downloadImg} name={'Download Image'} /> */}
    </div>
      <Digit digit={digit}/>
      <Modal
        isOpen={isModal}
        onClose={() => setisModal(false)}
        message="Sorry, I cannot recognize this digit. Please draw again."
      />
    </div>
  );
};

export default CanvasDraw;
