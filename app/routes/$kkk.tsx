import { ActionFunctionArgs, json } from "@remix-run/node";
import {
  Form,
  useActionData,
  useFetcher,
  useNavigation,
} from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const data = String(formData.get("data"));
  return json({ some: data });
}

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [inp, setInp] = useState("");
  const [inp2, setInp2] = useState("");
  const actionData = useActionData<typeof action>();
  console.log(actionData);

  return (
    <main>
      <div
        ref={containerRef}
        className="container w-screen h-screen bg-red-200"
      >
        <div ref={boxRef} className="box w-44 h-44 bg-green-500">
          <Form
            ref={formRef}
            onSubmit={(e) => {
              setInp("");
              setInp2("");
            }}
            method="post"
            action="/$kkk"
            reloadDocument={false}
            replace={false}
            navigate={false}
          >
            <p>
              <input
                type="text"
                name="email"
                value={inp}
                onChange={(e) => setInp(e.target.value)}
              />
            </p>

            <p>
              <input
                type="text"
                name="password"
                value={inp2}
                onChange={(e) => setInp2(e.target.value)}
              />
            </p>
            <input type="hidden" name="data" value={inp2 + inp} />
            <button type="submit">Sign Up</button>
          </Form>
        </div>
      </div>
    </main>
  );
}
