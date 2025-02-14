"use client";
import Card from "./Card";
import { useGetUserQuery } from "@/redux/apiSlice";

export default function Pedagoks() {

    const { data, error, isLoading } = useGetUserQuery();
    // console.log("user", data);
    if (isLoading) return <p>Loading...</p>;
    if (error) {
      console.log("errormessage", error.message);
      return <p>Error: {error.message}</p>;
    }


  return (
    <div>
      <div className="my-10">
        <h2 className="text-3xl ml-5">Pedagoklar</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
        {data.map((e, index) => (
          <Card p={true} key={e.id || index} data={e} />
        ))}
      </div>
    </div>
  );
}
