import React, { useEffect, useState } from "react";

function UserData() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const fakeCallApi = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simuler la réponse de l'API
        const data = {
          name: "John Doe",
          email: "johndoe@example.com",
        };
        resolve(data);
      }, 2000); // Simuler un délai de 2 secondes
    });
  };

  useEffect(() => {
    if (isLoading) {
      fakeCallApi().then((response) => {
        setUserData(response);
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  const fetchDataWithoutUseEffect = async () => {
    setIsLoading(true);
    const response = await fakeCallApi();
    setUserData(response);
    setIsLoading(false);
  };

  const fetchDataWithEffect = () => {
    setIsLoading(true);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchDataWithoutUseEffect}
      >
        Charger les données
      </button>
      {isLoading ? (
        <p>Chargement des données...</p>
      ) : userData ? (
        <div>
          <p>Nom : {userData.name}</p>
          <p>Email : {userData.email}</p>
        </div>
      ) : (
        <p>Aucun utilisateur trouvé</p>
      )}
    </div>
  );
}

export default UserData;
