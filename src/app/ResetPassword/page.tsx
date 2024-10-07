"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { confirmThePasswordReset } from "../firebase/config";
import toast, { Toaster } from "react-hot-toast";

const defaultFormFields = {
  password: "",
  confirmPassword: "",
};

function PasswordReset() {
  const searchParams = useSearchParams();
  const [successMessage, setSuccessMessage] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { password, confirmPassword } = formFields;

  // Get oobCode from the URL
  const oobCode = searchParams.get("oobCode");

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords did not match.");
      return;
    }

    try {
      if (oobCode) {
        toast.success("Success! Your password has been changed successfully.");
        await confirmThePasswordReset(oobCode, confirmPassword);
        resetFormFields();
        setSuccessMessage(true);
      } else {
        alert("Something is wrong; try again later!");
        console.log("missing oobCode");
      }
    } catch (error: any) {
      if (error.code === "auth/invalid-action-code") {
        alert("Something is wrong; try again later.");
      }
      console.log(error.message);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Toaster />
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Reset Password
      </h2>
      {successMessage ? (
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          {/* <h3 className="text-green-500 text-lg font-semibold mb-4">
            Success! Your password has been changed successfully.
          </h3> */}
          <a
            href="/login"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Go to the Login page
          </a>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="New Password"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Reset Password"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer"
              />
            </div>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Remember your password?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default PasswordReset;
