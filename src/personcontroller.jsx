
import { useState, useEffect } from 'react';
import Person from './Person'; 

export default function PersonController() {
  const [person, setPerson] = useState(null); 

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const result = await response.json();

        const formattedPerson = {
            firstName: result.results[0].name.first,
            lastName: result.results[0].name.last,
            email: result.results[0].email
          };
    
         
          setPerson(formattedPerson);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <div>
      <h1>Random User Info</h1>
      <Person person={person} /> 
    </div>
  );
}
