import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api");
      setData(data)
    }

    fetchData()
  }, []);
  
  return (
    <div>
      {data && data.map(data => {
        return <div key={data.firstName + data.lastName}>
          <p>{data.firstName} {data.lastName} </p>
        </div>
      })}
    </div>
  )
}

export default App;
