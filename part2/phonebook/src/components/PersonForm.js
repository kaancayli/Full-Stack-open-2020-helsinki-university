import React from "react";

const PersonForm = ({
  action,
  newName,
  handleInput,
  newNumber,
  handleNumber,
}) => {
  return (
    <form onSubmit={action}>
      <div>
        name: <input value={newName} onChange={handleInput} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
