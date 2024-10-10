import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Button from "../components/Button";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="mb-10 sm:mb-28">
      <div>
        <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
          My appointments
        </p>
        <div>
          {doctors.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-3 border-b"
            >
              <div>
                <img
                  className="w-32 bg-indigo-50"
                  src={item.image}
                  alt="image"
                />
              </div>
              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">{item.name}</p>
                <p>{item.speciality}</p>
                <p className="text-zinc-700 font-medium my-1">Address:</p>
                <p className="text-xs">{item.address.line1}</p>
                <p className="text-xs">{item.address.line2}</p>
                <p className="text-xs mt-2">
                  <span className="text-sm text-neutral-700 font-medium pr-1">
                    Date & Time:
                  </span>
                  25, July, 2024 | 8:30 PM
                </p>
              </div>
              <div></div>
              <div className="flex flex-col gap-2 justify-end text-sm">
                <Button label="Pay online" />
                <Button
                  label="Cancel appointment"
                  backgroundColor="bg-white"
                  borderColor="border-[#BABABA]"
                  textColor="text-[#4B5563]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
