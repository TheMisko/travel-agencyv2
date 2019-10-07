import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Destinacija from "./pages/destinacija";
import Home from "./pages/home";
import Pretrazi from "./pages/pretrazi";
import Onama from "./pages/o_nama";
import Destinacije from "./pages/destinacije";

import "./App.css";

function App() {
  const [message, setMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState("/api");
  const [urlDataBase, setUrlDataBase] = useState("/api/notes");
  const [dataBase, setDataBase] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [urlSingleDestination, setUrlSingleDestination] = useState(
    "/api/notes/London"
  );
  const [destination, setDestination] = useState([{}]);

  const fetchData = useCallback(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setMessage(json.message);
        setIsFetching(false);
      })
      .catch(e => {
        setMessage(`API call failed: ${e}`);
        setIsFetching(false);
      });
  }, [url]);

  useEffect(() => {
    setIsFetching(true);
    fetchData();
  }, [fetchData]);

  const fetchDataBase = useCallback(() => {
    fetch(urlDataBase)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setDataBase(json);
        setIsFetching(false);

        console.log(json);
      })
      .catch(e => {
        // setMessage(`API call failed: ${e}`);
        setLoading(false);
      });
  }, [urlDataBase]);

  useEffect(() => {
    setLoading(true);
    fetchDataBase();
  }, [fetchDataBase]);

  const fetchSingleDestination = useCallback(() => {
    fetch(urlSingleDestination)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setDestination(json);
        setIsFetching(false);

        console.log(json);
      })
      .catch(e => {
        // setMessage(`API call failed: ${e}`);
        setLoading(false);
      });
  }, [urlSingleDestination]);

  useEffect(() => {
    setLoading(true);
    fetchSingleDestination();
  }, [fetchSingleDestination]);
  console.log(destination);
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/pretrazi" component={Pretrazi} />
        <Route exact path="/o_nama" component={Onama} />
        <Route exact path="/destinacija/:id" component={Destinacija} />
        <Route exact path="/destinacije" component={Destinacije} />
      </div>
    </BrowserRouter>
  );
}

export default App;
