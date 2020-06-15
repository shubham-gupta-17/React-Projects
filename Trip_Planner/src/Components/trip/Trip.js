import React from "react";
// this is UI for the list page i.e. how my trip UI will look like the passing values are javascrip that's why 
// i have put them under curly brackets i will pass these things as props


/*
 since from triplist we are passing each trip(which is in form of date,place,type so instead of extracting each
 component individually we can do 
 export const Trip=({props})=>{
	date:props.date
	type:props.type
 }

*/
export const Trip = ({ date, place, type }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{place}</td>
      <td>{type}</td>
    </tr>
  );
};
