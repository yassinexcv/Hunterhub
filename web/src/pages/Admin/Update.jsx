import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {toast} from 'react-toastify';

function UpdateSpot(props) {
    const navigate = useNavigate();
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [ville, setVille] = useState('');
    const [region, setRegion] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [file, setFile] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { id } = useParams();
  
    useEffect(() => {
      const getSpot = async () => {
        const response = await fetch(`http://localhost:5000/spot/getSpotById/${id}`);
        const data = await response.json();
        setNom(data.nom);
        setDescription(data.description);
        setVille(data.ville);
        setRegion(data.region);
        setLongitude(data.longitude);
        setLatitude(data.latitude);
      };
  
      getSpot();
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsPending(true);
  
      const formData = new FormData();
      formData.append('nom', nom);
      formData.append('description', description);
      formData.append('ville', ville);
      formData.append('region', region);
      formData.append('longitude', longitude);
      formData.append('latitude', latitude);
      formData.append('image', file);
  
      const response = await fetch(`http://localhost:5000/spot/updateSpot/${id}`, {
        method: 'PUT',
        body: formData,
    
      });
  
        if (response.ok) {
            toast.success('Spot updated');
            setIsPending(false);
            navigate('/update');
            } else {
            toast.error('Something went wrong');
            setIsPending(false);

        }
    };
    return (
        <div className="container mx-auto my-8 px-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="https://source.unsplash.com/featured/400x400/?beach"
                  alt="Beach"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Add a New Spot
                </div>
                <form onSubmit={handleSubmit} className="mt-6" encType="multipart/form-data" method="POST">
                  <div>
                    <label htmlFor="spot-name" className="block text-sm font-medium text-gray-700">
                      Spot name:
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="spot-name"
                        id="spot-name"
                        autoComplete="off"
                        required
                        className="shadow-sm focus:ring
                        focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="spot-description" className="block text-sm font-medium text-gray-700">
                      Spot description:
                    </label>
                    <div className="mt-1">
                      <textarea
    
    
                        id="spot-description"
                        name="spot-description"
                        rows="3"
                        className="shadow-sm focus:ring focus:border-blue-300 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="You can write a description about the spot"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="spot-city" className="block text-sm font-medium text-gray-700">
                      Spot city:
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="spot-city"
                        id="spot-city"
                        autoComplete="off"
                        required
                        className="shadow-sm focus:ring focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={ville}
                        onChange={(e) => setVille(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="spot-region" className="block text-sm font-medium text-gray-700">
                      Spot region:
                    </label>
                    <div className="mt-1">
                      <input
    
                        type="text"
                        name="spot-region"
                        id="spot-region"
                        autoComplete="off"
                        required
                        className="shadow-sm focus:ring focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="spot-longitude" className="block text-sm font-medium text-gray-700">
                      Spot longitude:
                    </label>
                    <div className="mt-1">
                      <input
    
                        type="text"
                        name="spot-longitude"
                        id="spot-longitude"
                        autoComplete="off"
                        required
                        className="shadow-sm focus:ring focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="spot-latitude" className="block text-sm font-medium text-gray-700">
                      Spot latitude:
                    </label>
                    <div className="mt-1">
                      <input
    
                        type="text"
                        name="spot-latitude"
                        id="spot-latitude"
                        autoComplete="off"
                        required
                        className="shadow-sm focus:ring focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="spot-image" className="block text-sm font-medium text-gray-700">
                      Spot image:
                    </label>
                    <div className="mt-1">
                      <input
                        type="file"
                        name="spot-image"
                        id="spot-image"
                        required
                        className="shadow-sm focus:ring focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                  </div>
                  {!isPending && <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Spot</button>}
                  {isPending && <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled>Adding Spot...</button>}
                </form>
              </div>
            </div>
          </div>
        </div>
      );
};

export default UpdateSpot;
            
