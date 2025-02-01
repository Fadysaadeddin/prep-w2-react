export default function Person({ person }) {
    return (
      <div>
        {person ? (
          <ul>
            <li><strong>First Name:</strong> {person.firstName}</li>
            <li><strong>Last Name:</strong> {person.lastName}</li>
            <li><strong>Email:</strong> {person.email}</li>
          </ul>
        ) : (
          <p>No data available</p> 
        )}
      </div>
    );
  }
  