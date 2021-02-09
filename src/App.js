import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({ name: "", gender: "", age: "" });
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
    if (items != null) {
      setMyCourse(JSON.parse(items));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(myCourses));
  }, [myCourses]);

  function addCourse(event) {
    event.preventDefault();
    // TODO
    console.log(inputData.name);
    const course = [...myCourses, inputData];
    setMyCourse(course);
    // recalculate GPA
  }

  return (
    <div className="card" style={{ width: 400 }}>
      <form onSubmit={(e) => addCourse(e)}>
        <div className="card-content">
          <p className="is-4 title has-text-centered">Add Pet</p>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              placeholder="e.q Coco"
              //update related state based on event
              onChange={(e) =>
                setInputData({ ...inputData, name: e.currentTarget.value })
              }
            ></input>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <select
              className="input"
              type="text"
              placeholder="Please select .."
              onChange={(e) =>
                setInputData({ ...inputData, gender: e.currentTarget.value })
              }
            >
              <option value="" disabled selected hidden>
                -- Select Gender --
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="field">
            <label className="label">Age</label>
            <input
              className="input"
              type="number"
              placeholder="e.q 5"
              onChange={(e) =>
                setInputData({ ...inputData, age: e.currentTarget.value })
              }
            ></input>
          </div>
          <button className="button is-danger is-fullwidth" type="submit">
            Submit
          </button>
          <div className="mb-4"></div>
          {/* display tables for all persons */}
          <p className="is-4 title has-text-centered">Pet List</p>
          {/* sample table */}

          {myCourses.map((item) => {
            return (
              <ItemTable name={item.name} gender={item.gender} age={item.age} />
            );
          })}
          <p>sunisa deeratrum 620610818</p>
        </div>
      </form>
    </div>
  );
}

export default App;
