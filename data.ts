import googleIcon from "@/public/icon/google.svg";
import ODLogo from "@/public/icon/OD.png";
import BKLogo from "@/public/icon/BK.png";
import { StaticImageData } from "next/image";

export interface Client {
  id: number;
  name: string;
  logo: string | StaticImageData;
}

export const clientData = [
  { id: 1, name: "Zayans", logo: "" },
  { id: 2, name: "Ordhek deen", logo: ODLogo },
  { id: 3, name: "BracBank cholo", logo: BKLogo },
  { id: 4, name: "TMS", logo: "" },
  { id: 5, name: "VMS", logo: "" },
];
