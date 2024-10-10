import { useNavigate } from "react-router-dom";
import { appointment_img } from "../constants";
import Button from "./Button";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 lg:md:mx-10">
      {/* Left section */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <p className="max-w-xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          Book Appointment With 100+ Trusted Doctors
        </p>
        <div className="max-w-60 mt-5">
          <Button
            label="Create account"
            backgroundColor="bg-white"
            textColor="text-[#4B5563]"
            borderColor="border-white"
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
          />
        </div>
      </div>

      {/* Right section */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          src={appointment_img}
          alt="appointment-img"
          className="w-full absolute bottom-0 right-0 max-w-md"
        />
      </div>
    </section>
  );
};

export default Banner;
