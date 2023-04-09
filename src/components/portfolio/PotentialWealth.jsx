import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-wasm';
import '@tensorflow/tfjs-layers';
import './Portfolio.css';

const lstmModel = tf.sequential({
  layers: [
    tf.layers.lstm({
      units: 50,
      inputShape: [10, 1],
      returnSequences: true,
    }),
    tf.layers.dropout({ rate: 0.2 }),
    tf.layers.timeDistributed({
      layer: tf.layers.dense({
        units: 1,
        activation: 'linear',
      }),
    }),
  ],
});

const PotentialWealth = () => {
  const [inputs, setInputs] = useState(new Array(10).fill(0));
  const [predicted, setPredicted] = useState([]);

  const handleChange = (e, i) => {
    const value = parseFloat(e.target.value);
    const newInputs = [...inputs];
    newInputs[i] = value;
    setInputs(newInputs);
  };

  const handleClick = async () => {
    const inputTensor = tf.tensor(inputs, [1, 10, 1]);
    const outputTensor = lstmModel.predict(inputTensor);
    const predictedValues = await outputTensor.data();
    const predictedArray = Array.from(predictedValues).map((val) =>
      Math.max(1, val.toFixed(2))
    );
    setPredicted(predictedArray.slice(-5));
    await tf.nextFrame();
  };
  return (
    <div className="wealth__container">
      <div className="wealth__inputs">
        <h2>Inputs</h2>
        {inputs.map((value, i) => (
          <div className="given__inputs" key={i}>
            <h2>Input {i + 1}</h2>
            <input
              type="number"
              min="0"
              step="0.01"
              value={value}
              onChange={(e) => handleChange(e, i)}
            />
          </div>
        ))}
      </div>
      <button className="predict__button button" onClick={handleClick}>
        Predict
      </button>
      <div className="wealth__predicted">
        <h2>Predicted values:</h2>
        {predicted.map((value, i) => (
          <p key={i}>{value.toFixed(2)}</p>
        ))}
      </div>
    </div>
  );
};

export default PotentialWealth;