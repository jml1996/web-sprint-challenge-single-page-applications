import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

export default function HomeOrders({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }
  return (
    <div className="container">
      <div className='user container'>
        <h2 name="cardName">{details.name}</h2>
        <p name="cardSize">Size: {details.size}</p>
        {
          !!details.toppings && !!details.toppings.length &&
          <div name="cardToppings">
            Toppings:
            <ul>
              {details.toppings.map((sel, idx) => <li key={idx}>{sel}</li>)}
            </ul>
          </div>
        }
        <p name="cardInstructions">Instructions: {details.instructions}</p>
      </div>
    </div>
  );
}




// import React from 'react'

// function User({ details }) {
//   if (!details) {
//     return <h3>Working fetching your friend&apos;s details...</h3>
//   }

//   return (
//     <div className='friend container'>
//       <h2 name="cardName">{details.name}</h2>
//       <p name="cardEmail">Email: {details.email}</p>
//       <p name="cardPass">Password: {details.password}</p>
//       <p name="agreed">Agreed to terms of service.</p>

//       {/* {
//         !!details.hobbies && !!details.hobbies.length &&
//         <div>
//           Hobbies:
//           <ul>
//             {details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)}
//           </ul>
//         </div>
//       } */}
//     </div>
//   )
// }

// export default User



// <div className="movie-list">
// {movieList.map(movie => (
//   <MovieDetails key={movie.id} movie={movie} />
// ))}
// </div>

// function MovieDetails(props) {
//   // const { title, director, metascore } = props.movie;
//   const { movie } = props;

//   return (

//   );
// }
