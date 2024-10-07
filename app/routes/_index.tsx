import React from "react";
import {
  type ActionFunctionArgs,
  type MetaFunction,
  json,
} from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "titleContent",
    },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const data = String(formData.get("data"));
  return json({ some: data });
}

export default function Index() {
  return (
    <div className="w-screen h-screen bg-red-200 flex !font-quick">
      <div className="flex flex-col justify-between items-center w-[500px] mx-auto py-10 my-auto rounded-3xl bg-neutral-300 border-2 border-black max-h-fit">
        <p className="font-bold text-3xl">TESTING</p>
        <p className="font-normal text-xl">VISUAL</p>
        <div className="flex flex-row gap-12 mt-10">
          <div className="bg-red-600 w-10 h-10" />
          <div className="bg-yellow-600 w-10 h-10" />
          <div className="bg-blue-600 w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
