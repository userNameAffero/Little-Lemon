import React from 'react';
import heroimage from './img_pop.png';
import greeksalad from './greeksalad.png';
import arrowright from './arrowright.svg';
import stars from './Stars.png';
import av1 from './av1.png'
import av2 from './av2.png'
import av3 from './av3.png'
import av4 from './av4.png'
import doubleimg from './doubleimg.png'

function Main() {
  return (
    <main>
      <section style={{ height: '625px', backgroundColor: '#495E57', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{ alignItems: 'left', justifyContent: 'left'}}>
          <h1 style={{ fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '64px', color: '#F4CE14'}}>Little Lemon</h1>
          <h2 style={{ fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '40px', color: '#EDEFEE', marginTop: '-36px' }}>Chicago</h2>
          <p style={{ fontFamily: 'Karla', fontWeight: '500', fontSize: '20px', color: '#EDEFEE', maxWidth: '280px'}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button style={{ marginTop: '120px', fontFamily: 'Karla', fontWeight: '800', fontSize: '20px', color: '#2C302F', backgroundColor: '#F4CE14', border: 'none', padding: '12px', paddingLeft: '24px', paddingRight: '24px', borderRadius: '16px' }}>Reserve a table</button>
        </div>
        <div style={{alignItems: 'left', justifyContent: 'left', marginLeft: '160px', marginTop: '160px'}}>
          <img src={heroimage} alt="Salmon Bowl"></img>
        </div>
      </section>
      <section style={{ height: '625px', backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', marginTop: '120px',}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
          <h1 style={{ fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '64px', color: '#2C302F', marginRight: '200px'}}>This week's specials</h1>
          <button style={{ fontFamily: 'Karla', height: '56px', width: '200px', fontWeight: '800', fontSize: '20px', color: '#2C302F', backgroundColor: '#F4CE14', border: 'none', padding: '12px', paddingLeft: '24px', paddingRight: '24px', borderRadius: '16px' }}>Order Online</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{ borderRadius: '16px', backgroundColor: '#F1F1F1', display: 'block', maxWidth: '280px', marginRight: '24px'}}>
          <img src={greeksalad} alt="Greek Salad" style={{width: '100%', height: 'auto'}}></img>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px'}}>
            <p style={{ color: '#2C302F', fontWeight: '700', fontSize: '20px'}}>Greek Salad</p>
            <p style={{ color: '#575757', fontWeight: '500', fontSize: '20px'}}>$12.99</p>
          </div>
          <div>
            <p style={{ paddingLeft: '20px', paddingRight: '20px', color: '#575757', fontWeight: '400', fontSize: '16px'}}>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          </div>
          <div style={{ display: 'flex', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px', alignItems: 'center'}}>
            <p style={{ color: '#2C302F', fontWeight: '500', fontSize: '16px'}}>Order for delivery</p>
            <img src={arrowright} alt="Arrow Right" style={{ paddingLeft: '12px'}}></img>
          </div>
        </div>
        <div style={{ borderRadius: '16px', backgroundColor: '#F1F1F1', display: 'block', maxWidth: '280px'}}>
          <img src={greeksalad} alt="Greek Salad" style={{width: '100%', height: 'auto'}}></img>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px'}}>
            <p style={{ color: '#2C302F', fontWeight: '700', fontSize: '20px'}}>Greek Salad</p>
            <p style={{ color: '#575757', fontWeight: '500', fontSize: '20px'}}>$12.99</p>
          </div>
          <div>
            <p style={{ paddingLeft: '20px', paddingRight: '20px', color: '#575757', fontWeight: '400', fontSize: '16px'}}>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          </div>
          <div style={{ display: 'flex', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px', alignItems: 'center'}}>
            <p style={{ color: '#2C302F', fontWeight: '500', fontSize: '16px'}}>Order for delivery</p>
            <img src={arrowright} alt="Arrow Right" style={{ paddingLeft: '12px'}}></img>
          </div>
        </div>
        <div style={{ borderRadius: '16px', backgroundColor: '#F1F1F1', display: 'block', maxWidth: '280px', marginLeft: '24px'}}>
          <img src={greeksalad} alt="Greek Salad" style={{width: '100%', height: 'auto'}}></img>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px'}}>
            <p style={{ color: '#2C302F', fontWeight: '700', fontSize: '20px'}}>Greek Salad</p>
            <p style={{ color: '#575757', fontWeight: '500', fontSize: '20px'}}>$12.99</p>
          </div>
          <div>
            <p style={{ paddingLeft: '20px', paddingRight: '20px', color: '#575757', fontWeight: '400', fontSize: '16px'}}>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          </div>
          <div style={{ display: 'flex', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px', alignItems: 'center'}}>
            <p style={{ color: '#2C302F', fontWeight: '500', fontSize: '16px'}}>Order for delivery</p>
            <img src={arrowright} alt="Arrow Right" style={{ paddingLeft: '12px'}}></img>
          </div>
        </div>
      </div>
      </section>
      <section style={{ display: 'flex', marginTop: '120px', marginLeft: '120px', marginRight: '120px'}}>
        <div style={{ backgroundColor: '#495E57', borderRadius: '16px', padding: '24px', margin: '12px', maxWidth: '20%'}}>
          <img src={stars} alt="Rating" style={{ padding: '12px'}}></img>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={av1} alt='Avatar 1' style={{ padding: '12px',}}></img>
            <h1 style={{paddingLeft: '32px', color: '#EDEFEE'}}>Jacob Jones</h1>
          </div>
          <p style={{ padding: '12px', color: '#EDEFEE'}}>"The Little Lemon Restaurant serves the most delicious and fresh food, always exceeding my expectations."</p>
        </div>
        <div style={{ backgroundColor: '#495E57', borderRadius: '16px', padding: '24px', margin: '12px', maxWidth: '20%'}}>
          <img src={stars} alt="Rating" style={{ padding: '12px'}}></img>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={av2} alt='Avatar 2' style={{ padding: '12px',}}></img>
            <h1 style={{paddingLeft: '32px', color: '#EDEFEE'}}>Cameron Williamson</h1>
          </div>
          <p style={{ padding: '12px', color: '#EDEFEE'}}>"The ambiance at the Little Lemon Restaurant is warm and inviting, perfect for a relaxing evening out."</p>
        </div>
        <div style={{ backgroundColor: '#495E57', borderRadius: '16px', padding: '24px', margin: '12px', maxWidth: '20%'}}>
          <img src={stars} alt="Rating" style={{ padding: '12px'}}></img>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={av3} alt='Avatar 3' style={{ padding: '12px',}}></img>
            <h1 style={{paddingLeft: '32px', color: '#EDEFEE'}}>Annette Black</h1>
          </div>
          <p style={{ padding: '12px', color: '#EDEFEE'}}>"I highly recommend the Little Lemon Restaurant for their attentive and friendly staff who go above and beyond to make you feel at home."</p>
        </div>
        <div style={{ backgroundColor: '#495E57', borderRadius: '16px', padding: '24px', margin: '12px', maxWidth: '20%'}}>
          <img src={stars} alt="Rating" style={{ padding: '12px'}}></img>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={av4} alt='Avatar 4' style={{ padding: '12px',}}></img>
            <h1 style={{paddingLeft: '32px', color: '#EDEFEE'}}>Darrell Steward</h1>
          </div>
          <p style={{ padding: '12px', color: '#EDEFEE'}}>"From the creative menu to the impeccable presentation, the Little Lemon Restaurant never disappoints when it comes to fine dining."</p>
        </div>
      </section>
      <section style={{ height: '625px', backgroundColor: '#495E57', display: 'flex', justifyContent: 'center', marginTop: '120px'}}>
      <div style={{ alignItems: 'left', justifyContent: 'left'}}>
          <h1 style={{ fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '64px', color: '#F4CE14'}}>Little Lemon</h1>
          <h2 style={{ fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '40px', color: '#EDEFEE', marginTop: '-36px' }}>Chicago</h2>
          <p style={{ fontFamily: 'Karla', fontWeight: '500', fontSize: '16px', color: '#EDEFEE', maxWidth: '280px', lineHeight: '20px'}}>The Little Lemon Restaurant offers a unique dining experience with its Mediterranean-inspired cuisine. The menu features a variety of fresh and flavorful dishes, using only the highest quality ingredients. The warm and inviting atmosphere provides a cozy and relaxed environment for guests to enjoy their meal. The knowledgeable and attentive staff are always on hand to provide exceptional service and make sure each dining experience is truly unforgettable. Whether you're in the mood for a light lunch, a romantic dinner, or a group gathering, the Little Lemon Restaurant is the perfect destination for all your dining needs.</p>
      </div>
      <img src={doubleimg} alt="Chef and Food" style={{padding: '48px'}}></img>
      </section>
    </main>
  );
}

export default Main;