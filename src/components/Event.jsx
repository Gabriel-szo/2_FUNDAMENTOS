import React from "react";

const renderSomething = (x) => {
  if (x) {
    return <h1>renderizando isso!</h1>;
  } else {
    return <h1>Tambem posso renderizar isso!</h1>;
  }
};

const Event = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Clicado");
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>

      <div>
        <button onClick={() => console.log("Clicado")}>
          Clique aqui tambem!
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            if (true) {
              console.log("isso nao deveria existir");
            }
          }}
        >
          Clique aqui, por favor!
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Event;
