// import { assets } from "../../assets/assets.js";
// import { useContext, useState } from "react";
// import toast from "react-hot-toast";
// import { AppContext } from "../../context/AppContext.jsx";
// const AdminLogin = () => {
//   const { navigate, setAdmin, axios } = useContext(AppContext);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/api/admin/login", formData);
//       if (data.success) {
//         toast.success(data.message);
//         setAdmin(true);
//         navigate("/admin");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//   return (
//     <div
//       className="py-12 h-screen bg-[#0B482F]"
//       style={{ backgroundImage: `url(${assets.footer_img})` }}
//     >
//       <div>
//         <h1 className="text-4xl text-white font-bold text-center mb-8 capitalize">
//           Admin Login
//         </h1>
//         <form
//           onSubmit={submitHandler}
//           className="max-w-md mx-auto text-white p-4 border border-white rounded"
//         >
//           <div className="text-white flex flex-col gap-2 mb-4">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               value={formData.email}
//               placeholder="Enter your email"
//               required
//               className="w-full outline-none border border-white py-3 p-2 rounded"
//             />
//           </div>
//           <div className="text-white flex flex-col gap-2 mb-4">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               value={formData.password}
//               placeholder="Enter your password"
//               required
//               className="w-full outline-none border border-white py-3 p-2 rounded"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-primary text-white cursor-pointer w-full py-3 rounded"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default AdminLogin;


import { assets } from "../../assets/assets.js";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { AppContext } from "../../context/AppContext.jsx";

const AdminLogin = () => {
  const { setAdmin } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/admin/login", formData);

      if (data.success) {
        toast.success(data.message || "Login successful!");
        setAdmin(true);
        navigate("/admin");
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div
      className="py-12 h-screen bg-[#0B482F] bg-cover bg-center flex flex-col justify-center"
      style={{ backgroundImage: `url(${assets.footer_img})` }}
    >
      <div>
        <h1 className="text-4xl text-white font-bold text-center mb-8 capitalize">
          Admin Login
        </h1>

        <form
          onSubmit={submitHandler}
          className="max-w-md mx-auto text-white p-6 border border-white rounded-xl bg-black/40 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Enter your email"
              required
              className="w-full outline-none border border-white py-3 px-3 rounded bg-transparent text-white placeholder-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Enter your password"
              required
              className="w-full outline-none border border-white py-3 px-3 rounded bg-transparent text-white placeholder-gray-300"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition-all text-white cursor-pointer w-full py-3 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
