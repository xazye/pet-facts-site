// src/CatBreedDetails.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CatBreedDetail } from "./interfaces/CatBreedDetail";

interface CatBreedDetailsProps {
  title: string;
  image: (details: CatBreedDetail['thumbnail']) => void;
}



const CatBreedDetails: React.FC<CatBreedDetailsProps> = ({ title, image }) => {
  const [details, setDetails] = useState<CatBreedDetail | null>(null);

  useEffect(() => {
    const fetchCatBreedDetails = async () => {
      const url = "https://en.wikipedia.org/w/api.php";
      const params = {
        action: "query",
        format: "json",
        prop: "extracts|pageimages",
        exintro: true,
        explaintext: true,
        titles: title,
        pithumbsize: 1024,
        origin: "*",
      };

      try {
        const response = await axios.get(url, { params });
        const pages = response.data.query.pages;
        const page = Object.values(pages)[0] as CatBreedDetail;

        setDetails(page);
      } catch (error) {
        console.error("Error fetching cat breed details:", error);
      } finally {
      }
    };
    fetchCatBreedDetails();
  }, [title]);

  useEffect(() => {
    if (details?.thumbnail) {
      image(details.thumbnail);
    }
  }, [details, image]);

  return (
    <div className="text-white">
      <h2 className="font-semibold text-title">{title}</h2>
      {details && (
        <div>
          {/* <h3>{details.title}</h3> */}
          {/* {details.thumbnail && (
            image(details.thumbnail)
          )} */}
          <p className="font-ubuntu">{details.extract}</p>
        </div>
      )}
    </div>
  );
};

export default CatBreedDetails;
