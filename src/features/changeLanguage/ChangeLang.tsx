import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores/store";
import React, { useState } from "react";
import { changeLgg } from "./changeLang";

export default function ChangeLang() {
  const [lang, setlang] = useState<string>("vi");
  const { value } = useSelector((state: RootState) => state.changeLang);

  const dispath = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setlang(e.target.value);
    dispath(changeLgg(e.target.value));
  };

  return (
    <div className="lang">
      <select name="lang" id="lang" value={lang} onChange={handleChange}>
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>

      <div>{value === "vi" ? "Hoc vien Rikkei" : "Rikkei Academy"}</div>
    </div>
  );
}
