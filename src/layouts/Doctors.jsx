/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [activeSpeciality, setActiveSpeciality] = useState("All Doctors");
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  useEffect(() => {
    if (!speciality) {
      setActiveSpeciality("All Doctors");
    } else {
      setActiveSpeciality(speciality);
    }
  }, [speciality]);

  const uniqueSpecialities = [
    "All Doctors",
    ...new Set(doctors.map((doctor) => doctor.speciality)),
  ];

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 mb-28">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filter Doctors
        </button>
        <div
          className={`${
            showFilter ? "flex" : "hidden sm:flex"
          } flex-col gap-4 text-sm text-gray-600 sm:sticky top-3 left-0 sm:w-auto w-full`}
        >
          {uniqueSpecialities.map((speciality, index) => (
            <p
              key={index}
              onClick={() => {
                speciality === "All Doctors"
                  ? navigate("/doctors")
                  : navigate(`/doctors/${speciality}`);
              }}
              className={`w-full whitespace-nowrap px-3 py-1.5 border border-gray-600 rounded transition-all cursor-pointer text-center ${
                activeSpeciality === speciality
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
            >
              {speciality}
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <Card
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              imgURL={item.image}
              name={item.name}
              speciality={item.speciality}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
