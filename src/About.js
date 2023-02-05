import React from "react";
import doubleimg from './doubleimg.png';


function About() {
    return (
      <>
        <section style={{ height: '625px', backgroundColor: '#495E57', display: 'flex', justifyContent: 'center',}}>
      <div style={{ alignItems: 'left', justifyContent: 'left'}}>
          <h1 style={{ fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '64px', color: '#F4CE14'}}>Little Lemon</h1>
          <h2 style={{ fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '40px', color: '#EDEFEE', marginTop: '-36px' }}>Chicago</h2>
          <p style={{ fontFamily: 'Karla', fontWeight: '500', fontSize: '16px', color: '#EDEFEE', maxWidth: '280px', lineHeight: '20px'}}>The Little Lemon Restaurant offers a unique dining experience with its Mediterranean-inspired cuisine. The menu features a variety of fresh and flavorful dishes, using only the highest quality ingredients. The warm and inviting atmosphere provides a cozy and relaxed environment for guests to enjoy their meal. The knowledgeable and attentive staff are always on hand to provide exceptional service and make sure each dining experience is truly unforgettable. Whether you're in the mood for a light lunch, a romantic dinner, or a group gathering, the Little Lemon Restaurant is the perfect destination for all your dining needs.</p>
      </div>
      <img src={doubleimg} alt="Chef and Food" style={{padding: '48px'}}></img>
      </section>
      </>
    );
}

export default About;