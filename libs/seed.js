import filmsData from "../data/films.json";
import { collection, addDoc } from "firebase/firestore";

export function seedDatabase(db) {
  function getSlug(title) {
    return title.toLowerCase().split(" ").join("-");
  }

  filmsData.forEach(async (item) => {
    const docRef = await addDoc(collection(db, "films"), {
      ...item,
      slug: getSlug(item.title),
    });
  });
}
