import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Countries from "./Components/CountryFlags/Countries/Countries";
import Country from "./Components/CountryFlags/Country/Country";
import DetailCountry from "./Components/CountryFlags/DetailsCountry/DetailCountry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="Home" element={<Navigate to="/" replace />} />
          <Route path="Details">
            <Route index element={<DetailCountry />} />
            <Route path=":name" element={<Country />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React from "react";
// import ContainerGrid from "./Components/MUITest/ContainerGrid";

// function App() {
//   return (
//     <>
//       <ContainerGrid />
//     </>
//   );
// }

// export default App;
