export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen bg-blackish bg-[url('icons/Background.svg')] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
};
