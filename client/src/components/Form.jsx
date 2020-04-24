import React, { useState } from "react";

const Form = ({ createCow }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return createCow(name, description);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>
              Cow Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </li>
          <li>
            <label>
              Cow Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </li>
          <button type="submit">MAKE A COW NOW</button>
        </ul>
      </form>
    </div>
  );
};

export default Form;
