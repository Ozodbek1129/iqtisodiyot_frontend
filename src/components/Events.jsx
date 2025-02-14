"use client";
import Card from "./Card";
import { useGetEventQuery } from "@/redux/apiSlice";

export default function Events() {

    const { data, error, isLoading } = useGetEventQuery();
    // console.log("newsss", data);
    if (isLoading) return <p>Loading...</p>;
    if (error) {
      console.log("errormessage", error.message);
      return <p>Error: {error.message}</p>;
    }


  return (
    <div>
      <div className="my-10">
        <h2 className="text-3xl ml-5">Tadbirlar</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
        {data.map((e, index) => (
          <Card key={e.id || index} data={e} />
        ))}
      </div>
    </div>
  );
}
