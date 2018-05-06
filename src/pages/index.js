import React from "react";
import g from "glamorous";
import Link from "gatsby-link"

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <g.H1 display={"inline-block"}>
        Super Mario's Travel Blog
      </g.H1>
			<div>
      <img
        src= "http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/super-mario-odyssey-920x584.jpg"
        alt= "Super Mario Odyssey"
      />
      <p>Mario throws his hat in front of {data.site.siteMetadata.location}.</p>
    </div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link 
            to={node.fields.slug}
            css={{ textDecoration: 'none', color: 'inherit'}}
          >
            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{" "}
              <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
            </g.H3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    site{
      siteMetadata {
        location  
      }
    },
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          },
          excerpt
          fields {
            slug
          }
          html
        }
      }
    }
  }
`;