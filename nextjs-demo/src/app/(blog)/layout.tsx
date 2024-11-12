const RootLayout = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html>
      <body>
        <h1>Blog group</h1>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
