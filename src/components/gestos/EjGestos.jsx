import Webcam from "react-webcam";
import { useRef, useState, useEffect } from "react";
import * as handTrack from 'handtrackjs';
import Texto from './Texto'


export default function EjGestos() {
  const [label, setLabel] = useState(null);
  const [isPointing, setIsPointing] = useState(false);
  
  const [model, setModel] = useState(null);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const defaultParams = {
    flipHorizontal: false,
    outputStride: 16,
    imageScaleFactor: 1,
    maxNumBoxes: 20,
    iouThreshold: 0.2,
    scoreThreshold: 0.6,
    modelType: "ssd320fpnlite",
    modelSize: "large",
    bboxLineWidth: "2",
    fontSize: 17,
  };

  const runHandtrack = async () => {
    const model = await handTrack.load(defaultParams);
    setModel(model);
    console.log("Model loaded");
  };

  const runDetection = async (model) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
    
      //When user scrolls down to very end of the page, it still detects gestures
      await video.play();

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const predictions = await model.detect(video);
      // console.log(predictions);

      let detectedLabel = "detecting...";

      if ( predictions.length > 0 ) {
        detectedLabel = predictions[predictions.length - 1].label;
        setLabel(detectedLabel);
      }

      setIsPointing(false);

      if ( detectedLabel === "open" ) {
        console.log("scrolling down");
        window.scrollBy(0, window.innerHeight);
      } else if ( detectedLabel === "closed" ) {
        console.log("scrolling up");
        window.scrollBy(0, -window.innerHeight);
      } else if ( detectedLabel === "point" ) {
        console.log("pointing");
        setIsPointing(true);
      } else {
        console.log("detecting...");
      }
    }
  };

  useEffect(() => {
    runHandtrack();
  }, []);

  useEffect(() => {
    if (model) {
      const interval = setInterval(() => {
        runDetection(model);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [model]);

  return (
    <>
        <div style = {{
          alignItems: 'center',
          display: 'flex',
          backgroundColor: isPointing ? 'blue' : 'pink',
          flexDirection: 'column',
          }}>
            <div>
                <h3> Ejemplo Detección Gestos Mano: abierta y cerrada </h3>
                <p> Tienes que conceder acceso a la webcam </p>
            </div>
            <div>
                <Webcam
                    ref={webcamRef}
                    style={{
                    width: 500,
                    height: 500,
                }}
            />
            <canvas
                ref={canvasRef}
                  style={{
                    width: 100,
                    height: 100,
                  }}
            />
        </div>
      </div>

      <Texto />
      


    </>
  );
}
