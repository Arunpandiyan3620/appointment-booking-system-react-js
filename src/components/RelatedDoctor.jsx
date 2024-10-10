import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const RelatedDoctor = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, docId, speciality]);

  return (
    <section className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="max-w-lg text-center text-base">
        Simply browse through our extensive list of trusted doctors.
      </p>
      {/* Check if the relDoc array is empty */}
      {relDoc.length === 0 ? (
        <p className="text-base text-center text-gray-500">
          No related doctors available.
        </p>
      ) : (
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 mb-10">
          {relDoc.slice(0, 5).map((item, index) => (
            <Card
              key={index}
              imgURL={item.image}
              name={item.name}
              speciality={item.speciality}
              onClick={() => navigate(`/appointment/${item._id}`)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default RelatedDoctor;
