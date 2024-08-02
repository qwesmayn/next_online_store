import { FC } from "react";
import Image from "next/image";
import appleLogo from "/public/apple.png";
import sonyLogo from "/public/sony.png";
import samsungLogo from "/public/samsung.png";
import canonLogo from "/public/Canon.png";
import huaweiLogo from "/public/huawei.png";
import lenovoLogo from "/public/Lenovo.png";

const logos = [
  { src: appleLogo, width: 46, height: 56, alt: "appleLogo" },
  { src: sonyLogo, width: 200, height: 34, alt: "sonyLogo" },
  { src: samsungLogo, width: 214, height: 33, alt: "samsungLogo" },
  { src: canonLogo, width: 174, height: 30, alt: "canonLogo" },
  { src: huaweiLogo, width: 90, height: 68, alt: "huaweiLogo" },
  { src: lenovoLogo, width: 153, height: 49, alt: "len ovoLogo" },
];

const logosDoubled = [...logos, ...logos, ...logos, ...logos];

const Carousel: FC = () => {
  return (
    <div className="overflow-hidden relative w-full">
      <div className="flex items-center space-x-14 animate-marquee">
        {logosDoubled.map((logo, index) => (
          <div className="flex-none pr-4" key={index}>
            <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
