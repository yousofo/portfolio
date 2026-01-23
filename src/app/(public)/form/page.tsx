import UIGenereationForm from "@/modules/projects/UIGenereationForm";
 import DynamicForm from "@/modules/projects/DynamicForm";
const style = `
 
  #contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  input,
  .validation-container {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    font-size: 1rem;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    width: 100%;
  }

  .invalid {
    border: 2px solid red;
    box-shadow: 0 0 5px red;
  }

  .validation-container.invalid::before {
    content: attr(data-error);
    color: red;
    font-size: 0.8rem;
  }

  #contact-submit-btn {
    padding: 0.5rem 1rem;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  #contact-submit-btn:hover {
    background-color: darkblue;
  }
 
`;

export default async function Page() {

  return (
    <div   className="flex flex-col items-center justify-center h-screen gap-4 p-4 container mx-auto">
         <DynamicForm  />
 
      <UIGenereationForm  />
    </div>
  );
}
