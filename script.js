const hBtn = document.querySelectorAll(".hBtn");
const resNav = document.querySelector(".resNav")
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
const navLinks = document.querySelectorAll(".resNav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        
        resNav.classList.add("hide");

        l1.classList.remove("rl1");
        l2.classList.remove("rl2");
        l3.classList.remove("rl3");
    });
});

hBtn.forEach(element => {
    element.addEventListener("click", () => {

        resNav.classList.toggle("hide");

        l1.classList.toggle("rl1")
        l2.classList.toggle("rl2")
        l3.classList.toggle("rl3")

    })
});

// treatments

const treatments = [
    {
        heading: "Sports Injury Rehab",
        text: "Sports injury rehab focuses on treating injuries, reducing pain, and restoring full function to help you get back to your peak performance.",
        img: "images/icon1.png",
        alt: "Sports Injury Rehab"
    },
    {
        heading: "Back & Neck Pain",
        text: "Address the root cause of back and neck pain with targeted treatments designed to improve mobility and provide long-term relief.",
        img: "images/icon2.png",
        alt: "Back & Neck Pain"
    },
    {
        heading: "Post-Surgery Recovery",
        text: "Professional post-surgical care to speed up recovery, manage pain, and help you regain strength and movement safely.",
        img: "images/icon3.png",
        alt: "Post-Surgery Recovery"
    },
    {
        heading: "Neurological Rehab",
        text: "Specialized therapy to help individuals recover and manage symptoms from neurological conditions through dedicated rehabilitation.",
        img: "images/icon4.png",
        alt: "Neurological Rehab"
    }
]

const container = document.querySelector(".treatCards");

treatments.forEach(treatment => {
    const treatCard = document.createElement("div");
    treatCard.classList.add("treatCard");

    const cardImg = document.createElement("div");
    cardImg.classList.add("cardImg")

    const img = document.createElement("img");
    img.src = treatment.img;
    img.alt = treatment.alt;
    img.decoding = "async";
    img.loading = "lazy";

    const heading3 = document.createElement("h3");
    heading3.classList.add("heading3");

    heading3.innerHTML = `${treatment.heading}`;

    const text = document.createElement("p");
    text.classList.add("text");

    text.innerHTML = `${treatment.text}`;

    cardImg.appendChild(img);
    treatCard.appendChild(cardImg);
    treatCard.appendChild(heading3);
    treatCard.appendChild(text);
    container.appendChild(treatCard);
});



// Why Dr. Avisek Kar

const whyData = [
    {
        title: "Expert Diagnosis",
        desc: "We don't just treat symptoms; we find the root cause of your pain using advanced assessment techniques to ensure long-term recovery.",
        img: "images/icon5.png",
        alt: "Expert Diagnosis"
    },
    {
        title: "Customized Treatment Plans",
        desc: "Every body is different. Your recovery plan is specifically tailored to your lifestyle, goals, and physical condition.",
        img: "images/icon6.png",
        alt: "Customized Treatment Plans"
    },
    {
        title: "Modern Techniques",
        desc: "From manual therapy to advanced sports rehab, we use evidence-based methods and the latest technology to speed up your healing.",
        img: "images/icon7.png",
        alt: "Modern Techniques"
    },
    {
        title: "Patient-Centered Approach",
        desc: "We believe in education. You’ll leave every session understanding your body better and knowing exactly how to maintain your progress at home.",
        img: "images/icon8.png",
        alt: "Patient-Centered Approach"
    },
    {
        title: "5000+ Happy Patients",
        desc: "With years of experience in Kolkata, we have helped thousands of people return to their pain-free lives and peak performance.",
        img: "images/icon9.png",
        alt: "5000+ Happy Patients"
    }
]

const whyContainer = document.querySelector(".whyCards");

whyData.forEach(data => {
    const whyCard = document.createElement("whyCard");
    whyCard.classList.add("whyCard");

    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.alt;
    img.decoding = "async";
    img.loading = "lazy";

    whyCard.appendChild(img);

    const span = document.createElement("span");

    const heading3 = document.createElement("h3");
    heading3.classList.add("heading3");

    heading3.innerHTML = `${data.title}`;

    const text = document.createElement("p");
    text.classList.add("text");
    text.innerHTML = `${data.desc}`;

    whyCard.appendChild(img);
    span.appendChild(heading3);
    span.appendChild(text);
    whyCard.appendChild(span);
    whyContainer.appendChild(whyCard);
});