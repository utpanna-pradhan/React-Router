import React from "react";

function Terms() {
  return (
    <div className="flex flex-col justify-items-center items-center mx-auto w-full text-center p-8">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>
      <p>By using this website, you agree to the following terms:</p>
      <ul>
        <li>
          This website is for educational and demonstration purposes only.
        </li>
        <li>No personal data is collected or shared.</li>
        <li> All content is provided “as is” without any warranty.</li>
        <li> We reserve the right to modify or remove content at any time.</li>
      </ul>
    </div>
  );
}

export default Terms;
