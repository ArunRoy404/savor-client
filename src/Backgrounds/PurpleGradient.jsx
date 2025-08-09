const PurpleGradient = ({children}) => {
    return (
        <div className="min-h-screen w-full relative bg-white">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "#ffffff",
                    backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(173, 109, 244, 0.5),
          transparent 70%
        )
      `,
                    filter: "blur(80px)",
                    backgroundRepeat: "no-repeat",
                }}
            />
            {children}
        </div>
    );
};

export default PurpleGradient;