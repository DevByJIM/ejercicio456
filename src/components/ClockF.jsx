import { useState, useEffect } from "react";

const ClockF = () => {
  const initialUser = {
    nombre: "Martín",
    apellidos: "San José",
    edad: 0,
  };

  const [fecha, setFecha] = useState(new Date());
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    const setHora = setInterval(() => {
      setFecha(new Date());

       setUser(
           ...user,
          user.edad = user.edad + 1
       )
    }, 1000);
    return () => clearInterval(setHora);
  },[]);

  return (
    <>
      <div>
        <h2>
          Hora Actual:
          {fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {user.nombre} {user.apellidos}
        </h3>
        <h1>Edad: {user.edad}</h1>
      </div>
    </>
  );
};

export default ClockF;
