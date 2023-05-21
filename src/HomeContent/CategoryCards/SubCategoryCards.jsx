import React, { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import CategoryCard from "./CategoryCard";

const SubCategoryCards = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const handleCategory = (category) => {
    const categories = toys.filter(
      (toy) => toy.subCategory.toLowerCase() === category
    );
    setCategory(categories);
    console.log(categories);
  };
  return (
    <div>
      <Tabs className="text-center">
        <TabList
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            margin: "20px",
            color: "yellow",
            borderRadius: "10px",
          }}
        >
          <Tab style={{ borderRadius: "5px" }}>Toys Categories</Tab>
        </TabList>

        <TabPanel style={{ fontSize: "20px", margin: "20px" }}>
          <Tabs>
            <TabList>
              <Tab style={{ borderRadius: "5px" }}>All Cars</Tab>
              <Tab
                onClick={() => handleCategory("sports")}
                style={{ borderRadius: "5px" }}
              >
                Sports Cars
              </Tab>
              <Tab
                onClick={() => handleCategory("racing")}
                style={{ borderRadius: "5px" }}
              >
                Racing Cars
              </Tab>
              <Tab
                onClick={() => handleCategory("construction")}
                style={{ borderRadius: "5px" }}
              >
                Construction Cars
              </Tab>
            </TabList>
            <TabPanel>
              <div className="grid md:grid-cols-3 gap-2 mt-5">
                {toys.map((toy) => (
                  <CategoryCard key={toy._id} toy={toy}></CategoryCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-3 h-auto mt-5">
                {category.map((toy) => (
                  <CategoryCard key={toy._id} toy={toy}></CategoryCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-3 h-auto mt-5">
                {category.map((toy) => (
                  <CategoryCard key={toy._id} toy={toy}></CategoryCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-3 h-auto mt-5">
                {category.map((toy) => (
                  <CategoryCard key={toy._id} toy={toy}></CategoryCard>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCategoryCards;
