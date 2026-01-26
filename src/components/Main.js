import React from 'react';

function Main(props) {
  return (
    <main>
      <section>
        <article>
          <img src={`${process.env.PUBLIC_URL}/images/main1.jpg`} alt="메인이미지1" />
        </article>

        <article>
          <img src={`${process.env.PUBLIC_URL}/images/shop.jpg`} alt="메인이미지2" />
        </article>

        <article>
        <img src={`${process.env.PUBLIC_URL}/images/story.jpg`} alt="메인이미지3" />
        </article>
        <img src={`${process.env.PUBLIC_URL}/images/in_star.jpg`} alt="메인이미지3" />
        

        <article>

        </article>
      </section>
    </main>
    
  );
}

export default Main;