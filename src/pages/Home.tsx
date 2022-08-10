import React, {useEffect, useState} from 'react';
import axios from "axios";

function Home() {
  const [text, setText] = useState('Fetching...');

  useEffect(() => {
    axios
      .get<string>(process.env.REACT_APP_API_URL + '/hello')
      .then(value => setText(value.data))
      .catch(() => setText("No API response"))
  }, []);

  return (
      <div className="p-3 w-52 mx-auto">
        <header className="mb-3 text-xl text-center">
          {text}
        </header>
        <div className="flex flex-col">
          <a
            className="bg-sky-200 hover:bg-sky-300 active:bg-sky-400 focus:ring-2 focus:ring-sky-100 rounded px-3 py-2 text-xl"
            href="/community">community</a>
        </div>
    </div>
  );
}

export default Home;