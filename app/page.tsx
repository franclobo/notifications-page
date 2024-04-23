'use client';
import { useState, useEffect, useContext } from 'react';
import Image from "next/image";
import { DataContext } from "@/context/DataProvider";

export default function Home() {
  const { data, setData } = useContext(DataContext);
  const [countNotifications, setCountNotifications] = useState(0);

  useEffect(() => {
    const unreadNotifications = data.filter(item => !item.viewed).length;
    setCountNotifications(unreadNotifications);
  }, [data]);

  const handleMarkAsRead = (id: number) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, viewed: true };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleMarkAllAsRead = () => {
    const updatedData = data.map(item => ({ ...item, viewed: true }));
    setData(updatedData);
  };

  return (
    <main className="flex flex-col items-center justify-between p-10 md:shadow-md md:rounded-[20px]">
      <header className="flex items-center justify-between w-1/2">
        <h1 className="text-xl font-bold">Notifications <span className="bg-blue-900 text-white px-3 rounded-md">{countNotifications}</span></h1>
        <p onClick={handleMarkAllAsRead} className="text-gray-500 cursor-pointer">Mark all as read</p>
      </header>
      <div className="grid grid-cols-1 gap-4 mt-10 w-1/2">
        {data.map(item => (
          <div key={item.id} className={`${item.viewed === true ? "bg-white" : "bg-blue-100"} p-4 rounded-lg shadow-md cursor-pointer w-full`} onClick={() => handleMarkAsRead(item.id)}>
            <div className="flex items-start justify-center">
              <div className="flex items-center">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full">
                <div className="flex items-center justify-between w-full">
                  <div className=" flex flex-wrap items-center justify-start gap-1 ml-4">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.activity}</p>
                    <p className={`${item.message === "Chess Club" ? "font-bold text-blue-950":"text-sm"}`}>{item.message}</p>
                    {item.viewed ? null : <div className="w-4 h-4 bg-red-500 rounded-full"></div>}
                  </div>
                </div>
                <p className="text-sm text-gray-500 ml-4">{item.time}</p>
                {item.content.charAt(0) === "/" ? (
                  ""
                ) : (
                  <p className={`${item.content ? "border border-solid border-gray-300 p-5" : ""} text-sm text-gray-500 ml-4`}>{item.content}</p>
                )}
              </div>
              {item.content.charAt(0) === "/" ? (
                  <Image
                    src={item.content}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                ) : (
                  ""
                )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
