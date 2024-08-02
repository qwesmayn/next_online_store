import { ISlugCard } from "./slugCard.interface";
import mobile from "/public/mobile.jpg";
import monitor from "/public/monitor.jpg";
import wallet from "/public/wallet.jpg";
import headphones from "/public/headphones.jpg";
import watch_status from "/public/watch_status.jpg";
import camera from "/public/camera.jpg";
import game from "/public/game.jpg";
import data from "/public/data.jpg";
import devices from "/public/devices.jpg";

const slugFilters: ISlugCard[] = [
  {
    img: mobile,
    name: "Mobile",
    link: "mobile",
  },
  {
    img: monitor,
    name: "Laptop",
    link: "laptop",
  },
  {
    img: wallet,
    name: "Tablet",
    link: "wallet",
  },
  {
    img: headphones,
    name: "Audio",
    link: "headphones",
  },
  {
    img: watch_status,
    name: "Wearable",
    link: "watch_status",
  },
  {
    img: camera,
    name: "Camera",
    link: "camera",
  },
  {
    img: game,
    name: "Gaming",
    link: "game",
  },
  {
    img: data,
    name: "Network",
    link: "data",
  },
  {
    img: devices,
    name: "Accessories",
    link: "devices",
  },
];

export default slugFilters;
