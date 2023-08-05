import { graphql, PageProps, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to DevStickers">
      <div className="grid">
        {data.allContentfulProduct.nodes.map((item) => (
          <article>
            <GatsbyImage
              image={getImage(item.preview?.gatsbyImageData!)!}
              alt={item.name!}
            />
            <Link to={`/products/${item.id}`}>
              <h2>{item.name}</h2>
              <h4>{item.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}
export const query = graphql`
  query Stickers {
    allContentfulProduct {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
