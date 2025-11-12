import React, { useEffect, useState } from "react";

interface Partner {
  name: string;
  logo: string;
  website: string;
}

const PartnersGrid: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    // You can replace this with an API call if needed
    fetch("/data/partners.json")
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => console.error("Error loading partners:", err));
  }, []);

  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        Our Partners
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 w-32 h-32 sm:w-40 sm:h-40"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-16 sm:max-h-20 object-contain group-hover:opacity-80 transition-opacity"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartnersGrid;
