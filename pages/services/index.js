// components
import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";

// next link
import Link from "next/link";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap:x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Catalyzing Digital Excellence: From Imaginative Designs to
              Seamless Development, I Offer a Holistic Range of Services to
              Elevate Your Online Presence.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <Link href={"/contact"}>
              <ServiceSlider />
            </Link>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
