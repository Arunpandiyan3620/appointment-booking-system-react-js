import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="max-w-lg text-center text-base">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 mb-10">
        {doctors.slice(0, 10).map((item, index) => (
          <Card
            key={index}
            imgURL={item.image}
            name={item.name}
            speciality={item.speciality}
            onClick={() => navigate(`/appointment/${item._id}`)}
          />
        ))}
      </div>
      <Button
        label="More"
        textColor="text-gray-600"
        backgroundColor="bg-blue-100"
        borderColor="border-[#EAEFFF]"
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
      />
    </section>
  );
};

export default TopDoctors;
