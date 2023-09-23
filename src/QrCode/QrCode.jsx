import React, { useState } from "react";
import "./QrCode.css";
import QRCode from "qrcode";

function QrCode() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const generateQRcode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 300,
        margin: 1,
        color: {
          dark: "#000000ff",
          light: "#ffffffff",
        },
      },
      (err, url) => {
        if (err) {
          return console.log(err);
        }
        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="QR">
      <div className="box">
        <input
          type="text"
          placeholder="Type here..."
          className="input"
          autoFocus
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
        />
        <button className="generate" type="submit" onClick={generateQRcode}>
          Generate QR code
        </button>
      </div>

      <div>
        {qrcode && (
          <>
            <img src={qrcode} alt=" " />
            <a href={qrcode} download="qrcode.png">
              <h3>Download</h3>
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default QrCode;
