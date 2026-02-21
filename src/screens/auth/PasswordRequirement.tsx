import React from "react";

const PasswordRequirement = ({ password = "", confirmPassword = "" }) => {
  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    match: confirmPassword && password === confirmPassword,
  };

  const getClass = (condition) =>
    condition ? "text-green-600" : "text-gray-600";

  return (
    <div className="bg-[#e5deff]/50 border border-[#c9b8ff]/60 rounded-xl p-3 text-sm mb-auto">
      <p className="font-medium text-gray-900 mb-1">
        Password must contain:
      </p>

      <ul className="space-y-1 text-xs">
        <li className={getClass(rules.length)}>• At least 8 characters</li>
        <li className={getClass(rules.uppercase)}>• One uppercase letter</li>
        <li className={getClass(rules.number)}>• One number</li>
        <li className={getClass(rules.match)}>• Passwords match</li>
      </ul>
    </div>
  );
};

export default PasswordRequirement;
