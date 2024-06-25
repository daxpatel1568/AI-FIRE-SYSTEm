import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Services = () => {
  return (
    <div>
    <h3 className="kaipan">We Provide our Facility of Fire preventation to some of the place .</h3>
      <Hero
        title={"School"}
        imageUrl={"https://static.vecteezy.com/system/resources/previews/004/641/880/original/illustration-of-high-school-building-school-building-free-vector.jpg"}
      />
      <Hero
        title={"Airport"}
        imageUrl={"https://www.pngmart.com/files/21/Airport-PNG-Isolated-File.png"}
      /><Hero
      title={"Commercial Buildings"}
      imageUrl={"https://i.pinimg.com/736x/27/dc/c2/27dcc2f29adf815a59e63194b25c7817.jpg"}
    /><Hero
    title={"Residential Area"}
    imageUrl={"https://cdn.dribbble.com/users/2977519/screenshots/8154676/landscape-animation.gif"}
  /><Hero
  title={"Industrial Area"}
  imageUrl={"https://pro2-bar-s3-cdn-cf3.myportfolio.com/ec4657434c011e1a856a01752ef5f2f5/4660f53b1f7bff3a445995d3_rw_1200.gif?h=871b45bae2217a2953957135bcf4446a"}
/>
     <Hero title={"Hospitality"}
      imageUrl={"https://cdn.dribbble.com/users/3726898/screenshots/15561676/media/7c253c514be1fcaccb10f510ddea7dcd.gif"}
      ></Hero>
    <Hero
    
    title={"Entertainment Venue"}
    imageUrl={"https://media1.giphy.com/media/3o6Ztl7RvfwCp9mqhW/source.gif"}
  /><Hero
  title={"Ware House"}
  imageUrl={"https://www.climaxoverseas.com/wp-content/uploads/2023/03/warehouse.gif"}
/>
      {/* <AppointmentForm/> */}
    </div>
  );
};

export default Services;
