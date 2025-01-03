import React from "react";
import data from "../data/dataEng.json";
import Image from "../../public/assets/images/image2.png";

function Profile() {
  return (
    <div className="bg-[#4731D3] w-screen">
      <div className="flex flex-col justify-center  p-4">
        <h1 className="text-[#CBF281] flex justify-start m-4">
          {data.profile.profileH}
        </h1>
        <div
          className="flex flex-row items-center
         justify-between gap-8"
        >
          <div className="flex flex-col items-start m-4 gap-2 w-8/12">
            <h2 className="text-white mb-4">{data.profile.basicInfo}</h2>

            {[
              {
                label: data.profile.birthday,
                value: data.profile.birthdayDetail,
              },
              { label: data.profile.city, value: data.profile.cityDetail },
              { label: data.profile.edu, value: data.profile.eduDetail },
              { label: data.profile.prefer, value: data.profile.preferD },
            ].map((item, index) => (
              <div className="flex items-center gap-4  " key={index}>
                <p className=" text-[#CBF281] text-start">{item.label}</p>
                <p className="text-white text-right w-fit">{item.value}</p>
              </div>
            ))}
          </div>

          <img
            src={Image}
            alt="image"
            className="w-32 h-32 rounded-full object-cover mr-4"
          />

          <div className="flex flex-col w-1/3">
            <h2 className="text-white">{data.profile.aboutH}</h2>
            <p className="text-white text-sm">{data.profile.aboutText1}</p>
            <p className="text-white text-sm">{data.profile.aboutText2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
