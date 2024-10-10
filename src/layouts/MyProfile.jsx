import { useState } from "react";
import { userStaticData } from "../constants";
import Button from "../components/Button";

const MyProfile = () => {
  const [userData, setUserData] = useState(userStaticData);
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="mb-28 max-w-lg flex flex-col gap-2 text-sm">
      <img className="rounded w-36" src={userData.image} alt="" />

      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="border border-zinc-300 rounded p-2 mt-1 focus-visible:outline-none focus-within:border-zinc-400"
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="border-[border-zinc-300] h-[1px] mt-3" />
      <div>
        <p className="text-neutral-500 underline mt-2">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-gray-500">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
              className="border border-zinc-300 rounded p-2 mt-1 focus-visible:outline-none focus-within:border-zinc-400"
            />
          ) : (
            <p className="text-gray-500">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                className="w-full border border-zinc-300 rounded p-2 mt-1 focus-visible:outline-none focus-within:border-zinc-400"
              />
              <br />
              <input
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                className="w-full border border-zinc-300 rounded p-2 mt-3 focus-visible:outline-none focus-within:border-zinc-400"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
              className="border border-zinc-300 rounded p-2 mt-1 focus-visible:outline-none focus-within:border-zinc-400"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-500">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              className="border border-zinc-300 rounded p-2 mt-1 focus-visible:outline-none focus-within:border-zinc-400"
            />
          ) : (
            <p className="text-gray-500">{userData.dob}</p>
          )}
        </div>
      </div>
      <div>
        {isEdit ? (
          <div className="w-full sm:w-2/5 mt-3">
            <Button
              label="Save information"
              onClick={() => setIsEdit(false)}
              backgroundColor="bg-white"
              borderColor="border-[#4B5563]"
              textColor="text-[#4B5563]"
            />
          </div>
        ) : (
          <div className="w-full sm:w-1/3 mt-3">
            <Button
              label="Edit"
              onClick={() => setIsEdit(true)}
              backgroundColor="bg-white"
              borderColor="border-[#4B5563]"
              textColor="text-[#4B5563]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
