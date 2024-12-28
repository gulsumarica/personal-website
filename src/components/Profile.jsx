import React from "react";
import data from "../data.json";
import Image from "../assets/images/image 2.png";

function Profile() {
  return (
    <div>
      <h1 className="flex items-start">Profile</h1>
      <div className="flex flex-row">
        <div className="flex flex-col items-center">
          <h2>Basic Information</h2>
          <div className="flex items-center mr-4">
            <h3 className="mr-2">Doğum Tarihi</h3>
            <p>{data.dogumTarihi}</p>
          </div>
          <div className="flex items-center mr-4">
            <h3 className="mr-2">İkamet Şehri</h3>
            <p>{data.ikamet}</p>
          </div>
          <div className="flex items-center mr-4">
            <h3 className="mr-2">Eğitim Durumu</h3>
            <p>{data.egitim}</p>
          </div>
          <div className="flex items-center mr-4">
            <h3 className="mr-2">Tercih Ettiği Rol</h3>
            <p>{data.rol}</p>
          </div>
        </div>
        <img src={Image} alt="image" />
        <div>
          <h2>About Me</h2>
          <p>{data.about}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
