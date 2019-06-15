import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import topojson from 'data/topo/portugal.json';

const MapPortugal = () => {
  return (
    <ComposableMap
      width={300}
      projectionConfig={{
        scale: 4600,
        xOffset: 460,
        yOffset: 2820,
      }}
      style={{
        width: 'auto',
        height: '100%',
      }}
    >
      <Geographies geography={topojson} disableOptimization>
        {(geographies, projection) =>
          geographies.map((geography, i) => (
            <Geography
              key={`${geography.properties.NAME_1}-${i}`}
              cacheId={`${geography.properties.NAME_1}-${i}`}
              geography={geography}
              projection={projection}
              round
              style={{
                default: {
                  fill: '#FFD766',
                  stroke: '#F0AF1C',
                  strokeWidth: 0.75,
                  outline: 'none',
                },
                hover: {
                  fill: '#F0AF1C',
                  stroke: '#F0AF1C',
                  strokeWidth: 0.75,
                  outline: 'none',
                },
                pressed: {
                  fill: '#FFD766',
                  stroke: '#F0AF1C',
                  strokeWidth: 0.75,
                  outline: 'none',
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapPortugal;
