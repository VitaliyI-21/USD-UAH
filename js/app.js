let model;

async function loadModel() {
  model = await tf.loadLayersModel('model/model.json');
  console.log("Model loaded");
}

loadModel();

async function predict() {
  const input = document.getElementById("inputData").value
    .split(",")
    .map(Number);

  const tensor = tf.tensor(input)
    .reshape([1, input.length, 1]);

  const prediction = model.predict(tensor);
  const value = (await prediction.data())[0];

  document.getElementById("result").innerText =
    `Прогноз курсу USD/UAH: ${value.toFixed(2)}`;
}
