import { useEffect, useState } from "react";
import styles from "../dogs.module.css";
import { DogService } from "../../../services/dog.service";
import { Link } from "react-router-dom";

function DogsList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dogsData = await DogService.getAll();
      setDogs(dogsData);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.dogsList}>
      {dogs.map((dog) => {
        return (
          <div
            key={dog.id}
            className={`${styles.dogItem}${
              dog.viewed ? " " + styles.viewed : ""
            }`}
          >
            <Link to={"dogs/" + dog.id}>
              <img src={dog.image} alt="" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default DogsList;
