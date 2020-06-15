import React from "react";

export const AddTrip = ({ AddNewTrip }) => {
  let date, place, type;          /* define inputs*/
  const submit = (e) => {			/*submit handler*/
    e.preventDefault();
    const obj = {
      date: date.value,
      place: place.value,
      type: type.value,
    };
    AddNewTrip(obj);
    date.value = place.value = type.value = "";    //after submitting my form all values must be clear
  };
  return (
    <div className="form-container">
      <form onSubmit={submit} className="form black-container">   {/*here means if we click on submit go to submit function*/}
        <label>
          <h3>Add a trip</h3>
          <br />
          <br />
          <br />
        </label>
        <label>
          Date: <br />
          <input
            id="date"
            type="date"
            required		
            ref={(input) => (date = input)}   
          />
        </label>
        <label>
          Place: <br />
          <input
            id="date"
            type="text"
            required
            ref={(input) => (place = input)}
          />
        </label>
        <label>
          Type: <br />
          <select ref={(input) => (type = input)}>
            <option value="Trek">Trek</option>
            <option value="Club">Club</option>
          </select>
        </label>
        <input type="submit" value="SUBMIT" />       {/* submit button*/}
      </form>
    </div>
  );
};
