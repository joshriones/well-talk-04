import React from "react";
import TextInput from "@/components/ui/inputs/TextInput";

const InputInstitutionalInfo = ({ email, setEmail, idno, setIdNo }) => {
  return (
    <>
      <div className="w-1/2">
        <TextInput
          label="Institutional Email Address"
          value={email}
          onChange={() => setEmail}
          type="email"
        />
      </div>
      <div className="w-1/2">
        <TextInput
          label="ID Number"
          value={idno}
          onChange={setIdNo}
          type="text"
        />
      </div>
    </>
  );
};

export default InputInstitutionalInfo;
