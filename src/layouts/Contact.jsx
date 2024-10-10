import Button from "../components/Button";
import { contact_image } from "../constants";

const Contact = () => {
  return (
    <div className="mb-28">
      <div className="text-center text-2xl text-gray-500">
        Contact <span className="text-gray-700 font-semibold">US</span>
      </div>

      <div className="mt-10 flex flex-col justify-center md:flex-row gap-10 text-sm">
        <img
          src={contact_image}
          alt="contact-img"
          className="w-full md:max-w-[360px] rounded-md"
          width={438}
          height={445}
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our OFFICE</p>
          <p className="text-gray-600">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-600">
            Tel: (415) 555‑0132 <br />
            Email: greatstackdev@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at PRESCRIPTO
          </p>
          <p className="text-gray-600">
            Learn more about our teams and job openings.
          </p>
          <div className="w-2/4">
            <Button
              label="Explore Jobs"
              backgroundColor="bg-white"
              textColor="text-[#1F2937]"
              borderColor="border-[#1F2937]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
