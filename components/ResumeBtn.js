// next image
import Image from "next/image";

// icons
import { HiArrowDown } from "react-icons/hi2";

// saving resume
import { saveAs } from "file-saver";

const ResumeBtn = () => {
  const handleDownload = () => {
    const resumePath = "/Resume.pdf";
    saveAs(resumePath, "Tushar-Resume.pdf");
  };

  return (
    <div className="mx-auto xl:mx-0">
      <button
        onClick={handleDownload}
        className="relative w-[160px] h-[160px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={140}
          height={140}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowDown className="absolute text-4xl group-hover:translate-y-2 transition-all duration-300" />
      </button>
    </div>
  );
};

export default ResumeBtn;
