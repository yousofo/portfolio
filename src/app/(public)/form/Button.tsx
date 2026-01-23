"use client";

import useStore from "@/lib/store/store";

async function generateUI(message: string) {
  return fetch("http://localhost:3000/api/v1/ui-generator", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
}

// function Button(props: { children: React.ReactNode; className: string }) {
  

//   return (
    
//   );
// }

// export default Button;
