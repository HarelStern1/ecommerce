import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best selling... </h2>
      </div>
      <div className="products-container">
        {products?.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </>
  );
};

export default Home;
