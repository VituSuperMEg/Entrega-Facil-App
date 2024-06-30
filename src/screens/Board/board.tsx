import { useState } from "react";
import { Step } from "../../components/Step/step";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";


export function Board() {
  const [step, setStep] = useState("msg1");
  return (
    <>
      {step === "msg1" && (
        <Step
          img={img1}
          title="Acompanhe seu pacote a cada tipo do caminho!"
          subtitle="mantenha-se sempre informado sobre o paradeiro dos seus pacotes"
          onNext={() => setStep("msg2")}
        />
      )}
      {step === "msg2" && (
        <Step
          img={img2}
          title="Acompanhe seu pacote a cada tipo do caminho!"
          subtitle="mantenha-se sempre informado sobre o paradeiro dos seus pacotes"
          prev
          onPrev={() => setStep("msg1")}
          onNext={() => setStep("msg3")}
        />
      )}
      {step === "msg3" && (
        <Step
          img={img3}
          title="Acompanhe seu pacote a cada tipo do caminho!"
          subtitle="mantenha-se sempre informado sobre o paradeiro dos seus pacotes"
          prev
          onPrev={() => setStep("msg2")}
          link="Login"
        />
      )}
    </>
  );
}
