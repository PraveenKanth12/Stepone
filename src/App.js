import { useState } from "react";
const messages = [
  "Have fun Learning React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setisOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgcolor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>🙂</span> Previous
            </Button>
            <Button bgcolor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>🤩</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgcolor, onClick, children }) {
  return (
    <div>
      <button
        style={{ backgroundColor: bgcolor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <div>
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}
