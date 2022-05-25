interface AppLayoutProps {
  page: React.ReactNode;
}

const AppLayout = (props: AppLayoutProps) => {
  const { page } = props;
  return <div>{page}</div>;
};

export default AppLayout;
