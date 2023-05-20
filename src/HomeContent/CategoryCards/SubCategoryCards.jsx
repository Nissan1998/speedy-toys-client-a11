import React, { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import CategoryCard from "./CategoryCard";

const SubCategoryCards = () => {
  const [toys, setToys] = useState([]);
  console.log(toys);
  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
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
              <Tab style={{ borderRadius: "5px" }}>Sports Cars</Tab>
              <Tab style={{ borderRadius: "5px" }}>Racing Cars</Tab>
              <Tab style={{ borderRadius: "5px" }}>Construction Cars</Tab>
            </TabList>
            <TabPanel>
              <div className="grid md:grid-cols-3 mt-5">
                {toys.map((toy) => (
                  <CategoryCard key={toy._id} toy={toy}></CategoryCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <p style={{ color: "green" }}>sport</p>
            </TabPanel>
            <TabPanel>
              <p style={{ color: "green" }}>Rac</p>
            </TabPanel>
            <TabPanel>
              <p style={{ color: "green" }}>Cons</p>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCategoryCards;
