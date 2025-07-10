const MainLayout = ({ children, userName, showBackground = false }) => {
  return (
    <>
      {/* Background image overlay (non-layout affecting) */}
      {showBackground && (
        <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none z-0">
          <img
            src="src/assets/pencils-bg.png"
            alt="Decoration"
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Content */}
      <div className="pt-10 px-40 pb-6 relative z-10">{children}</div>
    </>
  );
};

export default MainLayout;
