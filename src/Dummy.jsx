import React, { useContext } from "react";
import { AmountContext } from "./context/AmountContext";
import { useNavigate } from "react-router-dom";

const Dummy = () => {
  const { amount, setAmount } = useContext(AmountContext);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/qr");
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="p-5 flex flex-col justify-center gap-5">
      <h1 className="text-xl">
        This is a Dummy Page to enter the Amount and generate a Dynamic QR.{" "}
        <br />
        The Amount will be passed from the Mobile App
      </h1>
      <div>
        <input
          type="text"
          name="amount"
          className="w-full border border-solid border-black rounded px-3 py-2"
          placeholder="Enter Amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <button
        className="bg-[--primaryColor] text-white rounded py-2 px-3"
        onClick={handleSubmit}
      >
        Generate QR
      </button>
    </div>
  );
};

export default Dummy;
