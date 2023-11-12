import React, { useState } from "react";

function Register() {
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const calculateProgress = () => {
    return (step / 4) * 100;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  const sendOtp = () => {
    // Simulate OTP sending logic (can be replaced with actual API call)
    setIsOtpVerified(true); // For demonstration, set isOtpVerified to true immediately
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-2 justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full mb-8">
        <div className={`step ${step === 1 ? "block" : "hidden"}`} id="step1">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Upload Image</h2>
          <label
            htmlFor="fileInput"
            className="cursor-pointer inline-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
              <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            Browse Photo
          </label>

          <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
            {image ? (
              <div className="w-48 h-48 rounded-full border border-gray-300 overflow-hidden">
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onClick={clearImage}
                />
              </div>
            ) : (
              "Click to add profile picture"
            )}
          </div>

          <input
            name="photo"
            id="fileInput"
            className="hidden"
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <div className={`step ${step === 2 ? "block" : "hidden"}`} id="step2">
          <h2 className="text-2xl font-semibold mb-4">
            Step 2: Enter Mobile Number
          </h2>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            placeholder="Mobile Number"
          />
          <button
            onClick={sendOtp}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send OTP
          </button>
        </div>

        <div className={`step ${step === 3 ? "block" : "hidden"}`} id="step3">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Verify OTP</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            placeholder="Enter OTP"
          />
          <button
            onClick={sendOtp} // Temporarily set to sendOtp, you can change this to verifyOtp after implementing the OTP verification logic
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Verify
          </button>
        </div>

        <div className={`step ${step === 4 ? "block" : "hidden"}`} id="step4">
          <h2 className="text-2xl font-semibold mb-4">
            Step 4: Enter Username, Password, and Email
          </h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            placeholder="Password"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            placeholder="Email"
          />
        </div>
      </div>

      <div className="w-full max-w-md mb-8">
        <div className="h-4 bg-gray-300 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full flex justify-between">
        <button
          className={`bg-gray-500 text-white px-4 py-2 rounded ${
            step === 1 ? "hidden" : "block"
          }`}
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            step === 4 ? "hidden" : "block"
          }`}
          onClick={nextStep}
        >
          {step === 3 ? "Verify OTP" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Register;
