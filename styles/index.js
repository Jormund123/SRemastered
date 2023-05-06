const styles = {
    innerWidth: "2xl:max-w-[1280px] w-full",
    interWidth: "lg:w-[80%] w-[100%]",
    paddings: "sm:p-16 xs:p-8 px-6 py-12",
    yPaddings: "sm:py-16 xs:py-8 py-12",
    xPaddings: "sm:px-16 px-6",
    topPaddings: "sm:pt-16 xs:pt-8 pt-12",
    bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexEnd: "flex justify-end",
    navPadding: "pt-[98px]",
    // hero section
    heroHeading:
        "font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",
    heroDText:
        "md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]",
    ".team-member-image": {
        width: "50%",
        height: "50%",
        objectFit: "cover",
    },
    ".keen-slider__slide": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    // additional styles
    ".team-carousel-wrapper": {
        margin: "50px auto",
        maxWidth: "1100px",
    },
    ".team-member": {
        textAlign: "center",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px",
        backgroundColor: "#ffffff00",
    },
    ".project-member": {
        textAlign: "center",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#ffffff00",
    },
    ".team-member img": {
        display: "block",
        margin: "0 auto",
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "30px",
    },
    ".project-member img": {
        display: "block",
        margin: "0 auto",
        width: "100%",
        height: "30vw",
        objectFit: "cover",
        borderRadius: "30px",
    },
    ".member-details h3": {
        fontSize: "20px",
        marginBottom: "5px",
        color: "#fff",
        fontWeight: "bolder",
    },
    ".member-details p": {
        fontSize: "16px",
        color: "#fefefe",
    },
    "@media (max-width: 600px)": {
        ".team-carousel-wrapper": {
            maxWidth: "100%",
            padding: "0 20px",
        },
        ".project-member img": {
            height: "70vw",
        },
    },
    "@media (min-width: 601px) and (max-width: 1100px)": {
        ".team-carousel-wrapper": {
            maxWidth: "80%",
        },
    },
};

export default styles;
