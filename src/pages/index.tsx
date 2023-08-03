import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to DevStickers">
      {data.allContentfulProduct.nodes.map((item) => (
        <article>
          <GatsbyImage
            image={getImage(item.preview?.gatsbyImageData!)!}
            alt={item.name!}
          />
          <h2>{item.name}</h2>
          <h4>{item.price}</h4>
        </article>
      ))}
    </Layout>
  );
}
export const query = graphql`
  query Stickers {
    allContentfulProduct {
      nodes {
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
