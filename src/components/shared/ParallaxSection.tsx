const ParallaxSection = ({ image, height = "h-screen", children }) => {
  return (
    <section
      className={`${height} bg-cover bg-center bg-fixed`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </section>
  );
};

export default ParallaxSection;
