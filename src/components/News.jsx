import React from "react";
import Card from "./Card";

export default function News() {
  const data = [
    { title: "Ilmiy unvon", date: "2024.11.24"},
    { title: "Institut unvkengashion", date: "2024.11.24"},
    { title: "Ilmiy kengash", date: "2024.11.24"},
    { title: "Xalqaro hamkorlik", date: "2024.11.24"},
];
  return (
    <div>
      <div className="">
        <h2 className="text-8">Ilmiy yangiliklar</h2>
      </div>
      <div className="grid grid-cols-4">{data && data.map((e)=>
      <Card data={e}/>
      )}</div>
    </div>
  );
}
