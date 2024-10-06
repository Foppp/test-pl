import {
  type ActionFunctionArgs,
  type MetaFunction,
  json,
} from "@remix-run/node";

import { useRef } from "react";

export const meta: MetaFunction = () => {
  return [
    {
      title: "titleContentfeefdf",
    },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const data = String(formData.get("data"));

  return json({ some: data });
}

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-screen h-screen bg-red-200">
      <div className="flex flex-col justify-between items-center w-[500px] mx-auto border-2 border-solid rounded-3xl bg-green-400">
        <div className="flex flex-col border-r border-solid border-black">
          <div className=" w-full min-h-52 items-start align-top self-start">
            <div className="font-bold text-xl">contentt</div>
          </div>
          <div className="flex items-start align-top w-24 h-full self-start">
            <div className="max-h-52 h-full flex flex-col justify-center w-full">
              <span className="border border-red-300 w-10 mx-auto">1</span>
              <span className="border border-red-300 w-10 mx-auto">2</span>
            </div>
          </div>
        </div>
        <div className="border-r border-solid border-black">Fea</div>
      </div>
    </div>
  );
}
