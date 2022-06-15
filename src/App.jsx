import React, { useState } from "react";
import { fakeDatabase } from "./fakeDatabase";

function App() {
  const [challenges, setChallenges] = useState(fakeDatabase.challenges);

  const handleUpdateComplexity = (id, type) => {
    // твой код
 
    setChallenges(challenges.map((item) => {
      if( type === 'plus' && item.id === id ) {
   item.complexity += 1
  return item
      } 
      if( type === 'minus' && item.id === id ) {
        item.complexity -= 1
        return item
      }
      return item
    }))
   

  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="bg-light text-center p-2 display-6 mb-2">
            Сложные чалленги
          </div>
          <div>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>№</th>
                  <th>Название</th>
                  <th>Сложность</th>
                </tr>
              </tbody>
              <tbody>
                {challenges.map((challenge, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td className="w-75">{challenge.name}</td>
                      <td>
                        <div className="d-flex">
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() =>
                              handleUpdateComplexity(challenge.id, "minus")
                            }
                          >
                            -
                          </button>
                          <div style={{ minWidth: 50, textAlign: "center" }}>
                            {challenge.complexity}
                          </div>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() =>
                              handleUpdateComplexity(challenge.id, "plus")
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
