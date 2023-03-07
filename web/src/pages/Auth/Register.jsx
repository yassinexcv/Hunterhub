import React from "react";
import { useState } from "react";
import m from "../../assets/link2.png";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Registration() {

  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ville, setVille] = useState("");
    const [region, setRegion] = useState("");
    const [prenom, setPrenom] = useState("");
    const [nom , setNom] = useState("");

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, nom, prenom, region, ville }),
            });
            const data = await response.json();

            if (data.error) {
                toast.error(data.error);
            } else {
                localStorage.setItem('token', data.token);
                toast.success('Login Successful');
                window.location.href = '/dashboard';
            }
        } catch (err) {
            console.log(err);
            toast.error('Something went wrong');
        }

    };





    return (
    

        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <div className="flex items-center justify-center">
                    <span className="text-xl font-semibold text-gray-800">
                        <img
                            src={m}
                            alt=""
                            style={{ width: 200, height: 200, resizeMode: 'contain', marginBottom: 20 }}
                        />
                    </span>
                </div>
                <form className="mt-6">
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Nom
                        </label>
                        <input
                            type="text"
                            name="nom"
                            placeholder="Nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Prenom
                        </label>
                        <input
                            type="text"
                            name="prenom"
                            placeholder="Prenom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Ville
                        </label>
                        <input

                            type="text"
                            name="ville"
                            placeholder="Ville"
                            value={ville}
                            onChange={(e) => setVille(e.target.value)}
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Region
                        </label>
                        <input

                            type="text"
                            name="region"
                            placeholder="Region"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <button
                            type="button"
                            onClick={handleRegister}
                            className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>




                    
    );
}