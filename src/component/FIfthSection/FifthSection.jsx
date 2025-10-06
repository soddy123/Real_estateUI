import React, { useState } from 'react';
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

function FifthSection() {
  const [isClick, setIsClick] = useState(false); // Manage toggle state

  const articles = [
    {
      id: 1,
      img: img1,
      headline: 'Article 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 2,
      img: img2,
      headline: 'Article 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 3,
      img: img3,
      headline: 'Article 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 4,
      img: img4,
      headline: 'Article 4: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 5,
      img: img5,
      headline: 'Article 5: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  // Determine articles to display
  const displayedArticles = isClick ? articles : articles.slice(0, 4);

  return (
    <section className="p-10 md:p-40 md:pt-10 flex flex-col gap-20 items-center justify-center border-b border-gray-300">
      <h1 className="text-2xl">Actual News</h1>

      {/* Articles Display */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        {displayedArticles.map((article) => (
          <div key={article.id} className="artical flex flex-col gap-2 w-96 p-10 shadow-md rounded-lg">
            <img
              className="min-h-[300px] max-h-[400px] h-full object-cover rounded-xl"
              src={article.img}
              alt={`Article ${article.id}`}
            />
            <h3 className="text-center text-lg font-bold">{article.headline}</h3>
            <button className="text-green-500 font-bold hover:underline">More details</button>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsClick(!isClick)}
        className="btn border border-gray-300 px-12 mt-12 py-2 rounded-lg hover:bg-gray-100"
      >
        See {isClick ? "Less" : "More"}
      </button>
    </section>
  );
}

export default FifthSection;
