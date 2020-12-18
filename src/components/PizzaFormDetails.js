import React, { useState, useEffect } from "react";

function PizzaFormDetails(props) {
  const { formSubmit, pizza, inputChange, errors, buttonIsDisabled } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    formSubmit();
  };

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueNeeded = type === "checkbox" ? checked : value;
    inputChange(name, valueNeeded);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="size">Choice of Size</label>
      <p className="error">{errors.size}</p>
      <select name="size" id="size" value={pizza.size} onChange={onChange}>
        <option value="">Select</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <div>
        <p>Choice of Sauce</p>

        <label htmlFor="marinara">
          <input
            type="radio"
            id="marinara"
            name="sauce"
            value="marinara"
            checked={pizza.sauce === "marinara"}
            onChange={onChange}
          />
          Marinara Sauce
        </label>
        <br />
        <label htmlFor="gralic">
          <input
            type="radio"
            id="garlic"
            name="sauce"
            value="garlic"
            checked={pizza.sauce === "garlic"}
            onChange={onChange}
          />
          Garlic Ranch
        </label>
        <br />

        <label htmlFor="bbq">
          <input
            type="radio"
            id="bbq"
            name="sauce"
            value="bbq"
            checked={pizza.sauce === "bbq"}
            onChange={onChange}
          />
          BBQ Sauce
        </label>
        <br />

        <label htmlFor="spinach">
          <input
            type="radio"
            id="spinach"
            name="sauce"
            value="spinach"
            checked={pizza.sauce === "spinach"}
            onChange={onChange}
          />
          Spinach Alfredo
        </label>
      </div>
      <p>{errors.sauce}</p>

      <div>
        <p>Add Toppings</p>
        <p>Meats</p>
        <input
          type="checkbox"
          id="pepperoni"
          name="pepperoni"
          checked={pizza.pepperoni}
          onChange={onChange}
        />
        <label htmlFor="pepperoni">Pepperoni</label>
        <br />
        <input
          type="checkbox"
          id="italian"
          name="italian"
          checked={pizza.italian}
          onChange={onChange}
        />
        <label htmlFor="italian">Italian Sausage</label>
        <br />
        <input
          type="checkbox"
          id="meatball"
          name="meatball"
          checked={pizza.meatball}
          onChange={onChange}
        />
        <label htmlFor="meatball">Meatball</label>

        <p>Veggies</p>
        <input
          type="checkbox"
          id="mushrooms"
          name="mushrooms"
          checked={pizza.mushrooms}
          onChange={onChange}
        />
        <label htmlFor="mushrooms">Mushrooms</label>
        <br />
        <input
          type="checkbox"
          id="roastedSpinach"
          name="roastedSpinach"
          checked={pizza.roastedSpinach}
          onChange={onChange}
        />
        <label htmlFor="roastedSpinach">Roasted Spinach</label>
        <br />
        <input
          type="checkbox"
          id="redOnion"
          name="redOnion"
          checked={pizza.redOnion}
          onChange={onChange}
        />
        <label htmlFor="redOnion">Red Onion</label>
      </div>

      <div>
        <p>Choice of Substitute</p>
        <input
          type="checkbox"
          id="substitute"
          name="substitute"
          checked={pizza.substitute}
          onChange={onChange}
        />
        <label htmlFor="substitute">Gluten Free</label>
      </div>
      <div>
        <label htmlFor="special">Special Insturctions</label>
        <br />
        <textarea
          name="special"
          id="special"
          value={pizza.special}
          onChange={onChange}
        />
      </div>
      <button type="submit" disabled={buttonIsDisabled}>
        Add to Order
      </button>
    </form>
  );
}

export default PizzaFormDetails;
