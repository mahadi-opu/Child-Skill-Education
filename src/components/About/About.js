import img from "../../images/img.png"

// Static About us page for now 
const About = () => {
    return (
        <div className="py-5">
            <h1>This is About Us</h1>
            <div className="d-flex container">
                <div className="w-50" >
                    <img className="img-fluid p-5" src={img} alt="" />
                </div>
                <div className="w-50 py-5">
                    <h4 className="text-start lh-1 py-3">Welcome to the world of SELF empowerment!!</h4>
                    <p className="text-start lh-1">Rainobrain is one of the world’s leading children institutes for self empowerment. Having its corporate office in Chennai, India. Brainobrain kids academy private limited is an ISO 9001 : 2015 certified institution established in the year 2003, manned by professionals who have had a decade of international experience in kids education and training. Brainobrain operates in 40 countries, such as India, UK, Norway, USA, Canada, Australia, Morocco, Yemen, Ireland, Slovenia, Poland, Macedonia, Libya, UAE, Denmark, France, Saudi Arabia, Serbia, Montenegro, Oman, Qatar, Croatia, Nigeria, New Zealand, Zambia, Bosnia & Herzegovina, Egypt, Cyprus, Austria, Czech Republic, Bulgaria, Malaysia, Kuwait, Sri Lanka, Bahrain, Hungary, Kosovo, Germany, Sweden and Switzerland. Brainobrain has more than 950 successful franchise centres in all these countries. Brainobrain has transformed the lives of more than 2,00,000 children all over the world with its high-quality programmes.</p>

                    <h4 className="text-start lh-1 py-3">Mission</h4>

                    <p className="text-start lh-1">Our mission is to nurture the children of this world in bringing out the real leader in him/her, who are the hopes for the future of this world.</p>


                    <h4 className="text-start lh-1 py-3">Vision</h4>

                    <p className="text-start lh-1">Our vision is to become one of the admirable organisation in this world in spreading the values of love, honesty, fun and happiness through our children.Our aim is to promote heart-based education for every one all over the world.</p>
                </div>
            </div>
        </div>
    );
};

export default About;