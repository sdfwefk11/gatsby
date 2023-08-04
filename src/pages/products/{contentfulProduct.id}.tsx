import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulProduct?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulProduct?.name!}>
      <GatsbyImage image={image!} alt={data.contentfulProduct?.name!} />
      <h2>${data.contentfulProduct?.price}</h2>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 250, placeholder: BLURRED)
      }
    }
  }
`;
