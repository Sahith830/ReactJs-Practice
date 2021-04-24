import React from "react";

//With JSX
const WithJSX = () => {
    return (
        <div>
      <h1>
          Hello Peeps with JSX
      </h1>
    </div>
  );
};

//Without JSX
const WithoutJSX = () => {
    return React.createElement('div', {className : 'outer'}, React.createElement('h3', {id : 'inner'}, 'Hello Peeps without JSX'));
};

export { WithJSX, WithoutJSX };

