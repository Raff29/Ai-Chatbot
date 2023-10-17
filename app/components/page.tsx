type Props = {
  title: string;
};

const Page: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>This is a simple page in TypeScript for a Next.js app.</p>
    </div>
  );
};

export default Page;