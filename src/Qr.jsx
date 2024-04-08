import React, { useContext, useState } from "react";
import QRCode from "qrcode.react";
import { AmountContext } from "./context/AmountContext";
import logo from "./assets/GTN-Logo.png";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const Qr = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { amount } = useContext(AmountContext);
  const navigate = useNavigate();

  const upiId = "8787795724@ybl"; // Replace the UPI id with GTN's UPI
  const name = "kumghato khala"; // Replace the name with GTN's Name
  const note = "Money Donation";
  const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=${note}`;

  const cloudname = import.meta.env.VITE_CLOUDINARY_CLOUDNAME;
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,
        formData
      )
      .then(() => {
        const fileInput = document.querySelector('input[type="file"]');
        fileInput.value = "";
        setImage(null);
        setIsLoading(false);
        toast.success("Image uploaded");
        setTimeout(async () => {
          navigate("/success");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.error("Image upload failed, Please try again");
      });
  };

  return (
    <>
      <div className="p-7 h-screen flex flex-col items-center justify-center">
        <img className="w-full sm:w-[50%]" src={logo} alt="logo" />
        <div className="w-full py-5 px-3 border border-solid border-black mt-5 text-center">
          <div>
            <h1>
              Scan the QR code to make the donation to{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://givetheneedy.org.in/"
                target="_blank"
              >
                GiveTheNeedy.org
              </a>
              .
            </h1>
          </div>
          <div className="w-fit m-auto p-5">
            <QRCode size={250} value={upiUrl} />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="p-5 ">Please upload the payment screenshot.</h1>
            <input
              type="file"
              className="border border-solid border-black rounded"
              onChange={handleImageChange}
            />
            <button
              disabled={isLoading}
              onClick={handleUpload}
              className="border boder-solid border-[--primaryColor] bg-[--primaryColor] py-1 px-3 rounded text-white hover:bg-white hover:text-[--primaryColor]"
            >
              {isLoading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qr;
