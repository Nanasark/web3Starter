import {
    Inter,
    Lora,
    Poppins,
    Aleo,
    Inknut_Antiqua,
    Inika,
  } from "next/font/google";
  
  // define your variable fonts
  const lora = Lora({ subsets: ["latin"] });
  
  const poppins = Poppins({ weight: "300", subsets: ["latin"] });
  const aleo = Aleo({ subsets: ["latin"] });
  const inter = Inter({ subsets: ["latin", "greek"] });
  const inknut_antiqua = Inknut_Antiqua({
    subsets: ["latin", "devanagari"],
    weight: ["800"],
  });
  
  const inika = Inika({ subsets: ["latin"], weight: ["700"] });
  // // define 2 weights of a non-variable font
  // const sourceCodePro400 = Source_Sans_3({ weight: "400" });
  // const sourceCodePro700 = Source_Sans_3({ weight: "700" });
  
  // define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
  // const greatVibes = localFont({ src: "./GreatVibes-Regular.ttf" });
  
  export { poppins, lora, aleo, inter, inknut_antiqua, inika };