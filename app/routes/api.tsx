import {
  json,
  type ActionFunctionArgs,
} from "@remix-run/node";
import { queryAiMobileFakeSearch } from "~/api/s";

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const formData = await request.formData();
//   const a = Object.fromEntries(formData);
//   console.log("+++++++", a);
// };

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const { messages } = Object.fromEntries(formData);
  try {
    const response = await queryAiMobileFakeSearch({
      messages: JSON.parse(messages.toString()),
    });
    // console.log("+++++++", response);
    return json({ response });
  } catch (e) {
    // console.log("+++++++e÷rror", e);
  }
//   return null;
};
