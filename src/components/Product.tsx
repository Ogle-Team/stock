import React from "react";
import Image from "next/image";
import mobileDevicesImage from "@/images/product.png";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const ProductSection: React.FC = () => {
  return (
    <div className="relative h-[903px] max-w-[1280px]  flex  justify-between">
      <div className="absolute left-0 top-0 ">
        <Image
          src={mobileDevicesImage}
          alt="Mobile Devices"
          width={576}
          height={512}
          objectFit="cover"
        />
      </div>
      <div></div>
      <div className="w-[497px]  h-[480px]  ">
        <SectionHeader title="Product" text="Access wide range of stocks" />
        <p className="text-[20px] pt-[20px] leading-[30px] text-[#3B4B4B]">
          Access a wide range of stocks. Stocks are the cornerstone of modern
          investing, offering you the opportunity to own a piece of the
          world&apos;s most influential companies. At [Your Trading Platform],
          we make stock trading accessible, intuitive, and rewarding.
        </p>
        <p className="text-[20px] pt-[20px] leading-[30px] text-[#3B4B4B]">
          Access a wide range of stocks from various sectors and markets,
          including technology, healthcare, finance, and more. Invest in
          companies you believe in and see your portfolio grow. Stay updated
          with live stock prices, charts, and news. Make informed decisions with
          access to real-time market information.
        </p>
        <div className="pt-[48px]">
          <Button text="Start trading" />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
