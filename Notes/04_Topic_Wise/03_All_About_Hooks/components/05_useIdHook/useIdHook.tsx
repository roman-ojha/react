import EmailForm from "./EmailForm";
import EmailFormUseId from "./EmailFormUseId";

const UseIdHook = (): React.JSX.Element => {
  return (
    <>
      {/* here EmailFile we have 'id' attribute with same id value so whenever we will click on 'Email' label on any of the Email form the first Email form input will get focused, in that case we can use 'useId' */}
      <EmailForm />
      <article style={{ marginBlock: "1rem" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui hic quis
        maiores voluptates, ab eligendi quibusdam iste, totam voluptatum,
        aperiam sed iusto? Consequuntur quos perspiciatis hic quam temporibus
        vitae porro voluptas iste sequi, totam assumenda vel aspernatur modi
        blanditiis quas. Sed amet officia assumenda! Voluptatem quisquam quo
        rerum totam quasi?
      </article>
      <EmailForm />
      <EmailFormUseId />
      <EmailFormUseId />
      <EmailFormUseId />
    </>
  );
};

export default UseIdHook;
