import { Link } from "react-router-dom";
import { specialityData } from "../constants";

const SpecialityMenu = () => {
  return (
    <section
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
    >
      <h1 className="text-3xl font-medium">Find by Speciality </h1>
      <p className="max-w-md text-center text-base">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex justify-center gap-6 pt-8 w-full text-center flex-wrap">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/doctors/${item.speciality}`}
            key={index}
            className="flex flex-col justify-center items-center text-sm cursor-pointer hover:translate-y-[-10px] duration-500"
          >
            <img
              className="w-16 sm:w-24 mb-2"
              src={item.image}
              alt={item.image}
              width={126}
              height={126}
            />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialityMenu;
