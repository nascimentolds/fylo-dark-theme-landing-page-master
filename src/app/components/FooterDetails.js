import Image from "next/image";

function FooterDetails({icon, description}) {
  return (
    <div className="flex justify-start text-base my-3">
      <div className="mt-2">
        <Image src={icon} alt="Location" />
      </div>
      <span className="w-[300px] ml-6">
        {description}
      </span>
    </div>
  )
}

export default FooterDetails;