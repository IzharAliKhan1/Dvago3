
import React from "react";
import Image from "next/image";

// Use images from the public folder via absolute paths
const Images1 = "/homemarketingdivimg/Cool20copy1.webp";
const Images2 = "/homemarketingdivimg/pic2.webp";
const Images3 = "/homemarketingdivimg/banar3.webp";

const HomeMarketingdiv = () => {
  return (
    <div className="w-full bg-gray-100 py-10">

      {/* Top Two Images */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-center">

        <div className="flex-1">
          <Image src={Images1} alt="Image1" width={800} height={500} className="rounded-2xl w-full"/>
        </div>

        <div className="flex-1">
          <Image src={Images2} alt="Image2" width={800} height={500} className="rounded-2xl w-full"/>
        </div>

      </div>

      {/* Bottom Full Banner */}
      <div className="max-w-6xl mx-auto mt-10">
        <Image src={Images3} alt="Banner" width={1200} height={400} className="rounded-2xl w-full"/>
      </div>

    </div>
  );
};

export default HomeMarketingdiv;