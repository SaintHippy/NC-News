import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromServer) => {
      setTopics(topicsFromServer);
    });
  }, []);

  return (
    <div ClassName="listBox">
      <h1 className="titleText">Topics</h1>
      <ul className="textList">
        {topics.map((element) => {
          return (
            <li key={element.slug}>
              <Link to={`/articles/${element.slug}`}>
                <h2>{element.slug}</h2>
                <p>{element.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicList;
