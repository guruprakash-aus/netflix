import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionMap from "../utils/selection-map";

function Browse() {
  // We need the series and the films
  const { series } = useContent("series");
  //console.log(series);
  const { films } = useContent("films");
  //console.log(films);

  // We need slides
  // Combine both series and films along with Genre(Map)
  const slides = selectionMap({ series, films });
  // console.log(slides);
  // Pass it to the browse container

  return <BrowseContainer slides={slides} />;
}

export default Browse;
