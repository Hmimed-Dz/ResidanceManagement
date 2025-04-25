import React from 'react';
const data = [
  {
    id: 1,
    Title: 'Title 1',
    Description: 'Description 1',
    Link: 'https://example.com/link1',
    Image: 'https://example.com/image1.jpg',
  },
  {
    id: 2,
    Title: 'Title 1',
    Description: 'Description 1',
    Link: 'https://example.com/link1',
    Image: 'https://example.com/image1.jpg',
  },
  {
    id: 3,
    Title: 'Title 1',
    Description: 'Description 1',
    Link: 'https://example.com/link1',
    Image: 'https://example.com/image1.jpg',
  },
];

function Home() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          boxShadow: '0 16px 9px rgba(0, 25, 45, 0.1)',
        }}
      >
        <img
          style={{ width: '22%', borderRadius: '10px' }}
          src="src\assets\images\bigbang.jpg"
          alt="Hero"
        />
        <div style={{ margin: '17px', fontFamily: 'sans-serif' }}>
          <h4>Welcome to Our Website</h4>
          <span>
            {' '}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
            mollitia officia? Doloremque officiis repellat reiciendis ipsam
            cumque nemo perspiciatis ad atque! Nam maiores aperiam repellat
            repudiandae delectus pariatur quae deserunt! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Doloribus vitae, alias delectus
            voluptatum illum corrupti enim dolorem facilis in eligendi
            cupiditate totam sunt sequi? Quod nobis consectetur nam quasi illo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            temporibus. Iure cupiditate laborum at nesciunt quidem consectetur
            cum, nobis esse at!{' '}
          </span>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          boxShadow: '0 16px 9px rgba(0, 25, 45, 0.1)',
        }}
      >
        <img
          style={{ width: '22%', borderRadius: '10px' }}
          src="src\assets\images\AADL.jpg"
          alt="Hero"
        />
        <div style={{ margin: '17px', fontFamily: 'sans-serif' }}>
          <h4>Welcome to Our Website</h4>
          <span>
            {' '}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
            mollitia officia? Doloremque officiis repellat reiciendis ipsam
            cumque nemo perspiciatis ad atque! Nam maiores aperiam repellat
            repudiandae delectus pariatur quae deserunt! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Doloribus vitae, alias delectus
            voluptatum illum corrupti enim dolorem facilis in eligendi
            cupiditate totam sunt sequi? Quod nobis consectetur nam quasi illo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            temporibus. Iure cupiditate laborum at nesciunt quidem consectetur
            cum, nobis esse at!{' '}
          </span>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          boxShadow: '0 16px 9px rgba(0, 25, 45, 0.1)',
        }}
      >
        <img
          style={{ width: '22%', borderRadius: '10px' }}
          src="src\assets\images\buildings.jpg"
          alt="Hero"
        />
        <div style={{ margin: '17px', fontFamily: 'sans-serif' }}>
          <h4>Welcome to Our Website</h4>
          <span>
            {' '}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
            mollitia officia? Doloremque officiis repellat reiciendis ipsam
            cumque nemo perspiciatis ad atque! Nam maiores aperiam repellat
            repudiandae delectus pariatur quae deserunt! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Doloribus vitae, alias delectus
            voluptatum illum corrupti enim dolorem facilis in eligendi
            cupiditate totam sunt sequi? Quod nobis consectetur nam quasi illo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            temporibus. Iure cupiditate laborum at nesciunt quidem consectetur
            cum, nobis esse at!{' '}
          </span>
        </div>
      </div>
    </div>
    // { <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}> }
    //     { {data.map((item) => (
    //         <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
    //           <h2>{item.Title}</h2>
    //           <p>{item.Description}</p>
    //           <a href={item.Link} target="_blank" rel="noopener noreferrer">
    //             <img src={item.Image} alt={item.Title} style={{ width: '100%', height: 'auto' }} />
    //           </a>
    //         </div>
    //       ))} }
    //   </div>
    // </div>
  );
}

export default Home;
