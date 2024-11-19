type Props = {
  children: React.ReactNode;
};

const CenterView = ({ children }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-1280 px-6 py-20 sm:px-0">{children}</div>
    </div>
  );
};

export default CenterView;
