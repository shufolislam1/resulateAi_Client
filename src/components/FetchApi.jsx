// import React, { useEffect, useState } from 'react';

// const FetchApi = () => {
//     const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
//         pokemons(limit: $limit, offset: $offset) {
//           count
//           next
//           previous
//           status
//           message
//           results {
//             url
//             name
//             image
//           }
//         }
//       }`;
      
//       const gqlVariables = {
//         limit: 2,
//         offset: 1,
//       };
//     useEffect(() => {
//         fetch('https://graphql-pokeapi.graphcdn.app/', {
//             credentials: 'omit',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 query: gqlQuery,
//                 // variables: gqlVariables,
//             }),
//             method: 'POST',
//         })
//             .then((res) => res.json())
//             .then((res) => console.log('Response from server', res));
//     }, [])
//     return (
//         <div>

//         </div>
//     );
// };

// export default FetchApi;