import React from 'react'

const footerMiddle = () => {
  return (
    <div className="w-full bg-amazon_light">
      {/* ====== top start ====== */}
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div>
            <h3 className="text-white text-base font-semibold mb-3">
              {" "}
              Get To Know Us
            </h3>
          </div>
          <ul className="flex flex-col gap-2 ">
            <li className="footerLink">Careers</li>
            <li className="footerLink">Careers</li>
            <li className="footerLink">Careers</li>{" "}
            <li className="footerLink">Careers</li>
          </ul>
        </div>
      </div>
      {/* ====== top end ====== */}
      {/* ====== bottom start ====== */}
      {/* ====== bottom end ====== */}
    </div>
  );
}

export default footerMiddle