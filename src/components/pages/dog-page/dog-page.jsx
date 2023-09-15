import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DogService } from "../../../services/dog.service";

function DogPage() {
  const { id } = useParams();
  const [dogData, setDogData] = useState({});

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await DogService.getById(id);
      data.viewed = true;
      DogService.setDog(data);
      setDogData(data);
    };

    fetchData();
  }, [id]);

  // if (!car?.name) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="page-wrapper">
      <div className="home-link">
        <Link to="/">Return to main page</Link>
      </div>
      <h1>Dog detail - {id}</h1>
      {dogData?.image ? (
        <img src={dogData.image} alt="" />
      ) : (
        "Image is not available"
      )}
    </div>
  );
}

export default DogPage;
