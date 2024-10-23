// Type of the component prop
type ExampleComponentProps = {
  title: string;
};

// Actual Component
const ExampleComponent: React.FC<ExampleComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};

//Component export
export default ExampleComponent;
