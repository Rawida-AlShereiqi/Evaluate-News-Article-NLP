import axios from 'axios';
import { validateURL } from "./checkURL";

const input = document.querySelector("form input");
const error = document.querySelector("#error");
const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");
const score_tag = document.getElementById("score_tag");
const results = document.querySelectorAll("#results > div");

document.addEventListener("DOMContentLoaded", () => {
  error.style.display = "none";
});

const handleSubmit = async (event) => {
  event.preventDefault();

  const url = input.value;
  if (!validateURL(url)) {
    showError("Invalid URL");
    return;
  }

  try {
    const { data } = await axios.post("http://localhost:3000/", { URI: url }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { msg, sample } = data;
    if (msg) {
      showError(msg);
      return;
    }

    showResults(sample);
  } catch (error) {
    showError("An error occurred while processing the request.");
  }
};

const showError = (msg) => {
  error.innerHTML = msg;
  results.forEach(result => {
    result.style.display = "none";
  });
  error.style.display = "block";
};

const showResults = (sample) => {
  error.style.display = "none";
  results.forEach(result => {
    result.style.display = "block";
  });
  agreement.innerHTML = `Agreement: ${sample.agreement}`;
  subjectivity.innerHTML = `Subjectivity: ${sample.subjectivity}`;
  confidence.innerHTML = `Confidence: ${sample.confidence}`;
  irony.innerHTML = `Irony: ${sample.irony}`;
  score_tag.innerHTML = `Score Tag: ${sample.score_tag}`;
};

export { handleSubmit };
