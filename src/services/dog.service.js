import axios from "axios";
import { checkSessionStorage, setSessiontorage } from "../helpers/helpers";
import { dogsStorageName } from "../constant/constant";

export const DogService = {
  async getAll() {
    let data = checkSessionStorage(dogsStorageName);

    if (!data) {
      const responce = await axios.get(
        "https://dog.ceo/api/breed/hound/images/random/10"
      );

      data = responce.data.message.map((item, index) => {
        return { id: index + 1, image: item, viewed: false };
      });

      setSessiontorage(dogsStorageName, data);
    }

    return data;
  },
  async getById(id) {
    const responce = await this.getAll();
    let data = {};
    for (let item of responce) {
      if (item.id == id) {
        data = item;
        break;
      }
    }
    return data;
  },
  setDog(dogData) {
    let data = checkSessionStorage(dogsStorageName);
    let newDogList = data.map((item, index) => {
      if (item.id == dogData.id) {
        return { ...item, ...dogData };
      }
      return item;
    });
    setSessiontorage(dogsStorageName, newDogList);
  },
};
