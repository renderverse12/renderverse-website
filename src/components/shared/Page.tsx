const Page = ({ children, styling }) => {
  return <div className={`px-60 ${styling}`}>{children}</div>;
};

export default Page;
